/**
 * ================================================================================
 * AI-PULSE - AGRÉGATEUR RSS PRINCIPAL (aggregator.js)
 * ================================================================================
 *
 * DESCRIPTION:
 *     Ce fichier est le coeur du projet AI-Pulse. Il récupère les articles
 *     de toutes les sources RSS configurées dans config.json, les traite,
 *     supprime les doublons, et génère le README.md et les flux RSS.
 *
 * FONCTIONNEMENT GÉNÉRAL:
 *     1. Lit la configuration depuis config.json
 *     2. Pour chaque catégorie, récupère les flux RSS des sources
 *     3. Traite chaque article (nettoyage, résumé, langue)
 *     4. Supprime les articles en double (déduplication)
 *     5. Génère le README.md avec les articles
 *     6. Génère les flux RSS (feed.xml, feed-ai.xml, etc.)
 *     7. Envoie les emails aux abonnés (si configuré)
 *     8. Poste sur LinkedIn (si configuré)
 *
 * EXÉCUTION:
 *     Ce script est lancé par GitHub Actions toutes les 2 heures.
 *     Il peut aussi être lancé manuellement avec: node src/aggregator.js
 *
 * FICHIERS CRÉÉS:
 *     - README.md : Fichier principal avec tous les articles
 *     - feed.xml : Flux RSS global
 *     - feed-{category}.xml : Flux RSS par catégorie
 *     - data/articles/*.html : Articles sauvegardés localement
 *
 * DÉPENDANCES (package.json):
 *     - rss-parser : Pour lire les flux RSS
 *     - axios : Pour faire des requêtes HTTP
 *     - sanitize-html : Pour nettoyer le HTML dangereux
 *     - @mozilla/readability : Pour extraire le contenu des articles
 *     - jsdom : Pour manipuler le HTML
 *     - franc-min : Pour détecter la langue des articles
 *
 * VERSION: 3.0.0
 * DERNIÈRE MISE À JOUR: Février 2026
 * ================================================================================
 */

// ─────────────────────────────────────────────────────────────────────────────
// IMPORTATION DES MODULES
// ─────────────────────────────────────────────────────────────────────────────
// Ces lignes chargent les bibliothèques nécessaires au fonctionnement du script.
// Chaque bibliothèque a un rôle spécifique.

/**
 * rss-parser : Bibliothèque pour lire et analyser les flux RSS/Atom
 * Transforme un flux RSS XML en objets JavaScript faciles à manipuler
 */
const Parser = require('rss-parser');

/**
 * axios : Bibliothèque pour faire des requêtes HTTP (GET, POST, etc.)
 * Utilisée pour récupérer le contenu des pages web
 */
const axios = require('axios');

/**
 * @octokit/rest : SDK officiel GitHub
 * Permet d'interagir avec l'API GitHub (non utilisé directement ici)
 */
const { Octokit } = require('@octokit/rest');

/**
 * sanitize-html : Nettoie le HTML pour éviter les attaques XSS
 * Supprime les balises et attributs dangereux
 */
const sanitizeHtml = require('sanitize-html');

/**
 * url (module natif Node.js) : Pour manipuler les URLs
 */
const { URL } = require('url');

/**
 * fs (module natif Node.js) : Pour lire et écrire des fichiers
 */
const fs = require('fs');

/**
 * path (module natif Node.js) : Pour manipuler les chemins de fichiers
 */
const path = require('path');

/**
 * @mozilla/readability : Extrait le contenu principal d'une page web
 * C'est la même technologie que le mode lecture de Firefox
 */
const { Readability } = require('@mozilla/readability');

/**
 * jsdom : Crée un DOM virtuel pour manipuler le HTML côté serveur
 * Permet d'utiliser Readability sur du HTML récupéré
 */
const { JSDOM } = require('jsdom');

/**
 * crypto (module natif Node.js) : Pour créer des hachages (MD5, SHA256)
 * Utilisé pour créer des noms de fichiers uniques
 */
const crypto = require('crypto');

/**
 * linkedin-helper : Module local pour poster sur LinkedIn
 * Voir le fichier src/linkedin-helper.js
 */
const linkedinHelper = require('./linkedin-helper');


// ─────────────────────────────────────────────────────────────────────────────
// CHARGEMENT DE LA CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
// Lit le fichier config.json qui contient toutes les sources et paramètres

