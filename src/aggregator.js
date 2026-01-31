// AI-Pulse RSS Aggregator - Scalable & Efficient
const Parser = require('rss-parser');
const axios = require('axios');
const { Octokit } = require('@octokit/rest');
const sanitizeHtml = require('sanitize-html');
const { URL } = require('url');

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'AI-Pulse/2.0' }
});

// Scalable feed configuration by category
const FEED_CATEGORIES = {
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
iot: [
  { name: 'IoT For All', url: 'https://www.iotforall.com/feed', tags: ['IoT', 'News'] },
  { name: 'IoT Business News', url: 'https://iotbusinessnews.com/feed/', tags: ['IoT', 'News'] },
  { name: 'IoT World Today', url: 'https://www.iotworldtoday.com/feed', tags: ['IoT', 'News'] },
  { name: 'Domotique News', url: 'https://www.domotiqueactualite.fr/feed/', tags: ['IoT', 'Domotique', 'News'] },
  { name: 'HomeTech', url: 'https://hometechmag.com/feed/', tags: ['IoT', 'Domotique', 'News'] }
]

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
function sanitizeArticle(article, sourceName, tags, category) {
  const rawSummary = sanitizeText(article.contentSnippet) || '';

  return {
    title: (sanitizeText(article.title) || 'Untitled').slice(0, 200),
    // Link points to our internal reader app instead of external site directly
    link: `https://thephoenixagency.github.io/AI-Pulse/app.html?url=${encodeURIComponent(article.link)}&title=${encodeURIComponent(article.title)}&source=${encodeURIComponent(sourceName)}&tags=${encodeURIComponent(tags.join(','))}`,
    pubDate: new Date(article.pubDate || Date.now()),
    source: sourceName,
    tags: tags,
    category: article.categories?.[0] || 'General',
    summary: smartTruncate(rawSummary, 600)  // Increased to 600 with smart truncation for better article previews
  };
}

// Aggregate feeds by category
async function aggregateCategory(categoryName, feeds) {
  console.error(`\n📡 Aggregating ${categoryName} feeds...`);
  const articles = [];

  for (const feed of feeds) {
    try {
      console.error(`  ✓ Fetching: ${feed.name}`);
      const feedData = await parser.parseURL(feed.url);
      const items = feedData.items.slice(0, 10).map(item =>
        sanitizeArticle(item, feed.name, feed.tags, categoryName)
      );
      articles.push(...items);
    } catch (error) {
      console.error(`  ✗ Failed to fetch ${feed.name}: ${error.message}`);
    }
  }

  return articles.sort((a, b) => b.pubDate - a.pubDate);
}

// Static Header with no emojis
const README_HEADER = `<div align="center">

# AI-PULSE

### Your Real-Time AI & Cybersecurity News Aggregator

> Curated content from the best sources - Auto-updated every 3 hours

[![Auto Update](https://img.shields.io/badge/Auto--Update-Every%203h-blueviolet?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)
[![Articles](https://img.shields.io/badge/Fresh-Articles-blue?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)
[![Open Source](https://img.shields.io/badge/100%25-Open%20Source-success?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)

**Last Update:** ${new Date().toUTCString()}

---

---

## About The Developer

**Built by [ThePhoenixAgency](https://github.com/ThePhoenixAgency)** - AI & Cybersecurity Specialist

**[View My Portfolio](https://thephoenixagency.github.io/AI-Pulse/portfolio.html)** |
**[Live Stats Dashboard](https://thephoenixagency.github.io/AI-Pulse/stats.html)** |
**[Launch Reader App](https://thephoenixagency.github.io/AI-Pulse/reader.html)**

> Passionate about building secure, privacy-first applications that make a difference.
> This project showcases my expertise in full-stack development, security engineering, and data privacy.

### Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![DOMPurify](https://img.shields.io/badge/DOMPurify-3.0+-blue?style=flat-square)
![Express](https://img.shields.io/badge/Express-4.18+-000000?style=flat-square&logo=express&logoColor=white)

</div>

`;

const README_FOOTER = `
---

## Navigation

<div align="center">

### Explore AI-Pulse

| 📚 [Repository](https://github.com/ThePhoenixAgency/AI-Pulse) | 👨‍💻 [Organization](https://github.com/ThePhoenixAgency) | 🔐 [Docs](./database/SUPABASE_MIGRATION.md) |
|:---:|:---:|:---:|
| Source Code | Team Profile | Technical Docs |

---

### Connect With Me

[![GitHub Profile](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency)
[![Repository](https://img.shields.io/badge/Repository-AI--Pulse-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse)
[![Support](https://img.shields.io/badge/Support-Issues-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse/issues)

---

<sub>*Powered by [AI-Pulse](https://github.com/ThePhoenixAgency/AI-Pulse) | 100% Free & Open Source | Built with ❤️ by ThePhoenixAgency*</sub>

</div>
`;

// Generate README with categories
function generateREADME(categorizedArticles) {
  let readme = README_HEADER;

  // Generate sections for each category
  for (const [category, articles] of Object.entries(categorizedArticles)) {
    // No emojis
    const title = category === 'ai' ? 'Artificial Intelligence' : 'Cybersecurity';

    readme += `## ${title}\n\n`;

    if (articles.length === 0) {
      readme += `*No articles available*\n\n`;
      continue;
    }

    articles.slice(0, 15).forEach((article, index) => {
      const tags = article.tags.map(t => `\`${t}\``).join(' ');
      readme += `### ${index + 1}. [${article.title}](${article.link})\n`;
      readme += `**Source:** ${article.source} | **Tags:** ${tags}\n`;
      readme += `${article.summary}\n\n`;
    });

    readme += `---\n\n`;
  }

  readme += README_FOOTER;

  return readme;
}

// Main aggregation function
async function main() {
  console.error('🚀 Starting AI-Pulse aggregation...\n');

  const categorizedArticles = {};

  // Aggregate each category
  for (const [categoryName, feeds] of Object.entries(FEED_CATEGORIES)) {
    categorizedArticles[categoryName] = await aggregateCategory(categoryName, feeds);
  }

  // Generate README
  const readme = generateREADME(categorizedArticles);
  console.log(readme);

  console.error('\n✅ Aggregation complete!');
}

main().catch(console.error);
