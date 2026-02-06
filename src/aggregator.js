// AI-Pulse RSS Aggregator - Scalable & Efficient
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

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'AI-Pulse/2.0' }
});

// Scalable feed configuration by category
const FEED_CATEGORIES = {
  mac: [
    { name: 'MacRumors', url: 'https://feeds.macrumors.com/MacRumors-All', tags: ['Mac', 'Apple', 'News'] },
    { name: '9to5Mac', url: 'https://9to5mac.com/feed/', tags: ['Mac', 'Apple', 'iOS'] },
    { name: 'AppleInsider', url: 'https://appleinsider.com/rss/news/', tags: ['Mac', 'Apple', 'Hardware'] },
    { name: 'Cult of Mac', url: 'https://www.cultofmac.com/feed/', tags: ['Mac', 'Apple', 'Culture'] },
    { name: 'MacWorld', url: 'https://www.macworld.com/feed', tags: ['Mac', 'Reviews', 'Guides'] },
    { name: 'Mac4Ever', url: 'https://www.mac4ever.com/rss', tags: ['Mac', 'Apple', 'FR'] },
  ],
  iot: [
    { name: 'Raspberry Pi', url: 'https://www.raspberrypi.com/news/feed/', tags: ['IoT', 'RaspberryPi', 'Tech'] },
    { name: 'Arduino Blog', url: 'https://blog.arduino.cc/feed/', tags: ['IoT', 'Arduino', 'Tech'] },
    { name: 'IRO Wireless', url: 'https://irojournals.com/jws/index.php/jws/gateway/plugin/WebFeedGatewayPlugin/rss2', tags: ['Hardware', 'Wireless', 'Research'] },
    { name: 'Hackster.io', url: 'https://www.hackster.io/news/feed', tags: ['IoT', 'Hardware', 'Projects'] },
    { name: 'IoT For All', url: 'https://www.iotforall.com/feed', tags: ['IoT', 'News'] },
    { name: 'IoT Business News', url: 'https://iotbusinessnews.com/feed/', tags: ['IoT', 'News'] },
    { name: 'IoT World Today', url: 'https://www.iotworldtoday.com/feed', tags: ['IoT', 'News'] },
    { name: 'Domotique News', url: 'http://www.domotique-news.com/feed', tags: ['IoT', 'News'] },
    { name: 'HomeTech', url: 'https://hometech.fm/articles?format=rss', tags: ['IoT', 'SmartHome', 'Tech'] }
  ],
  ai: [
    { name: 'Medium AI', url: 'https://medium.com/tag/artificial-intelligence/feed', tags: ['AI', 'ML', 'Deep Learning'] },
    { name: 'Towards Data Science', url: 'https://towardsdatascience.com/feed', tags: ['AI', 'Data Science', 'Analytics'] },
    { name: 'AI News', url: 'https://www.artificialintelligence-news.com/feed/', tags: ['AI', 'News', 'Industry'] },
    { name: 'TechCrunch AI', url: 'https://techcrunch.com/category/artificial-intelligence/feed/', tags: ['AI', 'Startups', 'Tech'] },
    { name: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/', tags: ['AI', 'Enterprise', 'Business'] },
    { name: 'Google AI Blog', url: 'https://ai.googleblog.com/feeds/posts/default', tags: ['AI', 'Research', 'Google'] },
  ],
  cybersecurity: [
    { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews', tags: ['Security', 'Vulnerabilities', 'Threats'] },
    { name: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com/feed/', tags: ['Security', 'Malware', 'CVE'] },
    { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/feed/', tags: ['Security', 'Fraud', 'Privacy'] },
    { name: 'Dark Reading', url: 'https://www.darkreading.com/rss_simple.asp', tags: ['Security', 'CVE', 'Enterprise'] },
    { name: 'SecurityWeek', url: 'https://www.securityweek.com/feed/', tags: ['Security', 'CVE', 'News'] },
    { name: 'Threatpost', url: 'https://threatpost.com/feed/', tags: ['Security', 'Threats', 'CVE'] },
  ]
};

// UTM parameters for AI-Pulse traffic tracking
// Tracks clicks sent FROM AI-Pulse TO external sites
function addUTMParams(url, category = 'general') {
  // Use Freedium mirror for Medium articles to bypass paywall
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();
    const mediumHosts = [
      'medium.com',
      'www.medium.com',
      'towardsdatascience.com',
      'www.towardsdatascience.com'
    ];

    if (mediumHosts.includes(hostname)) {
      // Rewrite only genuine Medium/TDS URLs to Freedium
      url = `https://freedium.cloud/${url}`;
    }
  } catch (e) {
    // If URL parsing fails, skip Freedium rewrite and just append UTM params
  }

  const utmParams = `utm_source=ai-pulse&utm_medium=reader&utm_campaign=article&utm_content=${category}`;
  return url.includes('?') ? `${url}&${utmParams}` : `${url}?${utmParams}`;
}

// Robust HTML sanitization: strip all tags and unsafe content
function sanitizeText(input) {
  if (!input) {
    return '';
  }
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
  });
}

/**
 * Smart truncate: cut at last punctuation before limit
 * Avoids cutting words in the middle
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Properly truncated text
 */
function smartTruncate(text, maxLength = 500) {
  if (!text || text.length <= maxLength) {
    return text;
  }

  // Cut at maxLength
  let truncated = text.slice(0, maxLength);

  // Find last punctuation mark (. ! ? ; :)
  const punctuationRegex = /[.!?;:](?=\s|$)/g;
  const matches = [...truncated.matchAll(punctuationRegex)];

  if (matches.length > 0) {
    // Cut at last punctuation
    const lastMatch = matches[matches.length - 1];
    return text.slice(0, lastMatch.index + 1).trim();
  }

  // If no punctuation, cut at last space to avoid mid-word cut
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 0) {
    return truncated.slice(0, lastSpace).trim() + '...';
  }

  // Fallback: return as is with ellipsis
  return truncated.trim() + '...';
}