/**
 * Chemin vers le fichier de configuration
 * __dirname = dossier du script actuel (src/)
 * '..' = remonter d'un niveau (racine du projet)
 * Résultat : /chemin/vers/AI-Pulse/config.json
 */
const CONFIG_PATH = path.join(__dirname, '..', 'config.json');

/**
 * Lecture et parsing du fichier JSON
 * fs.readFileSync lit le fichier de manière synchrone (bloquante)
 * JSON.parse transforme le texte JSON en objet JavaScript
 */
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));

/**
 * SETTINGS : Paramètres généraux (articlesPerFeed, deduplication, etc.)
 * CATEGORIES : Liste des catégories avec leurs sources RSS
 */
const SETTINGS = config.settings;
const CATEGORIES = config.categories;


// ─────────────────────────────────────────────────────────────────────────────
// DÉTECTION DE LANGUE
// ─────────────────────────────────────────────────────────────────────────────
// Détecte automatiquement la langue d'un texte (français, anglais, etc.)

/**
 * Variable qui contiendra la fonction de détection de langue
 * Sera définie selon que la bibliothèque franc-min est disponible ou non
 */
let detectLang;

try {
  /**
   * franc-min : Bibliothèque de détection de langue
   * Analyse un texte et retourne un code de langue (ISO 639-3)
   */
  const { franc } = require('franc-min');

  /**
   * Fonction de détection de langue
   *
   * @param {string} text - Le texte à analyser
   * @returns {string|null} - Code de langue ('fr', 'en', etc.) ou null si non détectable
   *
   * FONCTIONNEMENT:
   * 1. Vérifie que le texte est assez long (minimum 20 caractères)
   * 2. Utilise franc pour analyser le texte
   * 3. Convertit le code ISO 639-3 en code court (fra -> fr)
   */
  detectLang = (text) => {
    // Texte trop court = impossible de détecter la langue
    if (!text || text.length < 20) return null;

    // Analyse du texte avec franc
    const code = franc(text);

    // 'und' = undetermined (langue non déterminée)
    if (code === 'und') return null;

    // Table de conversion des codes de langue
    // franc retourne des codes ISO 639-3 (3 lettres)
    // On les convertit en codes ISO 639-1 (2 lettres) plus courants
    const langMap = {
      fra: 'fr',  // Français
      eng: 'en',  // Anglais
      spa: 'es',  // Espagnol
      deu: 'de',  // Allemand
      por: 'pt',  // Portugais
      ita: 'it',  // Italien
      nld: 'nl',  // Néerlandais
      rus: 'ru',  // Russe
      zho: 'zh',  // Chinois
      jpn: 'ja',  // Japonais
      kor: 'ko',  // Coréen
      ara: 'ar'   // Arabe
    };

    return langMap[code] || code;
  };
} catch (e) {
  // Si franc-min n'est pas installé, on utilise une fonction vide
  console.error('franc-min not available, using feed-declared language only');
  detectLang = () => null;
}


// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION DU PARSER RSS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Création d'une instance du parser RSS
 *
 * OPTIONS:
 * - timeout: 10000 = 10 secondes maximum pour récupérer un flux
 * - headers: User-Agent identifie notre application auprès des serveurs
 */
const parser = new Parser({
  timeout: 10000,                           // Timeout de 10 secondes
  headers: { 'User-Agent': 'AI-Pulse/3.0' } // Identification de l'application
});


// ─────────────────────────────────────────────────────────────────────────────
// FONCTION: AJOUT DES PARAMÈTRES UTM
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Ajoute des paramètres UTM aux URLs pour le suivi du trafic
 *
 * UTM = Urchin Tracking Module (paramètres de tracking Google Analytics)
 * Permet de savoir d'où viennent les visiteurs d'un site
 *
 * @param {string} url - L'URL originale de l'article
 * @param {string} category - La catégorie de l'article (ai, cybersecurity, etc.)
 * @returns {string} - L'URL avec les paramètres UTM ajoutés
 *
 * EXEMPLE:
 * Entrée: https://example.com/article
 * Sortie: https://example.com/article?utm_source=ai-pulse&utm_medium=reader&...
 *
 * CAS SPÉCIAL MEDIUM:
 * Les articles Medium sont redirigés vers Freedium pour éviter le paywall
 */
