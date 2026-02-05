// AI-Pulse RSS Aggregator - Configurable & Scalable
const Parser = require('rss-parser');
const axios = require('axios');
const { Octokit } = require('@octokit/rest');
const sanitizeHtml = require('sanitize-html');
const { URL } = require('url');
const fs = require('fs');
const path = require('path');
const { Readability } = require('@mozilla/readability');
const { JSDOM } = require('jsdom');
const crypto = require('crypto');
const linkedinHelper = require('./linkedin-helper');

// Load configuration from config.json
const CONFIG_PATH = path.join(__dirname, '..', 'config.json');
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
const SETTINGS = config.settings;
const CATEGORIES = config.categories;

// Language detection
let detectLang;
try {
  const { franc } = require('franc-min');
  detectLang = (text) => {
    if (!text || text.length < 20) return null;
    const code = franc(text);
    if (code === 'und') return null;
    // franc returns ISO 639-3 codes, map common ones
    const langMap = { fra: 'fr', eng: 'en', spa: 'es', deu: 'de', por: 'pt', ita: 'it', nld: 'nl', rus: 'ru', zho: 'zh', jpn: 'ja', kor: 'ko', ara: 'ar' };
    return langMap[code] || code;
  };
} catch (e) {
  console.error('franc-min not available, using feed-declared language only');
  detectLang = () => null;
}

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'AI-Pulse/3.0' }
});

// UTM parameters for AI-Pulse traffic tracking
function addUTMParams(url, category = 'general') {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();
    const mediumHosts = ['medium.com', 'www.medium.com', 'towardsdatascience.com', 'www.towardsdatascience.com'];
    if (mediumHosts.includes(hostname)) {
      url = `https://freedium.cloud/${url}`;
    }
  } catch (e) { /* skip */ }
  const utmParams = `utm_source=ai-pulse&utm_medium=reader&utm_campaign=article&utm_content=${category}`;
  return url.includes('?') ? `${url}&${utmParams}` : `${url}?${utmParams}`;
}

// Robust HTML sanitization
function sanitizeText(input) {
  if (!input) return '';
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} });
}

// Smart truncate at last punctuation
function smartTruncate(text, maxLength) {
  maxLength = maxLength || SETTINGS.summaryMaxLength || 600;
  if (!text || text.length <= maxLength) return text;
  let truncated = text.slice(0, maxLength);
  const punctuationRegex = /[.!?;:](?=\s|$)/g;
  const matches = [...truncated.matchAll(punctuationRegex)];
  if (matches.length > 0) {
    const lastMatch = matches[matches.length - 1];
    return text.slice(0, lastMatch.index + 1).trim();
  }
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 0) return truncated.slice(0, lastSpace).trim() + '...';
  return truncated.trim() + '...';
}

// ─── Deduplication ──────────────────────────────────────────
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'shall', 'this', 'that', 'these', 'those', 'it', 'its', 'not', 'no', 'nor', 'so', 'if', 'then', 'than', 'too', 'very', 'just', 'about', 'above', 'after', 'again', 'all', 'also', 'am', 'as', 'because', 'before', 'between', 'both', 'each', 'few', 'from', 'further', 'get', 'got', 'he', 'her', 'here', 'him', 'his', 'how', 'i', 'into', 'me', 'more', 'most', 'my', 'new', 'now', 'only', 'other', 'our', 'out', 'over', 'own', 'same', 'she', 'some', 'such', 'them', 'there', 'they', 'through', 'under', 'up', 'us', 'we', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'you', 'your',
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'et', 'ou', 'mais', 'dans', 'sur', 'pour', 'par', 'avec', 'est', 'sont', 'a', 'ont', 'ce', 'cette', 'ces', 'il', 'elle', 'ils', 'elles', 'nous', 'vous', 'son', 'sa', 'ses', 'leur', 'leurs', 'qui', 'que', 'quoi', 'dont', 'au', 'aux', 'ne', 'pas', 'plus', 'se', 'en', 'y'
]);

function normalizeTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

