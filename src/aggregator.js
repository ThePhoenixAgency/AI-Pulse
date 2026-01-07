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

// UTM parameters for analytics tracking
function addUTMParams(url, source, medium = 'rss', campaign = 'ai-pulse') {
  const utmParams = `utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}&utm_content=aggregator`;
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

// Sanitize and process articles
function sanitizeArticle(article, sourceName, tags) {
  return {
    title: article.title?.replace(/<[^>]*>/g, '').slice(0, 200) || 'Untitled',
    link: addUTMParams(article.link, sourceName.toLowerCase().replace(/\s/g, '-')),
    pubDate: new Date(article.pubDate || Date.now()),
    source: sourceName,
    tags: tags,
    category: article.categories?.[0] || 'General',
    summary: article.contentSnippet?.replace(/<[^>]*>/g, '').slice(0, 300) || ''
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
        sanitizeArticle(item, feed.name, feed.tags)
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

# 🚀 AI-Pulse

### 🤖 Your Real-Time AI & Cybersecurity News Aggregator

> Curated content from the best sources - Auto-updated every 6 hours

[![Auto Update](https://img.shields.io/badge/Auto--Update-Every%206h-blueviolet?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)
[![Articles](https://img.shields.io/badge/Fresh-Articles-blue?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)
[![Open Source](https://img.shields.io/badge/100%25-Open%20Source-success?style=for-the-badge)](https://github.com/ThePhoenixAgency/AI-Pulse)

**Last Update:** ${new Date().toUTCString()}

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
  readme += `*Powered by [AI-Pulse](https://github.com/ThePhoenixAgency/AI-Pulse) | 100% Free & Open Source*\n`;
  
  return readme;
}

// LinkedIn auto-posting function
async function postToLinkedIn(article) {
  if (!process.env.LINKEDIN_ACCESS_TOKEN) {
    console.log('⚠️  LinkedIn token not configured, skipping auto-post');
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
              text: `${article.title}\n\n${article.summary}\n\n🔗 Read more: ${article.link}`
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
