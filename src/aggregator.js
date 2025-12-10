// AI-Pulse RSS Aggregator - Secure & Efficient
const Parser = require('rss-parser');
const parser = new Parser({
  timeout: 10000,
  headers: {'User-Agent': 'AI-Pulse/1.0'}
});

// Secure RSS sources (NO credentials exposed)
const SOURCES = [
  { name: 'OpenAI Blog', url: 'https://openai.com/blog/rss.xml', category: 'Industry' },
  { name: 'Hugging Face', url: 'https://huggingface.co/blog/feed.xml', category: 'Community' },
  { name: 'Papers with Code', url: 'https://paperswithcode.com/latest/rss', category: 'Research' },
  { name: 'MIT Tech Review AI', url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed', category: 'Analysis' },
  { name: 'Towards Data Science', url: 'https://towardsdatascience.com/feed', category: 'Tutorial' },
  { name: 'Substack AI', url: 'https://substack.com/discover/category/technology/feed', category: 'Newsletter' }
];

// Secure article processing (XSS prevention)
function sanitizeArticle(article) {
  return {
    title: article.title?.replace(/<[^>]*>/g, '').slice(0, 200) || 'Untitled',
    link: article.link?.match(/^https?:\/\//i) ? article.link : null,
    pubDate: new Date(article.pubDate || Date.now()),
    source: article.source,
    category: article.category,
    summary: article.contentSnippet?.replace(/<[^>]*>/g, '').slice(0, 300) || ''
  };
}

// Main aggregation function
async function aggregateFeeds() {
  const articles = [];
  
  for (const source of SOURCES) {
    try {
      const feed = await parser.parseURL(source.url);
      const sourceArticles = feed.items.slice(0, 10).map(item => 
        sanitizeArticle({...item, source: source.name, category: source.category})
      );
      articles.push(...sourceArticles);
    } catch (error) {
      console.error(`Failed to fetch ${source.name}:`, error.message);
    }
  }
  
  // Sort by date, most recent first
  return articles
    .filter(a => a.link)
    .sort((a, b) => b.pubDate - a.pubDate)
    .slice(0, 50); // Top 50 articles
}

module.exports = { aggregateFeeds };