function addUTMParams(url, category = 'general') {
  try {
    // Analyse l'URL pour vérifier si c'est un article Medium
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();

    // Liste des domaines Medium (avec paywall)
    const mediumHosts = ['medium.com', 'www.medium.com', 'towardsdatascience.com', 'www.towardsdatascience.com'];

    // Si c'est Medium, on utilise Freedium pour contourner le paywall
    if (mediumHosts.includes(hostname)) {
      url = `https://freedium.cloud/${url}`;
    }
  } catch (e) {
    // Erreur de parsing URL, on continue sans modification
  }

  // Création des paramètres UTM
  const utmParams = `utm_source=ai-pulse&utm_medium=reader&utm_campaign=article&utm_content=${category}`;

  // Ajout des paramètres (? si pas de paramètres existants, & sinon)
  return url.includes('?') ? `${url}&${utmParams}` : `${url}?${utmParams}`;
}


// ─────────────────────────────────────────────────────────────────────────────
// FONCTION: NETTOYAGE DU HTML
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Nettoie le HTML pour ne garder que le texte pur
 *
 * Supprime TOUTES les balises HTML et attributs pour éviter:
 * - Les attaques XSS (injection de code malveillant)
 * - Les problèmes d'affichage dans le README
 *
 * @param {string} input - Texte HTML à nettoyer
 * @returns {string} - Texte pur sans HTML
 *
 * EXEMPLE:
 * Entrée: "<p>Hello <b>World</b></p>"
 * Sortie: "Hello World"
 */
function sanitizeText(input) {
  if (!input) return '';

  // sanitizeHtml avec aucune balise autorisée = texte pur
  return sanitizeHtml(input, {
    allowedTags: [],       // Aucune balise autorisée
    allowedAttributes: {}  // Aucun attribut autorisé
  });
}


// ─────────────────────────────────────────────────────────────────────────────
// FONCTION: TRONCATURE INTELLIGENTE
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Coupe un texte à une longueur maximale de manière intelligente
 *
 * Au lieu de couper brutalement au milieu d'un mot, cette fonction:
 * 1. Cherche le dernier signe de ponctuation (. ! ? ; :)
 * 2. Si pas trouvé, coupe au dernier espace
 * 3. Ajoute "..." si nécessaire
 *
 * @param {string} text - Le texte à tronquer
 * @param {number} maxLength - Longueur maximale (défaut: 600)
 * @returns {string} - Texte tronqué proprement
 *
 * EXEMPLE:
 * Entrée: "Ceci est une phrase. Et une autre phrase qui est trop longue."
 * Si maxLength = 30
 * Sortie: "Ceci est une phrase."
 */
function smartTruncate(text, maxLength) {
  // Utiliser la valeur par défaut de la config si non spécifiée
  maxLength = maxLength || SETTINGS.summaryMaxLength || 600;

  // Si le texte est déjà assez court, le retourner tel quel
  if (!text || text.length <= maxLength) return text;

  // Couper à la longueur maximale
  let truncated = text.slice(0, maxLength);

  // Expression régulière pour trouver les signes de ponctuation de fin
  // Cherche: . ! ? ; : suivis d'un espace ou de la fin du texte
  const punctuationRegex = /[.!?;:](?=\s|$)/g;

  // Trouver toutes les occurrences de ponctuation
  const matches = [...truncated.matchAll(punctuationRegex)];

  // Si on a trouvé de la ponctuation, couper après la dernière
  if (matches.length > 0) {
    const lastMatch = matches[matches.length - 1];
    return text.slice(0, lastMatch.index + 1).trim();
  }

  // Sinon, couper au dernier espace et ajouter "..."
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 0) return truncated.slice(0, lastSpace).trim() + '...';

  // En dernier recours, couper brutalement avec "..."
  return truncated.trim() + '...';
}


// ─────────────────────────────────────────────────────────────────────────────
// DÉDUPLICATION DES ARTICLES
// ─────────────────────────────────────────────────────────────────────────────
// Ces fonctions permettent de détecter et supprimer les articles en double
// (quand plusieurs sources parlent de la même actualité)

/**
 * STOP_WORDS : Mots courants à ignorer lors de la comparaison
 *
 * Ces mots sont très fréquents mais peu significatifs pour déterminer
 * si deux articles parlent du même sujet:
 * - Articles (le, la, the, a)
 * - Prépositions (de, pour, in, on)
 * - Pronoms (il, elle, they, we)
 * - Verbes être/avoir (is, are, est, sont)
 *
 * En les ignorant, on améliore la précision de la comparaison
 */
