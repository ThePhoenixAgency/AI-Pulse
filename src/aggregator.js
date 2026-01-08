// AI-Pulse RSS Aggregator - Scalable & Efficient
const Parser = require('rss-parser');
const axios = require('axios');
const { Octokit } = require('@octokit/rest');

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

// UTM parameters for AI-Pulse traffic tracking
// Tracks clicks sent FROM AI-Pulse TO external sites
function addUTMParams(url, category = 'general') {
  const utmParams = `utm_source=ai-pulse&utm_medium=reader&utm_campaign=article&utm_content=${category}`;
  return url.includes('?') ? `${url}&${utmParams}` : `${url}?${utmParams}`;
}

// Generate reader link for iframe display
function generateReaderLink(article) {
  const baseUrl = 'https://thephoenixagency.github.io/AI-Pulse/reader.html';
  const params = new URLSearchParams({
    url: article.link,
    title: article.title,
    source: article.source,
    tags: article.tags.join(', ')
  });
  return `${baseUrl}?${params.toString()}`;
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
  const rawSummary = article.contentSnippet?.replace(/<[^>]*>/g, '') || '';

  return {
    title: article.title?.replace(/<[^>]*>/g, '').slice(0, 200) || 'Untitled',
    link: addUTMParams(article.link, category),  // UTM tracks traffic FROM AI-Pulse
    pubDate: new Date(article.pubDate || Date.now()),
    source: sourceName,
    tags: tags,
    category: article.categories?.[0] || 'General',
    summary: smartTruncate(rawSummary, 500)  // Increased from 300 to 500 with smart truncation
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

<div align="center">

# 🚀 AI-PULSE

### 🤖 Your Real-Time AI & Cybersecurity News Aggregator

> Curated content from the best sources - Auto-updated every 6 hours

[![Auto Update](https://img.shields.io/badge/Auto--Update-Every%206h-blueviolet?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)
[![Articles](https://img.shields.io/badge/Fresh-Articles-blue?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)
[![Open Source](https://img.shields.io/badge/100%25-Open%20Source-success?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)

**Last Update:** ${new Date().toUTCString()}

---

---

## 👨‍💻 About The Developer

**Built by [ThePhoenixAgency](https://github.com/ThePhoenixAgency)** - AI & Cybersecurity Specialist

🔥 **[View My Portfolio](https://thephoenixagency.github.io/AI-Pulse/portfolio.html)** |
📊 **[Live Stats Dashboard](https://thephoenixagency.github.io/AI-Pulse/stats.html)** |
🚀 **[Launch Reader App](https://thephoenixagency.github.io/AI-Pulse/reader.html)**

> Passionate about building secure, privacy-first applications that make a difference.
> This project showcases my expertise in full-stack development, security engineering, and data privacy.

### 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![DOMPurify](https://img.shields.io/badge/DOMPurify-3.0+-blue?style=flat-square)
![Express](https://img.shields.io/badge/Express-4.18+-000000?style=flat-square&logo=express&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Ready-3ECF8E?style=flat-square&logo=supabase&logoColor=white)

### 🔒 Security & Compliance

![XSS Protection](https://img.shields.io/badge/XSS-Protected-success?style=flat-square&logo=security&logoColor=white)
![0 CVE](https://img.shields.io/badge/CVE-0%20Known-success?style=flat-square)
![GDPR](https://img.shields.io/badge/GDPR-Compliant-blue?style=flat-square)
![RLS](https://img.shields.io/badge/RLS-Enabled-blueviolet?style=flat-square)
![Dependabot](https://img.shields.io/badge/Dependabot-Auto--Merge-green?style=flat-square&logo=dependabot&logoColor=white)
![Anonymous Analytics](https://img.shields.io/badge/Analytics-Anonymous%20Only-orange?style=flat-square)

</div>

---
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
      const readerLink = generateReaderLink(article);
      readme += `### ${index + 1}. [${article.title}](${readerLink})\n`;
      readme += `**Source:** ${article.source} | **Tags:** ${tags}\n`;
      readme += `${article.summary}\n\n`;
    });

    readme += `---\n\n`;
  }

  readme += `\n---\n\n`;
  readme += `## 🧭 Navigation\n\n`;
  readme += `<div align="center">\n\n`;
  readme += `### Explore AI-Pulse\n\n`;
  readme += `| 🏠 [Main App](https://thephoenixagency.github.io/AI-Pulse/reader.html) | 👨‍💻 [Portfolio](https://thephoenixagency.github.io/AI-Pulse/portfolio.html) | 📊 [Stats](https://thephoenixagency.github.io/AI-Pulse/stats.html) | 📚 [Docs](./database/SUPABASE_MIGRATION.md) |\n`;
  readme += `|:---:|:---:|:---:|:---:|\n`;
  readme += `| Read articles in-app | View my projects | Analytics dashboard | Migration guide |\n\n`;
  readme += `---\n\n`;
  readme += `### 🤝 Connect With Me\n\n`;
  readme += `[![GitHub Profile](https://img.shields.io/badge/GitHub-EthanThePhoenix38-181717?style=for-the-badge&logo=github)](https://github.com/EthanThePhoenix38)\n`;
  readme += `[![Organization](https://img.shields.io/badge/Organization-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency)\n`;
  readme += `[![Website](https://img.shields.io/badge/Website-ThePhoenixAgency.github.io-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://ThePhoenixAgency.github.io)\n\n`;
  readme += `---\n\n`;
  readme += `<sub>*Powered by [AI-Pulse](https://github.com/ThePhoenixAgency/AI-Pulse) | 100% Free & Open Source | Built with ❤️ by ThePhoenixAgency*</sub>\n\n`;
  readme += `</div>\n`;

  return readme;
}

// LinkedIn auto-posting function
async function postToLinkedIn(article) {
  if (!process.env.LINKEDIN_ACCESS_TOKEN || !process.env.LINKEDIN_USER_ID) {
    console.log('⚠️  LinkedIn token not configured, skipping auto-post');
    return;
  }

  // Only post once per day at 7h UTC
  const currentHour = new Date().getUTCHours();
  if (currentHour !== 7) {
    console.log(`⏰ Not posting time (current: ${currentHour}h UTC, scheduled: 7h UTC)`);
    return;
  }

  try {
    const response = await axios.post(
      'https://api.linkedin.com/v2/ugcPosts',
      {
        author: `urn:li:person:${process.env.LINKEDIN_USER_ID}`,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: {
              text: `🚀 ${article.title}\n\n${article.summary}\n\n🔗 ${article.link}\n\n#AI #Tech #Innovation`
            },
            shareMediaCategory: 'ARTICLE',
            media: [{
              status: 'READY',
              originalUrl: article.link
            }]
          }
        },
        visibility: {
          'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0'
        }
      }
    );
    console.log('✅ Posted to LinkedIn successfully');
  } catch (error) {
    console.error('❌ LinkedIn posting failed:', error.response?.data || error.message);
  }
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

  // Auto-post top AI article to LinkedIn (optional)
  if (categorizedArticles.ai?.length > 0) {
    await postToLinkedIn(categorizedArticles.ai[0]);
  }

  console.log('\n✅ Aggregation complete!');
}

main().catch(console.error);