function titleSimilarity(wordsA, wordsB) {
  if (wordsA.length === 0 || wordsB.length === 0) return 0;
  const setA = new Set(wordsA);
  const setB = new Set(wordsB);
  const intersection = [...setA].filter(w => setB.has(w));
  return (2 * intersection.length) / (setA.size + setB.size);
}

function deduplicateArticles(articles) {
  if (!SETTINGS.deduplication || !SETTINGS.deduplication.enabled) return articles;
  const threshold = SETTINGS.deduplication.similarityThreshold || 0.7;
  const kept = [];
  const normalizedTitles = [];

  for (const article of articles) {
    const words = normalizeTitle(article.title);
    let isDuplicate = false;
    for (let i = 0; i < normalizedTitles.length; i++) {
      if (titleSimilarity(words, normalizedTitles[i]) >= threshold) {
        isDuplicate = true;
        // Keep reference to also-published sources
        if (!kept[i].alsoPublishedOn) kept[i].alsoPublishedOn = [];
        kept[i].alsoPublishedOn.push(article.source);
        break;
      }
    }
    if (!isDuplicate) {
      kept.push(article);
      normalizedTitles.push(words);
    }
  }
  return kept;
}

// ─── Article Processing ─────────────────────────────────────
async function processArticle(article, sourceName, tags, category, feedLang) {
  const rawSummary = sanitizeText(article.contentSnippet) || '';
  const articleUrl = article.link;

  // Create a unique hash for the article to save it locally
  const hash = crypto.createHash('md5').update(articleUrl).digest('hex');
  const localFileName = `${hash}.html`;
  const localPath = path.join(__dirname, '..', 'data', 'articles', localFileName);
  const relativeLink = `data/articles/${localFileName}`;

  // Detect language from content or use feed-declared language
  let detectedLang = detectLang(rawSummary || article.title);
  const lang = detectedLang || feedLang || 'en';

  // Try to fetch and extract content if it doesn't exist
  if (!fs.existsSync(localPath)) {
    try {
      const response = await axios.get(articleUrl, { timeout: 8000, headers: { 'User-Agent': 'AI-Pulse/3.0' } });
      const dom = new JSDOM(response.data, { url: articleUrl });
      const reader = new Readability(dom.window.document);
      const articleContent = reader.parse();

      if (articleContent && articleContent.textContent) {
        // Detect language from full content if not yet determined
        if (!detectedLang) {
          detectedLang = detectLang(articleContent.textContent.slice(0, 500));
        }

        const cleanHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${sanitizeText(articleContent.title)}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.8; color: #e2e8f0; max-width: 800px; margin: 40px auto; padding: 0 20px; background: #0a0e27; }
  h1 { color: #00d9ff; margin-bottom: 0.5em; }
  .metadata { color: #94a3b8; font-size: 0.9em; margin-bottom: 2em; border-bottom: 1px solid rgba(0,217,255,0.2); padding-bottom: 1em; }
  img { max-width: 100%; height: auto; border-radius: 8px; }
  a { color: #00d9ff; }
  p { margin-bottom: 1em; }
  blockquote { border-left: 3px solid #825ee4; padding-left: 15px; color: #94a3b8; }
  code { background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 3px; color: #ff79c6; }
  pre { background: rgba(0,0,0,0.4); padding: 15px; border-radius: 6px; overflow-x: auto; }
</style>
</head>
<body>
  <h1>${sanitizeText(articleContent.title)}</h1>
  <div class="metadata">
    Source: ${sourceName} | Date: ${new Date(article.pubDate).toLocaleDateString()} | Lang: ${lang.toUpperCase()} |
    <a href="${articleUrl}" target="_blank">Original Article</a>
  </div>
  <div class="content">
    ${sanitizeHtml(articleContent.content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, img: ['src', 'alt'] }
    })}
  </div>
</body>
</html>`;
        fs.writeFileSync(localPath, cleanHtml);
      }
    } catch (e) {
      console.error(`    Could not extract content for: ${articleUrl}`);
    }
  }

  // Use local reader-mode file if available, fallback to source URL
  const hasLocalContent = fs.existsSync(localPath);
  const finalReaderLink = hasLocalContent ? relativeLink : articleUrl;

  return {
    title: (sanitizeText(article.title) || 'Untitled').slice(0, 200),
    link: finalReaderLink,
    originalLink: articleUrl,
    pubDate: new Date(article.pubDate || Date.now()),
    source: sourceName,
    tags: tags,
    category: category,
    lang: detectedLang || feedLang || 'en',
    summary: smartTruncate(rawSummary),
    hasLocalContent: hasLocalContent
  };
}

// Aggregate feeds by category
async function aggregateCategory(categoryName, feeds) {
  console.error(`\nAggregating ${categoryName} feeds...`);
  const articles = [];
  const limit = SETTINGS.articlesPerFeed || 15;

  for (const feed of feeds) {
    try {
      console.error(`  Fetch: ${feed.name}`);
      const feedData = await parser.parseURL(feed.url);
      const items = [];
      for (const item of feedData.items.slice(0, limit)) {
        const processed = await processArticle(item, feed.name, feed.tags, categoryName, feed.lang);
        items.push(processed);
      }
      articles.push(...items);
    } catch (error) {
      console.error(`  Error: Failed to fetch ${feed.name}: ${error.message}`);
    }
  }

  // Sort by date, then deduplicate
  const sorted = articles.sort((a, b) => b.pubDate - a.pubDate);
  return deduplicateArticles(sorted);
}

// ─── README Generation ──────────────────────────────────────
const README_HEADER = `<div align="center">

<img src="assets/banner.png" alt="AI-PULSE Banner" width="100%">

> Curated content from the best sources - Auto-updated every 3 hours

[![GitHub Profile](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency) [![Repository](https://img.shields.io/badge/Source-Repo-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse) [![Reader](https://img.shields.io/badge/Live-Reader-blueviolet?style=for-the-badge&logo=readthedocs)](https://thephoenixagency.github.io/AI-Pulse/app.html) [![Documentation](https://img.shields.io/badge/Documentation-Technical-blue?style=for-the-badge&logo=googledocs)](https://github.com/ThePhoenixAgency/AI-Pulse/blob/main/database/SUPABASE_MIGRATION.md) [![Support](https://img.shields.io/badge/Support-Issues-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse/issues)

**Last Update:** ${new Date().toUTCString()}

---

## About The Developer

**Built by [ThePhoenixAgency](https://github.com/ThePhoenixAgency)** - AI & Cybersecurity Specialist

> Passionate about building secure, privacy-first applications that make a difference.

---

## Real-Time News Roundup

</div>

`;

const README_FOOTER = `
---

<div align="center">

### Connect With Me

[![GitHub Profile](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency) [![Repository](https://img.shields.io/badge/Source-Repo-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse) [![Reader](https://img.shields.io/badge/Live-Reader-blueviolet?style=for-the-badge&logo=readthedocs)](https://thephoenixagency.github.io/AI-Pulse/app.html) [![Documentation](https://img.shields.io/badge/Documentation-Technical-blue?style=for-the-badge&logo=googledocs)](https://github.com/ThePhoenixAgency/AI-Pulse/blob/main/database/SUPABASE_MIGRATION.md) [![Support](https://img.shields.io/badge/Support-Issues-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse/issues)

---

<sub>*Powered by AI-Pulse | 100% Free & Open Source | Built with love by ThePhoenixAgency*</sub>

</div>
`;

function generateREADME(categorizedArticles) {
  let readme = README_HEADER;
  const maxArticles = SETTINGS.maxArticlesPerCategory || 30;

  for (const [category, articles] of Object.entries(categorizedArticles)) {
    const catConfig = CATEGORIES[category];
    const labelEn = catConfig ? catConfig.labels.en : category;
    const labelFr = catConfig ? catConfig.labels.fr : category;

    // Section with anchor and data attributes for client-side filtering
    readme += `<section id="${category}" data-category="${category}">\n\n`;
    readme += `## ${labelEn} / ${labelFr}\n\n`;

    if (articles.length === 0) {
      readme += `*No articles available*\n\n`;
      readme += `</section>\n\n---\n\n`;
      continue;
    }

    articles.slice(0, maxArticles).forEach((article, index) => {
      const tags = article.tags.map(t => `\`${t}\``).join(' ');
      const langBadge = article.lang === 'fr' ? '`FR`' : '`EN`';
      const alsoOn = article.alsoPublishedOn ? ` | *Also on: ${article.alsoPublishedOn.join(', ')}*` : '';

      readme += `<div class="article-item" data-lang="${article.lang}" data-category="${category}" data-source="${article.source}">\n\n`;
      readme += `### ${index + 1}. ${langBadge} [${article.title}](${article.link})\n`;
      readme += `**Source:** ${article.source} | **Tags:** ${tags}${alsoOn}\n`;
      readme += `${article.summary}\n\n`;
      readme += `</div>\n\n`;
    });

    readme += `</section>\n\n---\n\n`;
  }

  readme += README_FOOTER;
  return readme;
}

// ─── RSS Feed Generation ────────────────────────────────────
function generateRSSFeed(articles, title, description, category) {
  const baseUrl = 'https://thephoenixagency.github.io/AI-Pulse';
  const now = new Date().toUTCString();

  let items = articles.slice(0, 50).map(article => `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${article.originalLink || article.link}</link>
      <description><![CDATA[${article.summary || ''}]]></description>
      <pubDate>${article.pubDate.toUTCString()}</pubDate>
      <source>${article.source}</source>
      <category>${article.category}</category>
      <guid>${article.originalLink || article.link}</guid>
    </item>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <link>${baseUrl}</link>
    <description>${description}</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed${category ? '-' + category : ''}.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}

function writeRSSFeeds(categorizedArticles) {
  const feedDir = path.join(__dirname, '..');

  // Global feed with all articles
  const allArticles = Object.values(categorizedArticles).flat().sort((a, b) => b.pubDate - a.pubDate);
  fs.writeFileSync(path.join(feedDir, 'feed.xml'),
    generateRSSFeed(allArticles, 'AI-Pulse - All News', 'Curated tech news from AI-Pulse', ''));

  // Per-category feeds
  for (const [category, articles] of Object.entries(categorizedArticles)) {
    const catConfig = CATEGORIES[category];
    const label = catConfig ? catConfig.labels.en : category;
    fs.writeFileSync(path.join(feedDir, `feed-${category}.xml`),
      generateRSSFeed(articles, `AI-Pulse - ${label}`, `${label} news from AI-Pulse`, category));
  }

  console.error('RSS feeds generated successfully');
}

// ─── Email Digest ───────────────────────────────────────────
async function sendEmailDigests(categorizedArticles) {
  const apiKey = process.env.API_RESEND;
  if (!apiKey) {
    console.error('No API_RESEND key found, skipping email digests');
    return;
  }

  const subscribersPath = path.join(__dirname, '..', 'data', 'subscribers.json');
  if (!fs.existsSync(subscribersPath)) {
    console.error('No subscribers.json found, skipping email digests');
    return;
  }

  let subscribers;
  try {
    subscribers = JSON.parse(fs.readFileSync(subscribersPath, 'utf-8'));
  } catch (e) {
    console.error('Error reading subscribers.json:', e.message);
    return;
  }

  if (!subscribers || subscribers.length === 0) {
    console.error('No subscribers found');
    return;
  }

  const templatePath = path.join(__dirname, '..', 'templates', 'email-digest.html');
  if (!fs.existsSync(templatePath)) {
    console.error('No email template found');
    return;
  }
  const template = fs.readFileSync(templatePath, 'utf-8');
  const today = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

  for (const subscriber of subscribers) {
    try {
      // Filter articles based on subscriber preferences
      let filteredSections = [];
      const subCategories = subscriber.categories || Object.keys(CATEGORIES);
      const subLang = subscriber.lang || 'all';

      for (const cat of subCategories) {
        const articles = categorizedArticles[cat];
        if (!articles || articles.length === 0) continue;

        let filtered = articles;
        if (subLang !== 'all') {
          filtered = articles.filter(a => a.lang === subLang);
        }
        filtered = filtered.slice(0, 5);
        if (filtered.length === 0) continue;

        const catConfig = CATEGORIES[cat];
        const label = subLang === 'fr' ? catConfig.labels.fr : catConfig.labels.en;

        const articlesHtml = filtered.map(a =>
          `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1e47;">
            <a href="https://thephoenixagency.github.io/AI-Pulse/app.html?url=${encodeURIComponent(a.link)}&title=${encodeURIComponent(a.title)}&source=${encodeURIComponent(a.source)}" style="color:#00d9ff;text-decoration:none;font-weight:600;">${a.title}</a>
            <br><span style="color:#94a3b8;font-size:13px;">${a.source} | ${a.lang.toUpperCase()}</span>
          </td></tr>`
        ).join('');

        filteredSections.push(`<tr><td style="padding:20px 0 10px;"><h2 style="color:#00d9ff;margin:0;font-size:18px;">${label}</h2></td></tr>${articlesHtml}`);
      }

      if (filteredSections.length === 0) continue;

      const emailHtml = template
        .replace('{{DATE}}', today)
        .replace('{{SECTIONS}}', filteredSections.join(''))
        .replace('{{EMAIL}}', subscriber.email)
        .replace(/{{UNSUB_URL}}/g, `https://github.com/ThePhoenixAgency/AI-Pulse/issues/new?template=unsubscribe.yml&title=Unsubscribe:+${encodeURIComponent(subscriber.email)}`);

      // Send via Resend
      const response = await axios.post('https://api.resend.com/emails', {
        from: 'AI-Pulse <noreply@resend.dev>',
        to: [subscriber.email],
        subject: `AI-Pulse Digest - ${today}`,
        html: emailHtml
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      console.error(`  Email sent to ${subscriber.email}: ${response.data.id}`);
    } catch (error) {
      console.error(`  Failed to send email to ${subscriber.email}: ${error.message}`);
    }
  }
}

// ─── Main ───────────────────────────────────────────────────
async function main() {
  console.error('Starting AI-Pulse aggregation...\n');
  console.error(`Loaded ${Object.keys(CATEGORIES).length} categories from config.json`);

  // Ensure data/articles directory exists
  const articlesDir = path.join(__dirname, '..', 'data', 'articles');
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }

  const categorizedArticles = {};

  // Aggregate each category (sorted by priority)
  const sortedCategories = Object.entries(CATEGORIES).sort((a, b) => (a[1].priority || 99) - (b[1].priority || 99));

  for (const [categoryName, catConfig] of sortedCategories) {
    categorizedArticles[categoryName] = await aggregateCategory(categoryName, catConfig.feeds);
  }

  // Generate README
  const readme = generateREADME(categorizedArticles);
  console.log(readme);

  // Generate RSS feeds
  writeRSSFeeds(categorizedArticles);

  // Send email digests
  await sendEmailDigests(categorizedArticles);

  // LinkedIn Posting
  try {
    for (const [category, articles] of Object.entries(categorizedArticles)) {
      console.error(`\nChecking LinkedIn posts for category: ${category}`);

      const unpostedArticles = articles
        .filter(article => !linkedinHelper.isAlreadyPosted(article.originalLink || article.link))
        .slice(0, 2);

      if (unpostedArticles.length > 0) {
        console.error(`Found ${unpostedArticles.length} new articles for ${category}`);

        for (const article of unpostedArticles) {
          console.error(`Processing: ${article.title}`);
          const postText = await linkedinHelper.generatePost(article);

          if (postText) {
            console.error('Sending to LinkedIn...');
            const postId = await linkedinHelper.postToLinkedIn(postText, article.originalLink || article.link);

            if (postId) {
              linkedinHelper.markAsPosted(article.originalLink || article.link);
              console.error(`Successfully posted: ${article.title}`);
            }
          }
        }
      } else {
        console.error(`No new articles to post for ${category}.`);
      }
    }
  } catch (error) {
    console.error('LinkedIn automation failed:', error.message);
  }

  console.error('\nAggregation complete!');
}

main().catch(console.error);