const STOP_WORDS = new Set([
  // Mots anglais courants
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'shall', 'this', 'that', 'these', 'those', 'it', 'its', 'not', 'no', 'nor', 'so', 'if', 'then', 'than', 'too', 'very', 'just', 'about', 'above', 'after', 'again', 'all', 'also', 'am', 'as', 'because', 'before', 'between', 'both', 'each', 'few', 'from', 'further', 'get', 'got', 'he', 'her', 'here', 'him', 'his', 'how', 'i', 'into', 'me', 'more', 'most', 'my', 'new', 'now', 'only', 'other', 'our', 'out', 'over', 'own', 'same', 'she', 'some', 'such', 'them', 'there', 'they', 'through', 'under', 'up', 'us', 'we', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'you', 'your',
  // Mots français courants
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'et', 'ou', 'mais', 'dans', 'sur', 'pour', 'par', 'avec', 'est', 'sont', 'a', 'ont', 'ce', 'cette', 'ces', 'il', 'elle', 'ils', 'elles', 'nous', 'vous', 'son', 'sa', 'ses', 'leur', 'leurs', 'qui', 'que', 'quoi', 'dont', 'au', 'aux', 'ne', 'pas', 'plus', 'se', 'en', 'y'
]);


/**
 * Normalise un texte pour la comparaison
 *
 * @param {string} text - Le texte à normaliser
 * @returns {string[]} - Liste de mots significatifs
 *
 * ÉTAPES:
 * 1. Convertir en minuscules
 * 2. Remplacer la ponctuation par des espaces
 * 3. Diviser en mots
 * 4. Garder seulement les mots de plus de 2 caractères
 * 5. Supprimer les stop words
 *
 * EXEMPLE:
 * Entrée: "The AI Revolution is here!"
 * Sortie: ["revolution", "here"]
 */
function normalizeText(text) {
  if (!text) return [];

  return text
    .toLowerCase()                         // Tout en minuscules
    .replace(/[^\w\s]/g, ' ')              // Ponctuation -> espaces
    .split(/\s+/)                          // Diviser par espaces
    .filter(w => w.length > 2 && !STOP_WORDS.has(w)); // Filtrer
}


/**
 * Calcule la similarité entre deux listes de mots
 *
 * Utilise le coefficient de Dice (aussi appelé Sørensen–Dice)
 * Formule: 2 * |intersection| / (|A| + |B|)
 *
 * @param {string[]} wordsA - Première liste de mots
 * @param {string[]} wordsB - Deuxième liste de mots
 * @returns {number} - Score de similarité entre 0 et 1
 *
 * EXEMPLE:
 * wordsA = ["ai", "revolution", "2024"]
 * wordsB = ["ai", "revolution", "future"]
 * intersection = ["ai", "revolution"]
 * score = 2 * 2 / (3 + 3) = 4/6 = 0.67
 */
function textSimilarity(wordsA, wordsB) {
  // Si une des listes est vide, pas de similarité
  if (wordsA.length === 0 || wordsB.length === 0) return 0;

  // Convertir en ensembles pour éliminer les doublons
  const setA = new Set(wordsA);
  const setB = new Set(wordsB);

  // Trouver les mots en commun (intersection)
  const intersection = [...setA].filter(w => setB.has(w));

  // Coefficient de Dice
  return (2 * intersection.length) / (setA.size + setB.size);
}


/**
 * Supprime les articles en double d'une liste
 *
 * Un article est considéré comme doublon si:
 * - Son titre est similaire à 70%+ avec un article existant
 * - OU son contenu est similaire à 50%+
 * - OU les deux sont modérément similaires (40%+ chacun)
 *
 * @param {Object[]} articles - Liste d'articles à dédupliquer
 * @returns {Object[]} - Liste sans doublons
 *
 * FONCTIONNEMENT:
 * 1. Parcourir chaque article
 * 2. Comparer avec les articles déjà gardés
 * 3. Si c'est un doublon, noter la source dans "alsoPublishedOn"
 * 4. Sinon, ajouter à la liste des articles gardés
 */
