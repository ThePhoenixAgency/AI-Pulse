// AI-Pulse RSS Aggregator - Scalable & Efficient
const Parser = require('rss-parser');
const axios = require('axios');
const { Octokit } = require('@octokit/rest');
const sanitizeHtml = require('sanitize-html');

const parser = new Parser({
  timeout: 10000,
  headers: {'User-Agent': 'AI-Pulse/2.0'}
});

// Scalable feed configuration by category
const FEED_CATEGORIES = {
  ai: [
    { name: 'Medium AI', url: 'https://medium.com/tag/artificial-intelligence/feed', tags: ['AI', 'ML', 'Deep Learning'] },
    { name: 'Towards Data Science', url: 'https://towardsdatascience.com/feed', tags: ['AI', 'Data Science', 'Analytics'] },
  ],
  cybersecurity: [
    { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews', tags: ['Security', 'Vulnerabilities', 'Threats'] },
    { name: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com/feed/', tags: ['Security', 'Malware', 'CVE'] },
    { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/feed/', tags: ['Security', 'Fraud', 'Privacy'] },
  ]
};

// Add UTM parameters for tracking
function addUTMParams(url, category = 'general') {
  if (!url) return url;

  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('utm_source', 'ai-pulse');
    urlObj.searchParams.set('utm_medium', 'aggregator');
    urlObj.searchParams.set('utm_campaign', 'feed');
    urlObj.searchParams.set('utm_content', category);
    return urlObj.toString();
  } catch (e) {
    return url;
  }
}

// Sanitize text - strip all HTML tags
function sanitizeText(input) {
  if (!input) {
    return '';
  }
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
  });
}

// Smart truncate at punctuation
function smartTruncate(text, maxLength = 500) {
  if (!text || text.length <= maxLength) {
    return text;
  }

  let truncated = text.slice(0, maxLength);
  const punctuationRegex = /[.!?;:](?=\s|$)/g;
  const matches = [...truncated.matchAll(punctuationRegex)];

  if (matches.length > 0) {
    const lastMatch = matches[matches.length - 1];
    return text.slice(0, lastMatch.index + 1).trim();
  }

  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 0) {
    return truncated.slice(0, lastSpace).trim() + '...';
  }

  return truncated.trim() + '...';
}

// Sanitize and process articles
function sanitizeArticle(article, sourceName, tags, category) {
  const rawSummary = sanitizeText(article.contentSnippet) || '';

  return {
    title: (sanitizeText(article.title) || 'Untitled').slice(0, 200),
    link: addUTMParams(article.link, category),
    pubDate: new Date(article.pubDate || Date.now()),
    source: sourceName,
    tags: tags,
    category: article.categories?.[0] || 'General',
    summary: smartTruncate(rawSummary, 600)
  };
}

// Aggregate feeds by category
async function aggregateCategory(categoryName, feeds) {
  console.log(`\n📡 Aggregating ${categoryName} feeds...`);
  const articles = [];

  for (const feed of feeds) {
    try {
      console.log(`  ✓ Fetching: ${feed.name}`);
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

// Generate README with categories
function generateREADME(categorizedArticles) {
  let readme = `\`\`\`
   ▄████████  ▄█              ▄███████▄ ███    █▄   ▄█        ▄████████    ▄████████
  ███    ███ ███             ███    ███ ███    ███ ███       ███    ███   ███    ███
  ███    ███ ███▌            ███    ███ ███    ███ ███       ███    █▀    ███    █▀
  ███    ███ ███▌            ███    ███ ███    ███ ███       ███         ▄███▄▄▄
▀███████████ ███▌          ▀█████████▀  ███    ███ ███       ███        ▀▀███▀▀▀
  ███    ███ ███             ███        ███    ███ ███       ███    █▄    ███    █▄
  ███    ███ ███             ███        ███    ███ ███▌    ▄ ███    ███   ███    ███
  ███    █▀  █▀             ▄████▀      ████████▀  █████▄▄██ ████████▀    ██████████
                                                    ▀
\`\`\`


### Your Real-Time AI & Cybersecurity News Aggregator

> Curated content from the best sources - Auto-updated every 6 hours

[![Auto Update](https://img.shields.io/badge/Auto--Update-Every%206h-blueviolet?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)
[![Articles](https://img.shields.io/badge/Fresh-Articles-blue?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)
[![Open Source](https://img.shields.io/badge/100%25-Open%20Source-success?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)

**Last Update:** ${new Date().toUTCString()}

---

---

## 👨‍💻 About The Developer

**Built by [ThePhoenixAgency](https://github.com/ThePhoenixAgency)** - AI & Cybersecurity Specialist

🔥 **[GitHub Repository](https://github.com/ThePhoenixAgency/AI-Pulse)** |

📊 **[Organization](https://github.com/EthanThePhoenix38)** |

🚀 **[Follow Us](https://github.com/ThePhoenixAgency)**

🤖 **[Professionnel website](https://ThePhoenixAgency.github.io)**


> Passionate about building secure, privacy-first applications that make a difference.
> This project showcases my expertise in full-stack development, security engineering, and data privacy.

### 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![DOMPurify](https://img.shields.io/badge/DOMPurify-3.0+-blue?style=flat-square)
![Express](https://img.shields.io/badge/Express-4.18+-000000?style=flat-square&logo=express&logoColor=white)


`;

  // Generate sections for each category
  for (const [category, articles] of Object.entries(categorizedArticles)) {
    const emoji = category === 'ai' ? '🤖' : '🔒';
    const title = category === 'ai' ? 'Artificial Intelligence' : 'Cybersecurity';

    readme += `## ${emoji} ${title}\n\n`;

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

  readme += `\n---\n\n`;
  readme += `## 🧭 Navigation\n\n`;
  readme += `<div align="center">\n\n`;
  readme += `### Explore AI-Pulse\n\n`;
  readme += `| 📚 [Repository](https://github.com/ThePhoenixAgency/AI-Pulse) | 👨‍💻 [Organization](https://github.com/ThePhoenixAgency) | 🔐 [Docs](./database/SUPABASE_MIGRATION.md) |\n`;
  readme += `|:---:|:---:|:---:|\n`;
  readme += `| Source Code | Team Profile | Technical Docs |\n\n`;
  readme += `---\n\n`;
  readme += `### 🤝 Connect With Me\n\n`;
  readme += `[![GitHub Profile](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency)\n`;
  readme += `[![Repository](https://img.shields.io/badge/Repository-AI--Pulse-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse)\n`;
  readme += `[![Support](https://img.shields.io/badge/Support-Issues-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse/issues)\n\n`;
  readme += `---\n\n`;
  readme += `<sub>*Powered by [AI-Pulse](https://github.com/ThePhoenixAgency/AI-Pulse) | 100% Free & Open Source | Built with ❤️ by ThePhoenixAgency*</sub>\n\n`;
  readme += `</div>\n`;

  return readme;
}

// Main aggregation function
async function main() {
  console.log('🚀 Starting AI-Pulse aggregation...\n');

  const categorizedArticles = {};

  // Aggregate each category
  for (const [categoryName, feeds] of Object.entries(FEED_CATEGORIES)) {
    categorizedArticles[categoryName] = await aggregateCategory(categoryName, feeds);
  }

  // Generate README
  const readme = generateREADME(categorizedArticles);
  console.log(readme);

  console.log('\n✅ Aggregation complete!');
}

main().catch(console.error);