// Sanitize and process articles
async function processArticle(article, sourceName, tags, category) {
  const rawSummary = sanitizeText(article.contentSnippet) || '';
  const articleUrl = article.link;

  // Create a unique hash for the article to save it locally
  const hash = crypto.createHash('md5').update(articleUrl).digest('hex');
  const localFileName = `${hash}.html`;
  const localPath = path.join(__dirname, '..', 'data', 'articles', localFileName);
  const relativeLink = `data/articles/${localFileName}`;

  // Try to fetch and extract content if it doesn't exist
  if (!fs.existsSync(localPath)) {
    try {
      const response = await axios.get(articleUrl, { timeout: 8000, headers: { 'User-Agent': 'AI-Pulse/2.0' } });
      const dom = new JSDOM(response.data, { url: articleUrl });
      const reader = new Readability(dom.window.document);
      const articleContent = reader.parse();

      if (articleContent && articleContent.textContent) {
        const cleanHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${sanitizeText(articleContent.title)}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 40px auto; padding: 0 20px; }
  h1 { color: #1a1a1a; margin-bottom: 0.5em; }
  .metadata { color: #666; font-size: 0.9em; margin-bottom: 2em; border-bottom: 1px solid #eee; padding-bottom: 1em; }
  img { max-width: 100%; height: auto; border-radius: 8px; }
  a { color: #0066cc; }
</style>
</head>
<body>
  <h1>${sanitizeText(articleContent.title)}</h1>
  <div class="metadata">
    Source: ${sourceName} | Date: ${new Date(article.pubDate).toLocaleDateString()} | 
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

  // Temporary fix: Link directly to source articles
  // TODO: Implement proper Reader Mode with content extraction
  const finalReaderLink = articleUrl;

  return {
    title: (sanitizeText(article.title) || 'Untitled').slice(0, 200),
    link: finalReaderLink,
    pubDate: new Date(article.pubDate || Date.now()),
    source: sourceName,
    tags: tags,
    category: article.categories?.[0] || 'General',
    summary: smartTruncate(rawSummary, 600)
  };
}

// Aggregate feeds by category
async function aggregateCategory(categoryName, feeds) {
  console.error(`\nAggregating ${categoryName} feeds...`);
  const articles = [];

  for (const feed of feeds) {
    try {
      console.error(`  Fetch: ${feed.name}`);
      const feedData = await parser.parseURL(feed.url);
      const items = [];
      for (const item of feedData.items.slice(0, 15)) {
        const processed = await processArticle(item, feed.name, feed.tags, categoryName);
        items.push(processed);
      }
      articles.push(...items);
    } catch (error) {
      console.error(`  Error: Failed to fetch ${feed.name}: ${error.message}`);
    }
  }

  return articles.sort((a, b) => b.pubDate - a.pubDate);
}

// Static Header with no emojis
const README_HEADER = `<div align="center">

<img src="assets/banner.png" alt="AI-PULSE Banner" width="100%">

> Curated content from the best sources - Auto-updated every 3 hours

[![GitHub Profile](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency) [![Repository](https://img.shields.io/badge/Source-Repo-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse) [![Reader](https://img.shields.io/badge/Live-Reader-blueviolet?style=for-the-badge&logo=readthedocs)](https://thephoenixagency.github.io/AI-Pulse/app.html) [![Documentation](https://img.shields.io/badge/Documentation-Technical-blue?style=for-the-badge&logo=googledocs)](https://github.com/ThePhoenixAgency/AI-Pulse/blob/main/database/SUPABASE_MIGRATION.md) [![Support](https://img.shields.io/badge/Support-Issues-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse/issues)

**Last Update:** ${new Date().toUTCString()}

---

## About The Developer

**Built by [ThePhoenixAgency](https://github.com/ThePhoenixAgency)** - AI & Cybersecurity Specialist

> Passionate about building secure, privacy-first applications that make a difference.
> This project showcases my expertise in full-stack development, security engineering, and data privacy.

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

// Generate README with categories
function generateREADME(categorizedArticles) {
  let readme = README_HEADER;

  // Category titles mapping
  const categoryTitles = {
    mac: 'Mac & Apple',
    ai: 'Artificial Intelligence',
    cybersecurity: 'Cybersecurity',
    iot: 'Internet of Things & Hardware'
  };

  // Generate sections for each category with anchors and visual separators
  for (const [category, articles] of Object.entries(categorizedArticles)) {
    const title = categoryTitles[category] || 'General News';

    // Anchor and visual separator
    readme += `<a id="${category}"></a>\n\n`;
    readme += `---\n\n`;
    readme += `## ${title}\n\n`;

    if (articles.length === 0) {
      readme += `*No articles available*\n\n`;
      continue;
    }

    articles.slice(0, 30).forEach((article, index) => {
      const tags = article.tags.map(t => `\`${t}\``).join(' ');
      readme += `### ${index + 1}. [${article.title}](${article.link})\n`;
      readme += `**Source:** ${article.source} | **Tags:** ${tags}\n`;
      readme += `${article.summary}\n\n`;
    });
  }

  readme += README_FOOTER;

  return readme;
}

// Main aggregation function
async function main() {
  console.error('Starting AI-Pulse aggregation...\n');

  const categorizedArticles = {};

  // Aggregate each category
  for (const [categoryName, feeds] of Object.entries(FEED_CATEGORIES)) {
    categorizedArticles[categoryName] = await aggregateCategory(categoryName, feeds);
  }

  // Generate README
  const readme = generateREADME(categorizedArticles);
  console.log(readme);

  // LinkedIn Posting (New: 2 articles per category)
  try {
    for (const [category, articles] of Object.entries(categorizedArticles)) {
      console.error(`\nChecking LinkedIn posts for category: ${category}`);

      const unpostedArticles = articles
        .filter(article => !linkedinHelper.isAlreadyPosted(article.link))
        .slice(0, 2); // Get up to 2 unposted articles

      if (unpostedArticles.length > 0) {
        console.error(`Found ${unpostedArticles.length} new articles for ${category}`);

        for (const article of unpostedArticles) {
          console.error(`Processing: ${article.title}`);
          const postText = await linkedinHelper.generatePost(article);

          if (postText) {
            console.error('Sending to LinkedIn...');
            const postId = await linkedinHelper.postToLinkedIn(postText, article.link);

            if (postId) {
              linkedinHelper.markAsPosted(article.link);
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