function deduplicateArticles(articles) {
  // Vérifier si la déduplication est activée dans la config
  if (!SETTINGS.deduplication || !SETTINGS.deduplication.enabled) return articles;

  // Récupérer les seuils depuis la config
  const titleThreshold = SETTINGS.deduplication.similarityThreshold || 0.7;   // 70% pour les titres
  const contentThreshold = SETTINGS.deduplication.contentThreshold || 0.5;    // 50% pour le contenu

  const kept = [];           // Articles gardés
  const normalizedData = []; // Données normalisées pour comparaison rapide

  for (const article of articles) {
    // Normaliser le titre et le résumé de l'article courant
    const titleWords = normalizeText(article.title);
    const contentWords = normalizeText(article.summary || '');
    let isDuplicate = false;

    // Comparer avec chaque article déjà gardé
    for (let i = 0; i < normalizedData.length; i++) {
      const titleSim = textSimilarity(titleWords, normalizedData[i].title);
      const contentSim = textSimilarity(contentWords, normalizedData[i].content);

      // Conditions pour être considéré comme doublon:
      // 1. Titre très similaire (70%+)
      // 2. OU contenu très similaire (50%+)
      // 3. OU les deux modérément similaires (40%+ chacun)
      if (titleSim >= titleThreshold ||
          contentSim >= contentThreshold ||
          (titleSim >= 0.4 && contentSim >= 0.4)) {

        isDuplicate = true;

        // Noter que cet article est aussi publié par une autre source
        if (!kept[i].alsoPublishedOn) kept[i].alsoPublishedOn = [];
        kept[i].alsoPublishedOn.push(article.source);

        break; // Pas besoin de continuer à comparer
      }
    }

    // Si ce n'est pas un doublon, l'ajouter à la liste
    if (!isDuplicate) {
      kept.push(article);
      normalizedData.push({ title: titleWords, content: contentWords });
    }
  }

  return kept;
}


// ─────────────────────────────────────────────────────────────────────────────
// TRAITEMENT D'UN ARTICLE
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Traite un article RSS et extrait les informations importantes
 *
 * @param {Object} article - Article brut du flux RSS
 * @param {string} sourceName - Nom de la source (ex: "TechCrunch AI")
 * @param {string[]} tags - Tags de la source (ex: ["AI", "Startups"])
 * @param {string} category - Catégorie (ex: "ai")
 * @param {string} feedLang - Langue déclarée du flux (ex: "en")
 * @returns {Object} - Article traité avec toutes les infos
 *
 * FONCTIONNEMENT:
 * 1. Nettoyer le titre et le résumé
 * 2. Détecter la langue du contenu
 * 3. Essayer de récupérer le contenu complet de l'article
 * 4. Sauvegarder une version locale en HTML
 * 5. Retourner un objet avec toutes les informations
 */
async function processArticle(article, sourceName, tags, category, feedLang) {
  // Nettoyer le résumé (supprimer le HTML)
  const rawSummary = sanitizeText(article.contentSnippet) || '';
  const articleUrl = article.link;

  // Créer un hash MD5 unique pour l'article (basé sur l'URL)
  // Cela permet de créer un nom de fichier unique et prévisible
  const hash = crypto.createHash('md5').update(articleUrl).digest('hex');
  const localFileName = `${hash}.html`;
  const localPath = path.join(__dirname, '..', 'data', 'articles', localFileName);
  const relativeLink = `data/articles/${localFileName}`;

  // Détecter la langue du contenu
  let detectedLang = detectLang(rawSummary || article.title);
  const lang = detectedLang || feedLang || 'en';

  // Essayer de récupérer et sauvegarder le contenu complet
  if (!fs.existsSync(localPath)) {
    try {
      // Récupérer la page web complète
      const response = await axios.get(articleUrl, {
        timeout: 8000,
        headers: { 'User-Agent': 'AI-Pulse/3.0' }
      });

      // Créer un DOM virtuel pour manipuler le HTML
      const dom = new JSDOM(response.data, { url: articleUrl });

      // Utiliser Readability pour extraire le contenu principal
      // (même technologie que le mode lecture de Firefox)
      const reader = new Readability(dom.window.document);
      const articleContent = reader.parse();

      if (articleContent && articleContent.textContent) {
        // Détecter la langue depuis le contenu complet si pas encore fait
        if (!detectedLang) {
          detectedLang = detectLang(articleContent.textContent.slice(0, 500));
        }

        // Créer une page HTML propre avec le contenu
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

        // Sauvegarder le fichier HTML localement
        fs.writeFileSync(localPath, cleanHtml);
      }
    } catch (e) {
      console.error(`    Could not extract content for: ${articleUrl}`);
    }
  }

  // Vérifier si on a un fichier local
  const hasLocalContent = fs.existsSync(localPath);

  // Utiliser le lien local si disponible, sinon le lien original
  const finalReaderLink = hasLocalContent ? relativeLink : articleUrl;

  // Retourner l'objet article traité
  return {
    title: (sanitizeText(article.title) || 'Untitled').slice(0, 200), // Titre limité à 200 caractères
    link: finalReaderLink,                    // Lien vers la version locale ou originale
    originalLink: articleUrl,                 // Lien original (toujours gardé)
    pubDate: new Date(article.pubDate || Date.now()), // Date de publication
    source: sourceName,                       // Nom de la source
    tags: tags,                               // Tags de la source
    category: category,                       // Catégorie
    lang: detectedLang || feedLang || 'en',   // Langue détectée ou déclarée
    summary: smartTruncate(rawSummary),       // Résumé tronqué intelligemment
    hasLocalContent: hasLocalContent          // Indique si on a une copie locale
  };
}


