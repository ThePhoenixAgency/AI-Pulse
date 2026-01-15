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
    { name: 'Medium AI', url: 'https://medium.com/tag/artificial-intelligence/feed', tags: ['ai', 'machine-learning'] },
    { name: 'Towards Data Science', url: 'https://towardsdatascience.com/feed', tags: ['ai', 'data-science'] },
    { name: 'AI News', url: 'https://www.artificialintelligence-news.com/feed/', tags: ['ai', 'news'] }
  ],
  tech: [
    { name: 'TechCrunch AI', url: 'https://techcrunch.com/category/artificial-intelligence/feed/', tags: ['ai', 'tech', 'startups'] },
    { name: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/', tags: ['ai', 'enterprise'] }
  ],
  research: [
    { name: 'arXiv CS.AI', url: 'http://export.arxiv.org/rss/cs.AI', tags: ['research', 'papers'] },
    { name: 'Google AI Blog', url: 'https://ai.googleblog.com/feeds/posts/default', tags: ['research', 'google'] }
  ]
};

// UTM parameters for tracking
const UTM_PARAMS = '?utm_source=ai-pulse&utm_medium=aggregator&utm_campaign=feed';

async function fetchFeed(feedConfig) {
  try {
    const feed = await parser.parseURL(feedConfig.url);
    return feed.items.map(item => ({
      title: sanitizeHtml(item.title, { allowedTags: [] }),
      pubDate: item.pubDate,
      summary: sanitizeHtml(item.contentSnippet || item.summary || '', { allowedTags: [] }).substring(0, 200),
      source: feedConfig.name,
link: `./reader.html?url=${encodeURIComponent(item.link + UTM_PARAMS)}`,      category: item.categories || []
    }));
  } catch (error) {
    console.error(`Error fetching ${feedConfig.name}:`, error.message);
    return [];
  }
}

async function aggregateFeeds() {
  const allArticles = [];
  
  for (const [category, feeds] of Object.entries(FEED_CATEGORIES)) {
    const categoryArticles = await Promise.all(
      feeds.map(feed => fetchFeed(feed))
    );
    allArticles.push(...categoryArticles.flat());
  }
  
  // Sort by date (most recent first)
  allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  
  return allArticles.slice(0, 50); // Top 50 articles
}

async function updateGitHubPages() {
  const articles = await aggregateFeeds();
  
  // Generate HTML content
  const htmlContent = generateHTML(articles);
  
  console.log(`Aggregated ${articles.length} articles`);
  return htmlContent;
}

function generateHTML(articles) {
  const articleCards = articles.map(article => `
    <div class="article-card">
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p class="meta">${article.source} • ${new Date(article.pubDate).toLocaleDateString()}</p>
      <p class="summary">${article.summary}</p>
      <div class="tags">${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    </div>
  `).join('\n');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI-Pulse - Curated AI News</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Segoe UI', system-ui, sans-serif; 
      background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
      color: #e0e0e0;
      line-height: 1.6;
    }
    .header {
      background: rgba(10, 14, 39, 0.8);
      backdrop-filter: blur(10px);
      padding: 2rem;
      text-align: center;
      border-bottom: 2px solid #00d9ff;
    }
    .header h1 {
      font-size: 2.5rem;
      background: linear-gradient(90deg, #00d9ff, #00ff88);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
    }
    .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
    .article-card {
      background: rgba(26, 31, 58, 0.6);
      border: 1px solid rgba(0, 217, 255, 0.2);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      transition: transform 0.2s, border-color 0.2s;
    }
    .article-card:hover {
      transform: translateY(-2px);
      border-color: rgba(0, 217, 255, 0.5);
    }
    .article-card h3 { 
      margin-bottom: 0.5rem; 
    }
    .article-card h3 a {
      color: #00d9ff;
      text-decoration: none;
    }
    .article-card h3 a:hover { color: #00ff88; }
    .meta { 
      color: #888; 
      font-size: 0.9rem; 
      margin-bottom: 0.5rem; 
    }
    .summary { 
      color: #b0b0b0; 
      margin-bottom: 0.8rem; 
    }
    .tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .tag {
      background: rgba(0, 217, 255, 0.1);
      color: #00d9ff;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.8rem;
      border: 1px solid rgba(0, 217, 255, 0.3);
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🤖 AI-Pulse</h1>
    <p>Curated AI & Tech News</p>
  </div>
  <div class="container">
    ${articleCards}
  </div>
</body>
</html>`;
}

module.exports = { aggregateFeeds, updateGitHubPages };

// Run if executed directly
if (require.main === module) {
  updateGitHubPages().then(html => console.log('Generated successfully'));
}
