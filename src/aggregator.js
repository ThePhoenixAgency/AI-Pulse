/**
 * =============================================================================
 * AI-PULSE - AGRÉGATEUR RSS DISTILLÉ (aggregator.js)
 * =============================================================================
 * Version : 2.2.0 (Sémantique)
 * Auteur : ThePhoenixAgency
 * 
 * DESCRIPTION :
 * Ce module est le moteur de AI-Pulse. Il récupère, nettoie et synthétise
 * l'information provenant de multiples flux RSS en appliquant une distillation
 * de contenu style "Apple News" pour éliminer le bruit (pubs, scripts, liens inutiles).
 * =============================================================================
 */

const fs = require('fs'); // Système de fichiers
const path = require('path'); // Gestion des chemins
const axios = require('axios'); // Client HTTP
const RSSParser = require('rss-parser'); // Parseur RSS
const cheerio = require('cheerio'); // Scraping et nettoyage HTML

// Configuration globale pour éviter le hardcoding
const APP_VERSION = "2.2.0";
const SUMMARY_LENGTH = 350; // Longueur du résumé style Pulse
const MAX_ARTICLES_PER_CAT = 6; // Limite d'affichage pour rester concis

const parser = new RSSParser({
  timeout: 10000,
  headers: { 'User-Agent': `AI-Pulse/${APP_VERSION} (Distilled Feed Engine)` }
});

/**
 * CONFIGURATION DES SOURCES
 */
const CONFIG_PATH = path.join(__dirname, '..', 'config.json');
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
const CATEGORIES = config.categories;

/**
 * DISTILLATION DE CONTENU (Style Apple News)
 * Nettoie le HTML pour ne garder que le texte pur de l'article.
 */
function distillContent(html) {
  const $ = cheerio.load(html);
  
  // Suppression radicale du bruit (publicités, navigation, réseaux sociaux)
  $('script, style, iframe, noscript, footer, nav, header, aside, .ads, .sidebar, .comments, .social-share, .related-posts, .newsletter-form, .menu, .popup').remove();
  
  // Ciblage intelligent du contenu principal
  let content = $('article, .article-content, .post-content, main, #content, [role="main"], .entry-content').first();
  if (content.length === 0) content = $('body');

  // Nettoyage des espaces et suppression des résidus de boutons de partage
  return content.text()
    .replace(/\s+/g, ' ')
    .replace(/Share on (Twitter|Facebook|LinkedIn|WhatsApp).*/gi, '')
    .trim();
}

/**
 * GÉNÉRATION DE RÉSUMÉ
 * Coupe le texte à une ponctuation réelle pour éviter les phrases tronquées.
 */
function generateSummary(text, maxLength) {
  if (!text || text.length < maxLength) return text || "Aucun contenu extractible.";
  
  let summary = text.substring(0, maxLength);
  const lastPunctuation = Math.max(
    summary.lastIndexOf('.'), 
    summary.lastIndexOf('!'), 
    summary.lastIndexOf('?')
  );
  
  // On coupe à la ponctuation si elle est assez proche de la fin
  if (lastPunctuation > maxLength * 0.7) {
    return summary.substring(0, lastPunctuation + 1);
  }
  return summary.trim() + "...";
}

/**
 * TRAITEMENT D'UN ARTICLE
 * Gère le chargement, le nettoyage et le filtrage des contenus vides/inutiles.
 */
async function fetchAndProcessArticle(item, category) {
  try {
    // Utilisation d'un Referer Google pour maximiser l'accès aux contenus
    const options = {
      timeout: 8000,
      headers: { 
        'Referer': 'https://www.google.com/',
        'Accept-Language': 'fr-FR,fr;q=0.9',
        'Cache-Control': 'no-cache'
      }
    };

    const response = await axios.get(item.link, options);
    const distilledText = distillContent(response.data);
    
    // FILTRE : On ignore les articles sans contenu réel (moins de 200 caractères utiles)
    if (!distilledText || distilledText.length < 200) return null; 

    return {
      title: item.title.trim(),
      link: item.link,
      date: item.pubDate,
      source: item.source || 'Source Web',
      category: category,
      summary: generateSummary(distilledText, SUMMARY_LENGTH)
    };
  } catch (error) {
    // Les erreurs de chargement (404, timeouts) entraînent l'exclusion automatique de l'article
    return null;
  }
}

/**
 * FONCTION PRINCIPALE
 * Découpe en 4 étapes : Filtrage RSS -> Récupération -> Distillation -> Publication
 */
async function main() {
  console.log(`[INFO] Lancement AI-Pulse v${APP_VERSION}...`);
  
  const processedLinks = new Set();
  const activeSources = [];

  // ÉTAPE 1 : Filtrage des sources RSS (on ignore les entrées invalides ou vides)
  for (const [catName, catConfig] of Object.entries(CATEGORIES)) {
    if (catConfig.feeds && Array.isArray(catConfig.feeds)) {
      catConfig.feeds.forEach(url => {
        if (url && url.startsWith('http')) {
          activeSources.push({ url, category: catName });
        }
      });
    }
  }

  // ÉTAPE 2 : Chargement asynchrone des flux RSS
  const feedPromises = activeSources.map(async (source) => {
    try {
      const feed = await parser.parseURL(source.url);
      return feed.items.map(item => ({ 
        ...item, 
        source: feed.title, 
        category: source.category 
      }));
    } catch (e) {
      return []; // On ignore silencieusement les flux morts
    }
  });

  const allItems = (await Promise.all(feedPromises)).flat();

  // ÉTAPE 3 : Distillation en parallèle (limitation technique pour éviter le bannissement IP)
  const distillationPromises = allItems.slice(0, 50).map(item => {
    if (processedLinks.has(item.link)) return null;
    processedLinks.add(item.link);
    return fetchAndProcessArticle(item, item.category);
  });

  const cleanArticles = (await Promise.all(distillationPromises)).filter(a => a !== null);

  // ÉTAPE 4 : Génération du README (Date dynamique, sans hardcoding)
  const today = new Date().toLocaleDateString('fr-FR', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  let readme = `# AI-Pulse | Distilled Feed

`;
  readme += `*Mise à jour : ${today} | Version : ${APP_VERSION}*

`;
  readme += `--- 

`;

  for (const category of Object.keys(CATEGORIES)) {
    const catArticles = cleanArticles.filter(a => a.category === category);
    if (catArticles.length === 0) continue;

    readme += `## ${category.toUpperCase()}

`;
    catArticles.slice(0, MAX_ARTICLES_PER_CAT).forEach(a => {
      readme += `### [${a.title}](${a.link})
`;
      readme += `**${a.source}**

`;
      readme += `> ${a.summary}

`;
    });
    readme += `---

`;
  }

  fs.writeFileSync(path.join(__dirname, '..', 'README.md'), readme);
  console.log(`[SUCCÈS] README mis à jour (${cleanArticles.length} articles distillés).`);
}

// Point d'entrée
if (require.main === module) {
  main().catch(err => {
    console.error('[ERREUR CRITIQUE]', err);
    process.exit(1);
  });
}