// ─────────────────────────────────────────────────────────────────────────────
// AGRÉGATION D'UNE CATÉGORIE
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Récupère tous les articles d'une catégorie
 *
 * @param {string} categoryName - Nom de la catégorie (ex: "ai")
 * @param {Object[]} feeds - Liste des sources de cette catégorie
 * @returns {Object[]} - Articles triés par date et dédupliqués
 *
 * FONCTIONNEMENT:
 * 1. Parcourir chaque source de la catégorie
 * 2. Récupérer le flux RSS
 * 3. Traiter chaque article
 * 4. Trier par date (plus récent en premier)
 * 5. Supprimer les doublons
 */
async function aggregateCategory(categoryName, feeds) {
  console.error(`\nAggregating ${categoryName} feeds...`);

  const articles = [];
  const limit = SETTINGS.articlesPerFeed || 15; // Nombre d'articles par source

  // Parcourir chaque source
  for (const feed of feeds) {
    try {
      console.error(`  Fetch: ${feed.name}`);

      // Récupérer et parser le flux RSS
      const feedData = await parser.parseURL(feed.url);

      // Traiter chaque article (limité au nombre configuré)
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

  // Trier par date (plus récent en premier)
  const sorted = articles.sort((a, b) => b.pubDate - a.pubDate);

  // Dédupliquer et retourner
  return deduplicateArticles(sorted);
}


// ─────────────────────────────────────────────────────────────────────────────
// GÉNÉRATION DU README
// ─────────────────────────────────────────────────────────────────────────────

/**
 * En-tête du fichier README.md
 * Contient la bannière, les badges, et l'introduction
 */
const README_HEADER = `<div align="center">

<img src="assets/banner.png" alt="AI-PULSE Banner" width="100%">

> Curated content from the best sources

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

/**
 * Pied de page du fichier README.md
 * Contient les liens et le copyright
 */
const README_FOOTER = `
---

<div align="center">

### Connect With Me

[![GitHub Profile](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency) [![Repository](https://img.shields.io/badge/Source-Repo-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse) [![Reader](https://img.shields.io/badge/Live-Reader-blueviolet?style=for-the-badge&logo=readthedocs)](https://thephoenixagency.github.io/AI-Pulse/app.html) [![Documentation](https://img.shields.io/badge/Documentation-Technical-blue?style=for-the-badge&logo=googledocs)](https://github.com/ThePhoenixAgency/AI-Pulse/blob/main/database/SUPABASE_MIGRATION.md) [![Support](https://img.shields.io/badge/Support-Issues-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse/issues)

---

<sub>*Powered by AI-Pulse | Built with love by ThePhoenixAgency*</sub>

</div>
`;


/**
 * Génère le contenu du fichier README.md
 *
 * @param {Object} categorizedArticles - Articles groupés par catégorie
 * @returns {string} - Contenu Markdown du README
 *
 * STRUCTURE GÉNÉRÉE:
 * - En-tête avec bannière et badges
 * - Pour chaque catégorie:
 *   - Titre de la catégorie
 *   - Liste des articles avec titre, source, tags, résumé
 * - Pied de page avec liens
 */
function generateREADME(categorizedArticles) {
  let readme = README_HEADER;
  const maxArticles = SETTINGS.maxArticlesPerCategory || 30;

  // Parcourir chaque catégorie
  for (const [category, articles] of Object.entries(categorizedArticles)) {
    const catConfig = CATEGORIES[category];
    const labelEn = catConfig ? catConfig.labels.en : category;
    const labelFr = catConfig ? catConfig.labels.fr : category;

    // Début de la section avec attributs pour le filtrage
    readme += `<section id="${category}" data-category="${category}">\n\n`;
    readme += `## ${labelEn} / ${labelFr}\n\n`;

    // Si pas d'articles dans cette catégorie
    if (articles.length === 0) {
      readme += `*No articles available*\n\n`;
      readme += `</section>\n\n---\n\n`;
      continue;
    }

    // Générer la liste des articles
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


// ─────────────────────────────────────────────────────────────────────────────
// GÉNÉRATION DES FLUX RSS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Génère un flux RSS au format XML
 *
 * @param {Object[]} articles - Liste d'articles
 * @param {string} title - Titre du flux
 * @param {string} description - Description du flux
 * @param {string} category - Catégorie (ou vide pour le flux global)
 * @returns {string} - Contenu XML du flux RSS
 */
function generateRSSFeed(articles, title, description, category) {
  const baseUrl = 'https://thephoenixagency.github.io/AI-Pulse';
  const now = new Date().toUTCString();

  // Générer les items RSS (max 50 articles)
  let items = articles.slice(0, 50).map(article => `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${article.originalLink || article.link}</link>
      <description><![CDATA[${article.summary || ''}]]></description>
      <pubDate>${article.pubDate.toUTCString()}</pubDate>
      <source>${article.source}</source>
      <category>${article.category}</category>
      <guid>${article.originalLink || article.link}</guid>
    </item>`).join('\n');

  // Retourner le XML complet
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


/**
 * Écrit les flux RSS dans des fichiers
 *
 * @param {Object} categorizedArticles - Articles groupés par catégorie
 *
 * FICHIERS CRÉÉS:
 * - feed.xml : Tous les articles
 * - feed-ai.xml : Articles de la catégorie IA
 * - feed-cybersecurity.xml : Articles cybersécurité
 * - etc.
 */
function writeRSSFeeds(categorizedArticles) {
  const feedDir = path.join(__dirname, '..');

  // Flux global avec tous les articles
  const allArticles = Object.values(categorizedArticles).flat().sort((a, b) => b.pubDate - a.pubDate);
  fs.writeFileSync(path.join(feedDir, 'feed.xml'),
    generateRSSFeed(allArticles, 'AI-Pulse - All News', 'Curated tech news from AI-Pulse', ''));

  // Flux par catégorie
  for (const [category, articles] of Object.entries(categorizedArticles)) {
    const catConfig = CATEGORIES[category];
    const label = catConfig ? catConfig.labels.en : category;
    fs.writeFileSync(path.join(feedDir, `feed-${category}.xml`),
      generateRSSFeed(articles, `AI-Pulse - ${label}`, `${label} news from AI-Pulse`, category));
  }

  console.error('RSS feeds generated successfully');
}


// ─────────────────────────────────────────────────────────────────────────────
// ENVOI DES EMAILS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Envoie les emails de digest aux abonnés
 *
 * @param {Object} categorizedArticles - Articles groupés par catégorie
 *
 * PRÉREQUIS:
 * - Variable d'environnement API_RESEND contenant la clé API Resend
 * - Fichier data/subscribers.json avec la liste des abonnés
 * - Fichier templates/email-digest.html avec le template d'email
 *
 * FONCTIONNEMENT:
 * 1. Vérifier que la clé API existe
 * 2. Lire la liste des abonnés
 * 3. Pour chaque abonné, générer un email personnalisé
 * 4. Envoyer via l'API Resend
 */
async function sendEmailDigests(categorizedArticles) {
  // Vérifier que la clé API existe
  const apiKey = process.env.API_RESEND;
  if (!apiKey) {
    console.error('No API_RESEND key found, skipping email digests');
    return;
  }

  // Vérifier que le fichier d'abonnés existe
  const subscribersPath = path.join(__dirname, '..', 'data', 'subscribers.json');
  if (!fs.existsSync(subscribersPath)) {
    console.error('No subscribers.json found, skipping email digests');
    return;
  }

  // Lire la liste des abonnés
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

  // Lire le template d'email
  const templatePath = path.join(__dirname, '..', 'templates', 'email-digest.html');
  if (!fs.existsSync(templatePath)) {
    console.error('No email template found');
    return;
  }
  const template = fs.readFileSync(templatePath, 'utf-8');
  const today = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

  // Envoyer un email à chaque abonné
  for (const subscriber of subscribers) {
    try {
      // Filtrer les articles selon les préférences de l'abonné
      let filteredSections = [];
      const subCategories = subscriber.categories || Object.keys(CATEGORIES);
      const subLang = subscriber.lang || 'all';

      for (const cat of subCategories) {
        const articles = categorizedArticles[cat];
        if (!articles || articles.length === 0) continue;

        // Filtrer par langue si nécessaire
        let filtered = articles;
        if (subLang !== 'all') {
          filtered = articles.filter(a => a.lang === subLang);
        }

        // Limiter à 5 articles par catégorie
        filtered = filtered.slice(0, 5);
        if (filtered.length === 0) continue;

        const catConfig = CATEGORIES[cat];
        const label = subLang === 'fr' ? catConfig.labels.fr : catConfig.labels.en;

        // Générer le HTML des articles
        const articlesHtml = filtered.map(a =>
          `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1e47;">
            <a href="https://thephoenixagency.github.io/AI-Pulse/app.html?url=${encodeURIComponent(a.link)}&title=${encodeURIComponent(a.title)}&source=${encodeURIComponent(a.source)}" style="color:#00d9ff;text-decoration:none;font-weight:600;">${a.title}</a>
            <br><span style="color:#94a3b8;font-size:13px;">${a.source} | ${a.lang.toUpperCase()}</span>
          </td></tr>`
        ).join('');

        filteredSections.push(`<tr><td style="padding:20px 0 10px;"><h2 style="color:#00d9ff;margin:0;font-size:18px;">${label}</h2></td></tr>${articlesHtml}`);
      }

      // Si pas de contenu, passer à l'abonné suivant
      if (filteredSections.length === 0) continue;

      // Remplacer les placeholders dans le template
      const emailHtml = template
        .replace('{{DATE}}', today)
        .replace('{{SECTIONS}}', filteredSections.join(''))
        .replace('{{EMAIL}}', subscriber.email)
        .replace(/{{UNSUB_URL}}/g, `https://github.com/ThePhoenixAgency/AI-Pulse/issues/new?template=unsubscribe.yml&title=Unsubscribe:+${encodeURIComponent(subscriber.email)}`);

      // Envoyer l'email via l'API Resend
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


// ─────────────────────────────────────────────────────────────────────────────
// FONCTION PRINCIPALE
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Point d'entrée principal du script
 *
 * ÉTAPES:
 * 1. Créer le dossier des articles locaux si nécessaire
 * 2. Agréger les articles de chaque catégorie
 * 3. Générer le README.md
 * 4. Générer les flux RSS
 * 5. Envoyer les emails aux abonnés
 * 6. Poster sur LinkedIn
 */
async function main() {
  console.error('Starting AI-Pulse aggregation...\n');
  console.error(`Loaded ${Object.keys(CATEGORIES).length} categories from config.json`);

  // Créer le dossier data/articles s'il n'existe pas
  const articlesDir = path.join(__dirname, '..', 'data', 'articles');
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }

  const categorizedArticles = {};

  // Trier les catégories par priorité
  const sortedCategories = Object.entries(CATEGORIES).sort((a, b) => (a[1].priority || 99) - (b[1].priority || 99));

  // Agréger chaque catégorie
  for (const [categoryName, catConfig] of sortedCategories) {
    categorizedArticles[categoryName] = await aggregateCategory(categoryName, catConfig.feeds);
  }

  // Générer et afficher le README (sera capturé par le workflow)
  const readme = generateREADME(categorizedArticles);
  console.log(readme);

  // Générer les flux RSS
  writeRSSFeeds(categorizedArticles);

  // Envoyer les emails
  await sendEmailDigests(categorizedArticles);

  // Poster sur LinkedIn
  try {
    for (const [category, articles] of Object.entries(categorizedArticles)) {
      console.error(`\nChecking LinkedIn posts for category: ${category}`);

      // Trouver les articles non encore postés (max 2 par catégorie)
      const unpostedArticles = articles
        .filter(article => !linkedinHelper.isAlreadyPosted(article.originalLink || article.link))
        .slice(0, 2);

      if (unpostedArticles.length > 0) {
        console.error(`Found ${unpostedArticles.length} new articles for ${category}`);

        for (const article of unpostedArticles) {
          console.error(`Processing: ${article.title}`);

          // Générer le texte du post
          const postText = await linkedinHelper.generatePost(article);

          if (postText) {
            console.error('Sending to LinkedIn...');

            // Poster sur LinkedIn
            const postId = await linkedinHelper.postToLinkedIn(postText, article.originalLink || article.link);

            if (postId) {
              // Marquer comme posté
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

// Lancer le script
main().catch(console.error);
