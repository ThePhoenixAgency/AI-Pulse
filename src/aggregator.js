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
const { JSDOM, VirtualConsole } = require('jsdom');

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
const KEYWORD_MAP_PATH = path.join(__dirname, '..', 'data', 'keyword-mapping.json');
let config, SETTINGS, CATEGORIES;
try {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error(`ERROR: Configuration file not found at ${CONFIG_PATH}`);
    console.error('Please ensure config.json exists in the repository root.');
    process.exit(1);
  }
  const configContent = fs.readFileSync(CONFIG_PATH, 'utf-8');
  config = JSON.parse(configContent);
  SETTINGS = config.settings;
  CATEGORIES = config.categories;
  
  if (!SETTINGS || !CATEGORIES) {
    console.error('ERROR: Invalid config.json structure. Missing required "settings" or "categories" fields.');
    process.exit(1);
  }
} catch (e) {
  console.error(`ERROR: Failed to load or parse config.json: ${e.message}`);
  console.error('Please check that config.json is valid JSON and properly formatted.');
  process.exit(1);
}

let KEYWORD_MAPPING = {};
try {
  if (fs.existsSync(KEYWORD_MAP_PATH)) {
    KEYWORD_MAPPING = JSON.parse(fs.readFileSync(KEYWORD_MAP_PATH, 'utf-8')) || {};
  }
} catch (e) {
  console.error(`WARNING: Failed to load keyword mapping: ${e.message}`);
  KEYWORD_MAPPING = {};
}


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
  console.error('franc-min not available for language detection.');
  console.error('To enable automatic language detection, run: npm install franc-min');
  console.error('Continuing with feed-declared language only...');
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

// Valid ISO 639-1 language codes for HTML lang attribute
const VALID_LANG_CODES = ['en', 'fr', 'es', 'de', 'pt', 'it', 'nl', 'ru', 'zh', 'ja', 'ko', 'ar'];

// Default sender email for notifications
const DEFAULT_SENDER_EMAIL = 'AI-Pulse <noreply@resend.dev>';

// UTM parameters for AI-Pulse traffic tracking
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

    // Liste des domaines avec paywalls stricts
    const paywalledHosts = ['ft.com', 'wsj.com', 'economist.com', 'bloomberg.com', 'investing.com'];

    // Ajouter Archive.ph en query parameter pour fallback
    if (paywalledHosts.some(host => hostname.includes(host))) {
      // On ne change pas l'URL ici, on l'utilisera comme fallback
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
  return stripEmojiCharacters(sanitizeHtml(input, {
    allowedTags: [],       // Aucune balise autorisée
    allowedAttributes: {}  // Aucun attribut autorisé
  }));
}

function escapeHtmlAttribute(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function normalizeExternalUrl(value) {
  try {
    const url = new URL(String(value || '').trim());
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
    return url.toString();
  } catch (_) {
    return '';
  }
}

function renderOriginalLinkMeta(value) {
  const safe = normalizeExternalUrl(value);
  if (!safe) return '';
  const escaped = escapeHtmlAttribute(safe);
  return ` | <a href="${escaped}" target="_blank" rel="noopener noreferrer">Lien</a>`;
}

function renderArticleMetadataLine({ sourceName, pubDate, lang, originalUrl }) {
  const safeSource = sanitizeText(sourceName || 'Unknown') || 'Unknown';
  const safeLang = String(lang || 'en').toUpperCase();
  const rawDate = pubDate ? new Date(pubDate) : new Date();
  const safeDate = Number.isNaN(rawDate.getTime()) ? new Date() : rawDate;
  const datePart = `${safeDate.toLocaleDateString()} ${safeDate.toLocaleTimeString()}`;
  const linkPart = renderOriginalLinkMeta(originalUrl);
  return `Source: ${safeSource} | Date: ${datePart}${linkPart} | Lang: ${safeLang}`;
}

function stripEmojiCharacters(input) {
  if (!input) return '';
  return String(input)
    .replace(/\p{Extended_Pictographic}/gu, '')
    .replace(/[\uFE0F\u200D]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const PROMOTIONAL_MARKERS = [
  /want to learn more/i,
  /check out\s+ai\s*&?\s*big data expo/i,
  /ai news is powered by/i,
  /techforge media/i,
  /\badvertisement\b/i,
  /\bsponsored\b/i,
  /\baffiliate\b/i,
  /\bpromo(?:tion| code)?\b/i,
  /\bnewsletter\b/i,
  /\bsubscribe\b/i,
  /\bshop now\b/i,
  /\bbuy now\b/i,
  /\bpublicit[eé]\b/i,
  /\bpublicit/i,
  /\bsponsors?\b/i,
  /\bsponsoris[eé]\b/i,
  /\babonnez[-\s]?vous\b/i,
  /\binscrivez[-\s]?vous\b/i,
  /\bsuivez[-\s]?nous\b/i,
  /\bfollow us\b/i,
  /\bread more\b/i,
  /\blire aussi\b/i,
  /\barticles? connexes?\b/i,
  /\byou may also like\b/i,
  /\brecommended\b/i,
  /\bvisit website\b/i,
  /\blaunch team\b/i,
  /\balternatives?\b/i,
  /\breviews?\b/i,
  /\bvotre contenu continue ci-dessous\b/i,
  /\bcommentaires?\b/i,
  /\bavis\b/i,
  /\btoute l['’]actu en un clin d['’]oeil\b/i,
  /\badvertisement\.?\s*scroll to continue reading\b/i,
  /\best apparu en premier sur\b/i,
  /\bappeared first on\b/i
];

function isPromotionalContent(text) {
  const normalized = stripEmojiCharacters(sanitizeText(text || '')).toLowerCase();
  if (!normalized) return false;
  return PROMOTIONAL_MARKERS.some((pattern) => pattern.test(normalized));
}

function cleanupNoiseText(input) {
  if (!input) return '';
  return stripEmojiCharacters(String(input)
    .replace(/\bcomments?\s*0\b/gi, ' ')
    .replace(/\b0\s*comments?\b/gi, ' ')
    .replace(/\bcommentaires?\s*0\b/gi, ' ')
    .replace(/\b0\s*commentaires?\b/gi, ' ')
    .replace(/\bcomments?\b/gi, ' ')
    .replace(/\bcommentaires?\b/gi, ' ')
    .replace(/\bavis\b/gi, ' ')
    .replace(/\bsponsors?\b/gi, ' ')
    .replace(/\bsponsoris[eé]\b/gi, ' ')
    .replace(/\b(abonnez[-\s]?vous|inscrivez[-\s]?vous|suivez[-\s]?nous)\b/gi, ' ')
    .replace(/\b(follow us|read more|lire aussi|you may also like|recommended)\b/gi, ' ')
    .replace(/\btoute l['’]actu en un clin d['’]oeil\b/gi, ' ')
    .replace(/\bl['’]article[\s\S]{0,260}?\best apparu en premier sur\b[\s\S]*$/gi, ' ')
    .replace(/\bthis article[\s\S]{0,260}?\bappeared first on\b[\s\S]*$/gi, ' ')
    .replace(/\bpublicit[eé]\b/gi, ' ')
    .replace(/\bpublicit\b/gi, ' ')
    .replace(/\b(votre contenu continue ci-dessous)\b/gi, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim());
}

function hasSevereTruncationArtifact(text) {
  const value = sanitizeText(text || '').replace(/\s+/g, ' ').trim();
  if (!value) return true;
  if (/\best apparu en premier sur\b/i.test(value) || /\bappeared first on\b/i.test(value)) return true;
  if (/\.\.\.\s*$/.test(value) || /…\s*$/.test(value)) return true;
  if (/…\s+[A-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸ][^.!?]{0,160}\best apparu en premier sur\b/i.test(value)) return true;
  if (/[█▓▒]{3,}/.test(value)) return true;
  return false;
}

function isPaywallText(text) {
  const value = sanitizeText(text || '').toLowerCase().replace(/\s+/g, ' ').trim();
  if (!value) return false;
  return [
    /abonnez[-\s]?vous/,
    /subscribe/,
    /reserved? for subscribers?/,
    /reserve aux abonnes?/,
    /contenu reserve/,
    /pour lire la suite/,
    /deja abonne/,
    /se connecter/,
    /offre d'abonnement/,
    /essai gratuit/
  ].some((re) => re.test(value));
}

function getLinkDensity(node) {
  if (!node) return 0;
  const textLength = ((node.textContent || '').trim().length);
  if (textLength === 0) return 0;
  const linkTextLength = Array.from(node.querySelectorAll('a'))
    .reduce((sum, a) => sum + ((a.textContent || '').trim().length), 0);
  return linkTextLength / textLength;
}

function removeBlockingPanels(root) {
  if (!root || !root.querySelectorAll) return;
  const blockerSelector = [
    '[id*="overlay"]',
    '[class*="overlay"]',
    '[id*="modal"]',
    '[class*="modal"]',
    '[id*="popup"]',
    '[class*="popup"]',
    '[id*="paywall"]',
    '[class*="paywall"]',
    '[id*="subscribe"]',
    '[class*="subscribe"]',
    '[id*="consent"]',
    '[class*="consent"]',
    '[id*="cookie"]',
    '[class*="cookie"]',
    '[id*="gdpr"]',
    '[class*="gdpr"]',
    '[aria-modal="true"]',
    '[role="dialog"]'
  ].join(', ');
  const blockerTextPattern = /\b(cookie|consent|gdpr|subscribe|subscription|paywall|abonnez[-\s]?vous|inscrivez[-\s]?vous|continue reading|continuez la lecture)\b/i;

  root.querySelectorAll(blockerSelector).forEach((node) => node.remove());

  root.querySelectorAll('div, section, aside').forEach((node) => {
    const styleAttr = String(node.getAttribute('style') || '').toLowerCase();
    const classAndId = `${String(node.className || '').toLowerCase()} ${String(node.id || '').toLowerCase()}`;
    const text = sanitizeText(node.textContent || '').slice(0, 800);
    const hasBlockingKeyword = blockerTextPattern.test(classAndId) || blockerTextPattern.test(text);
    const looksFixedLayer = /(position\s*:\s*(fixed|sticky)|inset\s*:|top\s*:|left\s*:|right\s*:|bottom\s*:)/.test(styleAttr);
    const hasVisualPriority = /(z-index\s*:\s*[1-9]\d{1,}|backdrop-filter|overflow\s*:\s*hidden)/.test(styleAttr);
    if (hasBlockingKeyword && (looksFixedLayer || hasVisualPriority)) {
      node.remove();
    }
  });
}

function removePromotionalNodes(root) {
  if (!root || !root.querySelectorAll) return;
  const candidates = root.querySelectorAll('p, div, section, article, aside, li, ul, ol, figure, figcaption, footer, nav, header');
  candidates.forEach((node) => {
    // Never remove table containers as they carry core article data.
    if (node.querySelector('table, thead, tbody, tr, th, td')) return;
    const text = sanitizeText(node.textContent || '');
    if (!text) return;
    const normalized = text.toLowerCase().replace(/\s+/g, ' ').trim();
    const promoSignal = isPromotionalContent(normalized) ||
      /\b(et vous|source[s]?\s*:|suivez[-\s]?nous|abonnez[-\s]?vous|inscrivez[-\s]?vous|follow us|sponsors?)\b/i.test(normalized);
    if (!promoSignal) return;
    const shortBlock = normalized.length < 320;
    const linkDense = getLinkDensity(node) > 0.33;
    const manyLinks = node.querySelectorAll('a').length >= 3;
    if (shortBlock || linkDense || manyLinks) {
      node.remove();
    }
  });

  const structuralNoiseSignals = [
    /\bnewsletter\b/i,
    /\b(abonnez[-\s]?vous|inscrivez[-\s]?vous)\b/i,
    /\bsponsors?\b/i,
    /\blaunch team\b/i,
    /\bnotes?\s*&\s*links?\b/i,
    /\bchapters?\b/i,
    /\btranscript\b/i,
    /\bcommentaires?\b/i,
    /\bauteur\b/i,
    /\bet vous\b/i,
    /\bsource[s]?\s*:/i
  ];

  root.querySelectorAll('section, div, article, aside').forEach((node) => {
    if (node.querySelector('table, thead, tbody, tr, th, td')) return;
    const heading = node.querySelector('h1, h2, h3, h4, h5, h6');
    if (!heading) return;
    const title = sanitizeText(heading.textContent || '');
    if (!title) return;
    if (structuralNoiseSignals.some((pattern) => pattern.test(title))) {
      node.remove();
    }
  });
}

function shouldSkipRemoteExtraction(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    const blockedHosts = new Set([
      'openai.com',
      'www.openai.com',
      'wired.com',
      'www.wired.com',
      'numerama.com',
      'www.numerama.com'
    ]);
    return blockedHosts.has(host);
  } catch (_) {
    return false;
  }
}

function shouldSuppressExtractionLog(url, error) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    const noisyHosts = [
      'openai.com',
      'wired.com',
      'numerama.com',
      'huggingface.co',
      'towardsdatascience.com',
      'venturebeat.com',
      'artificialintelligence-news.com'
    ];
    if (noisyHosts.some((h) => host === h || host.endsWith(`.${h}`))) {
      return true;
    }
  } catch (_) {
    // ignore parse errors
  }
  const message = String((error && error.message) || '');
  return /timeout|timed out|forbidden|403|401|socket hang up/i.test(message);
}

function hostnameMatches(host, baseDomain) {
  if (!host || !baseDomain) return false;
  return host === baseDomain || host.endsWith(`.${baseDomain}`);
}

function detectSourceProfile(articleUrl, sourceName) {
  const source = String(sourceName || '').toLowerCase();
  let host = '';
  try {
    host = new URL(String(articleUrl || '')).hostname.toLowerCase();
  } catch (_) {
    host = '';
  }
  if (hostnameMatches(host, 'github.com') || source.includes('github')) return 'repo';
  if (hostnameMatches(host, 'medium.com') || source.includes('blog')) return 'blog';
  if (
    hostnameMatches(host, 'reuters.com') ||
    hostnameMatches(host, 'apnews.com') ||
    hostnameMatches(host, 'afp.com')
  ) {
    return 'wire';
  }
  if (
    hostnameMatches(host, 'stackoverflow.com') ||
    hostnameMatches(host, 'stackexchange.com')
  ) {
    return 'forum';
  }
  return 'news';
}

const BLOCKED_SOURCE_HOST_PATTERNS = [
  'news.google.',
  'google.com',
  'google.fr',
  'google.co',
  'yahoo.com',
  'yahoo.',
  'news.yahoo.',
  'finance.yahoo.',
  'news.google.com'
];

const RELIABLE_HOSTS_BY_CATEGORY = {
  ai: [
    'openai.com',
    'huggingface.co',
    'technologyreview.com',
    'techcrunch.com',
    'theverge.com',
    'medium.com',
    'towardsdatascience.com',
    'freedium.cloud',
    'venturebeat.com',
    'siecledigital.fr',
    'numerama.com',
    'actuia.com'
  ],
  openclaw: [
    'openai.com',
    'huggingface.co',
    'technologyreview.com',
    'techcrunch.com',
    'theverge.com',
    'wired.com',
    'numerama.com',
    'freedium.cloud'
  ],
  cybersecurity: [
    'securityweek.com',
    'krebsonsecurity.com',
    'bleepingcomputer.com',
    'portswigger.net',
    'cert.ssi.gouv.fr',
    'thehackernews.com',
    'zataz.com'
  ],
  local: [
    'ledauphine.com',
    'lemonde.fr',
    'france24.com',
    'franceinfo.fr',
    'ouest-france.fr',
    'bbc.com'
  ],
  france: [
    'lemonde.fr',
    'lefigaro.fr',
    'franceinfo.fr',
    'france24.com',
    'ouest-france.fr'
  ],
  international: [
    'bbc.com',
    'theguardian.com',
    'reuters.com',
    'apnews.com',
    'france24.com',
    'aljazeera.com',
    'nytimes.com'
  ],
  mac: [
    'apple.com',
    'macg.co',
    'igen.fr',
    'macrumors.com',
    '9to5mac.com',
    'appleinsider.com',
    'macworld.com',
    'theverge.com',
    'consomac.fr',
    'iphon.fr'
  ]
};

function extractHost(url) {
  try {
    return new URL(String(url || '').trim()).hostname.toLowerCase();
  } catch (_) {
    return '';
  }
}

function hostMatches(host, suffix) {
  return host === suffix || host.endsWith(`.${suffix}`);
}

function isReliableSourceForCategory(url, categoryName) {
  const host = extractHost(url);
  if (!host) return false;

  if (BLOCKED_SOURCE_HOST_PATTERNS.some((entry) => host.includes(entry))) {
    return false;
  }

  const allow = RELIABLE_HOSTS_BY_CATEGORY[String(categoryName || '').toLowerCase()];
  if (!Array.isArray(allow) || allow.length === 0) return true;
  return allow.some((suffix) => hostMatches(host, suffix));
}

function createSafeDom(html, url) {
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', () => {
    // Ignore noisy CSS parsing errors from third-party pages.
  });
  return new JSDOM(html, { url, virtualConsole });
}

function trimPromotionalTailText(input) {
  if (!input) return '';
  const lines = String(input)
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length === 0) return '';

  let cutIndex = -1;
  const minIndex = Math.floor(lines.length * 0.45);
  for (let i = minIndex; i < lines.length; i++) {
    if (isPromotionalContent(lines[i])) {
      cutIndex = i;
      break;
    }
  }
  const kept = cutIndex >= 0 ? lines.slice(0, cutIndex) : lines;
  return cleanupNoiseText(kept.join('\n'));
}

function cleanupNoiseHtml(input, options = {}) {
  const sourceProfile = options.sourceProfile || 'news';
  if (!input) return '';
  const normalizeNoiseText = (value) => sanitizeText(value).toLowerCase().replace(/\s+/g, ' ').trim();
  const removableParagraphs = new Set([
    'comments 0',
    '0 comments',
    'commentaire 0',
    'commentaires 0',
    '0 commentaire',
    '0 commentaires',
    'comments',
    'comment',
    'commentaire',
    'commentaires',
    'avis',
    "toute l'actu en un clin d'oeil",
    'advertisement scroll to continue reading',
    'advertisement. scroll to continue reading.',
    'publicité',
    'publicite',
    'votre contenu continue ci-dessous'
  ]);

  try {
    const dom = createSafeDom(`<body>${String(input)}</body>`, 'https://local.ai-pulse/');
    const body = dom.window.document.body;
    body.querySelectorAll('p').forEach((paragraph) => {
      const normalized = normalizeNoiseText(paragraph.textContent || '');
      if (
        removableParagraphs.has(normalized) ||
        /\best apparu en premier sur\b/i.test(normalized) ||
        /\bappeared first on\b/i.test(normalized)
      ) {
        paragraph.remove();
      }
    });

    body.querySelectorAll('div').forEach((div) => {
      const childElements = Array.from(div.children);
      if (childElements.length === 0) return;
      const onlyParagraphChildren = childElements.every((node) => node.tagName === 'P');
      if (!onlyParagraphChildren) return;
      const allParagraphsRemovable = childElements.every((paragraph) => {
        const normalized = normalizeNoiseText(paragraph.textContent || '');
        return removableParagraphs.has(normalized);
      });
      if (allParagraphsRemovable) {
        div.remove();
      }
    });

    body.querySelectorAll('img').forEach((img) => {
      const src = String(img.getAttribute('src') || '').toLowerCase();
      const alt = String(img.getAttribute('alt') || '').toLowerCase();
      const isPromoImage = /(?:^|[\/?&_.-])(advert|ads|adservice|promo|sponsor|affiliate|tracking|doubleclick|taboola|outbrain)(?:[\/?&_.-]|$)/.test(src)
        || /buy\.geni\.us|[?&]utm_|[?&]ref=/.test(src)
        || /\b(sponsor|publicit|promo|advert)\b/.test(alt);
      if (isPromoImage) {
        img.remove();
      }
    });

    removeBlockingPanels(body);
    removePromotionalNodes(body);

    let cleaned = trimPromotionalTailHtml(stripEmojiCharacters(body.innerHTML.trim()));
    if (sourceProfile === 'news' || sourceProfile === 'wire' || sourceProfile === 'blog') {
      cleaned = cleaned
        .replace(/<p[^>]*>[\s\S]*?\best apparu en premier sur\b[\s\S]*?<\/p>/gi, '')
        .replace(/<p[^>]*>[\s\S]*?\bappeared first on\b[\s\S]*?<\/p>/gi, '');
    }
    return cleaned;
  } catch (_) {
    return trimPromotionalTailHtml(stripEmojiCharacters(String(input).trim()));
  }
}

function normalizeCodeBlocksHtml(input, options = {}) {
  const allowCodeWrap = options.allowCodeWrap !== false;
  if (!input) return '';
  try {
    const dom = createSafeDom(`<body>${String(input)}</body>`, 'https://local.ai-pulse/');
    const body = dom.window.document.body;
    const looksLikeCode = (raw) => {
      const text = String(raw || '').trim();
      if (!text) return false;
      if (/```/.test(text)) return true;

      const symbolMatches = (text.match(/[{}[\]();=<>]/g) || []).length;
      const nonWhitespace = text.replace(/\s+/g, '');
      const symbolDensity = nonWhitespace.length > 0 ? symbolMatches / nonWhitespace.length : 0;
      const lineCount = text.split('\n').length;
      const hasCodeKeywords = /\b(function|const|let|var|class|return|import|export|from|if|else|for|while|switch|case|try|catch|async|await|SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)\b/i.test(text);
      const hasTagLikeMarkup = /<\/?[a-z][^>]*>/i.test(text);

      // Require strong technical signals to avoid wrapping normal prose.
      if (hasCodeKeywords && (lineCount >= 3 || symbolMatches >= 6)) return true;
      if (hasTagLikeMarkup && (lineCount >= 3 || symbolDensity >= 0.06)) return true;
      if (symbolDensity >= 0.12 && lineCount >= 3) return true;
      return false;
    };

    // Convert known "code-like" wrappers into real pre/code blocks.
    body.querySelectorAll('div, p').forEach((node) => {
      if (!allowCodeWrap) return;
      const className = String(node.getAttribute('class') || '').toLowerCase();
      const hasCodeClass = /\b(code|snippet|highlight|language-)\b/.test(className);
      const text = node.textContent || '';
      const hasCodeShape = looksLikeCode(text);
      if (!hasCodeClass && !hasCodeShape) return;
      if (node.querySelector('pre, code')) return;
      const code = dom.window.document.createElement('code');
      code.textContent = text.trim();
      const pre = dom.window.document.createElement('pre');
      pre.appendChild(code);
      node.replaceWith(pre);
    });

    // Ensure bare code nodes are wrapped in <pre> for readability.
    body.querySelectorAll('code').forEach((code) => {
      if (!allowCodeWrap) return;
      const parentTag = code.parentElement && code.parentElement.tagName;
      if (parentTag === 'PRE') return;
      const pre = dom.window.document.createElement('pre');
      const cloned = code.cloneNode(true);
      pre.appendChild(cloned);
      code.replaceWith(pre);
    });

    return body.innerHTML;
  } catch (_) {
    return String(input);
  }
}

function isLikelyBoilerplateExtraction(text) {
  const haystack = String(text || '').toLowerCase();
  if (!haystack) return true;
  const boilerplateMarkers = [
    'navigation menu',
    'skip to content',
    'saved searches',
    'provide feedback',
    'you must be signed in',
    'appearance settings'
  ];
  const markerHits = boilerplateMarkers.filter((m) => haystack.includes(m)).length;
  return markerHits >= 2;
}

function extractGitHubMainContent(document) {
  if (!document) return null;
  const selectors = [
    '#readme article.markdown-body',
    'article.markdown-body',
    '[data-testid="readme"] article',
    '.markdown-body'
  ];
  for (const selector of selectors) {
    const node = document.querySelector(selector);
    if (!node) continue;
    const text = sanitizeText(node.textContent || '');
    if (text.length < 120) continue;
    return {
      title: sanitizeText(document.title || 'GitHub Repository'),
      content: node.innerHTML,
      textContent: text
    };
  }
  return null;
}

function parseGitHubRepoPath(articleUrl) {
  try {
    const parsed = new URL(articleUrl);
    const host = parsed.hostname.toLowerCase();
    if (host !== 'github.com' && host !== 'www.github.com') return null;
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts.length !== 2) return null;
    return { owner: parts[0], repo: parts[1] };
  } catch (_) {
    return null;
  }
}

function buildGitHubIndexCandidates(articleUrl) {
  const repoPath = parseGitHubRepoPath(articleUrl);
  if (!repoPath) return [];
  const owner = repoPath.owner;
  const repo = repoPath.repo;
  const repoLower = repo.toLowerCase();
  const ownerLower = owner.toLowerCase();
  const isUserPagesRepo = repoLower === `${ownerLower}.github.io`;

  const candidates = [
    `https://raw.githubusercontent.com/${owner}/${repo}/main/index.html`,
    `https://raw.githubusercontent.com/${owner}/${repo}/master/index.html`
  ];

  if (isUserPagesRepo) {
    candidates.push(`https://${owner}.github.io/`);
  } else {
    candidates.push(`https://${owner}.github.io/${repo}/`);
  }

  return candidates;
}

async function resolveArticleUrl(articleUrl) {
  const candidates = buildGitHubIndexCandidates(articleUrl);
  if (candidates.length === 0) return articleUrl;

  for (const candidate of candidates) {
    try {
      const response = await axios.get(candidate, {
        timeout: 5000,
        maxRedirects: 5,
        headers: { 'User-Agent': 'AI-Pulse/3.0' }
      });
      const contentType = String(response.headers && response.headers['content-type'] || '').toLowerCase();
      const body = typeof response.data === 'string' ? response.data : '';
      if (response.status >= 200 && response.status < 300 && contentType.includes('text/html') && body.trim().length > 120) {
        return candidate;
      }
    } catch (_) {
      // Continue vers le candidat suivant.
    }
  }

  // Pas d'index.html exploitable: on conserve l'URL GitHub d'origine
  // pour permettre l'extraction du README et éviter de perdre l'article.
  return articleUrl;
}

function trimPromotionalTailHtml(input) {
  if (!input) return '';
  try {
    const dom = createSafeDom(`<body>${input}</body>`, 'https://local.ai-pulse/');
    const body = dom.window.document.body;
    const blocks = Array.from(body.querySelectorAll('p, div, section, article, aside, ul, ol, figure'))
      .filter((el) => (el.textContent || '').trim().length > 0);
    if (blocks.length > 0) {
      const minIndex = Math.floor(blocks.length * 0.45);
      for (let i = minIndex; i < blocks.length; i++) {
        const block = blocks[i];
        if (!isPromotionalContent(block.textContent || '')) continue;
        const text = sanitizeText(block.textContent || '');
        const shortBlock = text.length < 320;
        const linkDense = getLinkDensity(block) > 0.33;
        const manyLinks = block.querySelectorAll('a').length >= 3;
        if (!(shortBlock || linkDense || manyLinks)) continue;
        const parent = block.parentElement || body;
        let cursor = block;
        while (cursor) {
          const next = cursor.nextElementSibling;
          cursor.remove();
          cursor = next;
        }
        // Prune empty wrappers after trimming tail.
        let wrapper = parent;
        while (wrapper && wrapper !== body) {
          const hasText = (wrapper.textContent || '').trim().length > 0;
          const hasElementChildren = wrapper.children && wrapper.children.length > 0;
          if (hasText || hasElementChildren) break;
          const nextWrapper = wrapper.parentElement;
          wrapper.remove();
          wrapper = nextWrapper;
        }
        break;
      }
    }
    body.querySelectorAll('aside, .ad, .ads, .advert, .sponsor, [class*="sponsor"], [id*="sponsor"], [class*="advert"], [id*="advert"], [class*="newsletter"], [id*="newsletter"], [class*="cookie"], [id*="cookie"]').forEach((el) => el.remove());
    removePromotionalNodes(body);
    return stripEmojiCharacters(body.innerHTML.trim());
  } catch (_) {
    return stripEmojiCharacters(String(input).trim());
  }
}

function matchesSpecialCategory(article, categoryName) {
  if (!article) return false;
  const haystack = [
    article.title || '',
    article.summary || ''
  ].join(' ').toLowerCase();

  if (categoryName === 'openclaw') {
    return /\bopen\s*claw\b|\bopenclaw\b|\bnanclaw\b|\bclowdbot\b|\bmoltbot\b|\bclawhub\b|\bpeter\s+steinberger\b/.test(haystack);
  }
  if (categoryName === 'raspberrypi') {
    return /raspberry\s*pi|\bframboise\s*314\b|\brpi\b/.test(haystack);
  }
  return true;
}

const CATEGORY_SIGNAL_CACHE = new Map();

function normalizeMatchText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function buildCategorySignals(categoryName) {
  if (CATEGORY_SIGNAL_CACHE.has(categoryName)) return CATEGORY_SIGNAL_CACHE.get(categoryName);

  const category = CATEGORIES[categoryName] || {};
  const labels = category.labels || {};
  const feeds = Array.isArray(category.feeds) ? category.feeds : [];
  const rawSignals = [];

  rawSignals.push(categoryName);
  rawSignals.push(labels.en || '', labels.fr || '');

  for (const feed of feeds) {
    if (Array.isArray(feed.tags)) rawSignals.push(...feed.tags);
  }

  const mapping = KEYWORD_MAPPING && KEYWORD_MAPPING[categoryName];
  if (mapping) {
    rawSignals.push(mapping.en || '', mapping.fr || '');
    if (Array.isArray(mapping.aliases)) rawSignals.push(...mapping.aliases);
  }

  const signals = Array.from(new Set(
    rawSignals
      .map(normalizeMatchText)
      .flatMap((s) => s.split(/[^a-z0-9]+/g))
      .map((s) => s.trim())
      .filter((s) => s.length >= 4)
      .filter((s) => !['news', 'world', 'local', 'france', 'tech'].includes(s))
  ));

  CATEGORY_SIGNAL_CACHE.set(categoryName, signals);
  return signals;
}

function getCategoryTemperature(categoryName) {
  const byCategory = SETTINGS && SETTINGS.categoryTemperature ? SETTINGS.categoryTemperature : {};
  if (Object.prototype.hasOwnProperty.call(byCategory, categoryName)) {
    return Number(byCategory[categoryName]) || 0;
  }
  return Number(byCategory.default) || 0;
}

function computeCategoryRelevance(article, categoryName) {
  if (!article) return 0;
  const signals = buildCategorySignals(categoryName);
  if (signals.length === 0) return 0;

  const text = normalizeMatchText([
    article.title || '',
    article.summary || '',
    article.source || ''
  ].join(' '));

  let score = 0;
  for (const signal of signals) {
    if (text.includes(signal)) score += 1;
  }

  return score / signals.length;
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

function containsOpenClawSignal(text) {
  if (!text) return false;
  return /\bopenclaw\b/i.test(text);
}

function enrichArticleTags(baseTags, category, title, summary) {
  const uniqueTags = Array.from(new Set((baseTags || []).filter(Boolean)));
  const eligibleCategory = category === 'ai' || category === 'cybersecurity';
  const combined = `${title || ''}\n${summary || ''}`;
  if (eligibleCategory && containsOpenClawSignal(combined) && !uniqueTags.includes('OpenClaw')) {
    uniqueTags.unshift('OpenClaw');
  }
  return uniqueTags.sort((a, b) =>
    String(a || '').localeCompare(String(b || ''), undefined, { sensitivity: 'base' })
  );
}

function resolveDisplayKeyword(tags, lang, category) {
  const safeLang = lang === 'fr' ? 'fr' : 'en';
  const normalizedTags = Array.isArray(tags)
    ? tags.map((t) => String(t || '').trim()).filter(Boolean)
    : [];
  normalizedTags.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  const normalizedTagSet = new Set(normalizedTags.map((t) => t.toLowerCase()));
  const normalizedCategory = String(category || '').toLowerCase();

  for (const [key, entry] of Object.entries(KEYWORD_MAPPING || {})) {
    const aliases = Array.isArray(entry.aliases) ? entry.aliases.map((a) => String(a).toLowerCase()) : [];
    const keyMatch = normalizedCategory === key.toLowerCase();
    const aliasMatch = aliases.some((alias) => normalizedTagSet.has(alias));
    if (keyMatch || aliasMatch) {
      return sanitizeText(entry[safeLang] || entry.en || entry.fr || key);
    }
  }

  if (normalizedTags.length > 0) {
    const first = sanitizeText(normalizedTags[0]);
    const oneWord = first.split(/\s+/)[0];
    return oneWord || 'News';
  }

  return safeLang === 'fr' ? 'Actu' : 'News';
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
  const threshold = (typeof SETTINGS.deduplication.similarityThreshold === 'number' && 
                     SETTINGS.deduplication.similarityThreshold > 0 && 
                     SETTINGS.deduplication.similarityThreshold <= 1) 
                    ? SETTINGS.deduplication.similarityThreshold 
                    : 0.7;
  const titleThreshold = threshold;
  const contentThreshold = Math.max(0.5, threshold - 0.2);
  const kept = [];
  const normalizedData = [];

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
  const rawSummary = cleanupNoiseText(sanitizeText(article.contentSnippet) || '');
  let computedSummary = rawSummary;
  const articleUrl = article.link;
  if (!isReliableSourceForCategory(articleUrl, category)) {
    return null;
  }
  const resolvedArticleUrl = await resolveArticleUrl(articleUrl);
  const sourceProfile = detectSourceProfile(resolvedArticleUrl || articleUrl, sourceName);

  // Créer un hash MD5 unique pour l'article (basé sur l'URL)
  // Cela permet de créer un nom de fichier unique et prévisible
  const hash = crypto.createHash('md5').update(articleUrl).digest('hex');
  const localFileName = `${hash}.html`;
  const localPath = path.join(__dirname, '..', 'data', 'articles', localFileName);
  const relativeLink = `data/articles/${localFileName}`;

  // Détecter la langue du contenu
  let detectedLang = detectLang(rawSummary || article.title);
  // Validate detected language is a valid 2-letter ISO 639-1 code
  if (detectedLang && !VALID_LANG_CODES.includes(detectedLang)) {
    detectedLang = null; // Fallback to feedLang if invalid
  }
  const lang = detectedLang || feedLang || 'en';

  // Essayer d'utiliser Archive.ph ou autres services de bypass
  const tryPaywallBypass = async (url) => {
    const bypassServices = [
      {
        name: 'archive.ph',
        transform: (u) => `https://archive.ph/?url=${encodeURIComponent(u)}`
      },
      {
        name: 'scribe.rip',
        transform: (u) => {
          try {
            const parsedUrl = new URL(u);
            // Safely check if this is a medium.com URL by parsing the hostname
            if (parsedUrl.hostname === 'medium.com' || parsedUrl.hostname.endsWith('.medium.com')) {
              return u.replace(parsedUrl.hostname, 'scribe.rip');
            }
          } catch (_) {}
          return null;
        }
      },
      {
        name: 'freedium',
        transform: (u) => {
          try {
            const parsedUrl = new URL(u);
            // Safely check if this is a medium.com URL
            if (parsedUrl.hostname === 'medium.com' || parsedUrl.hostname.endsWith('.medium.com')) {
              return u.replace(parsedUrl.hostname, 'freedium.app');
            }
          } catch (_) {}
          return null;
        }
      },
      {
        name: 'web.archive.org',
        transform: (u) => `https://web.archive.org/web/*/${u}`
      }
    ];

    for (const service of bypassServices) {
      const bypassUrl = service.transform(url);
      if (!bypassUrl) continue;
      try {
        const response = await axios.get(bypassUrl, {
          timeout: 5000,
          headers: { 'User-Agent': 'AI-Pulse/3.0' }
        });
        return { success: true, html: response.data, service: service.name };
      } catch (e) {
        // Continuer vers le service suivant
      }
    }
    return { success: false };
  };

  const writeFallbackLocalArticle = () => {
    const safeTitle = sanitizeText(article.title) || 'Untitled';
    const safeSummary = smartTruncate(cleanupNoiseText(rawSummary || ''), 1200) || (rawSummary ? sanitizeText(rawSummary) : 'Summary unavailable for this article.');
    const fallbackHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${safeTitle}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.55; color: #e2e8f0; max-width: 800px; margin: 26px auto; padding: 0 18px; background: #0a0e27; }
  h1 { color: #00d9ff; margin-bottom: 0.35em; line-height: 1.22; font-size: clamp(1.45rem, 2.1vw, 1.95rem); font-weight: 700; }
  .metadata { color: #94a3b8; font-size: 0.86em; margin-bottom: 1.2em; border-bottom: 1px solid rgba(0,217,255,0.2); padding-bottom: 0.7em; }
  p { margin-bottom: 0.72em; line-height: 1.58; }
  img { max-width: 100%; width: auto !important; height: auto !important; object-fit: contain !important; border-radius: 8px; display: block; margin: 0.6em auto; }
  a { color: #00d9ff; }
  .article-elevator { position: fixed; right: 14px; bottom: 14px; display: flex; flex-direction: column; gap: 8px; z-index: 9999; }
  .article-elevator-btn { width: 36px; height: 36px; border: 1px solid rgba(0,217,255,0.35); border-radius: 10px; background: rgba(10,14,39,0.88); color: #00d9ff; cursor: pointer; font-size: 16px; line-height: 1; }
  .article-elevator-btn:hover { background: rgba(10,14,39,1); }
  [id*="overlay"], [class*="overlay"], [id*="modal"], [class*="modal"], [id*="popup"], [class*="popup"],
  [id*="paywall"], [class*="paywall"], [id*="subscribe"], [class*="subscribe"], [id*="cookie"], [class*="cookie"],
  [id*="consent"], [class*="consent"], [id*="gdpr"], [class*="gdpr"], [role="dialog"], [aria-modal="true"] {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }
</style>
</head>
<body>
  <h1>${safeTitle}</h1>
  <div class="metadata">
    ${renderArticleMetadataLine({ sourceName, pubDate: article.pubDate || Date.now(), lang, originalUrl: articleUrl })}
  </div>
  <div class="content">
    <p>${safeSummary}</p>
  </div>
  <div class="article-elevator" aria-label="Navigation article">
    <button class="article-elevator-btn" type="button" onclick="scrollToTop()">▲</button>
    <button class="article-elevator-btn" type="button" onclick="scrollToBottom()">▼</button>
  </div>
  <script>
    function stripBlockingPanels() {
      const selector = '[id*="overlay"], [class*="overlay"], [id*="modal"], [class*="modal"], [id*="popup"], [class*="popup"], [id*="paywall"], [class*="paywall"], [id*="subscribe"], [class*="subscribe"], [id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"], [id*="gdpr"], [class*="gdpr"], [role="dialog"], [aria-modal="true"]';
      const textPattern = /\\b(cookie|consent|gdpr|subscribe|subscription|paywall|abonnez[-\\s]?vous|inscrivez[-\\s]?vous|continue reading|continuez la lecture)\\b/i;
      document.querySelectorAll(selector).forEach((node) => node.remove());
      document.querySelectorAll('div, section, aside').forEach((node) => {
        const styleAttr = String(node.getAttribute('style') || '').toLowerCase();
        const classAndId = String(node.className || '').toLowerCase() + ' ' + String(node.id || '').toLowerCase();
        const text = String(node.textContent || '').slice(0, 800);
        const hasKeyword = textPattern.test(classAndId) || textPattern.test(text);
        const looksFixed = /(position\\s*:\\s*(fixed|sticky)|inset\\s*:|top\\s*:|left\\s*:|right\\s*:|bottom\\s*:)/.test(styleAttr);
        const hasPriority = /(z-index\\s*:\\s*[1-9]\\d{1,}|backdrop-filter|overflow\\s*:\\s*hidden)/.test(styleAttr);
        if (hasKeyword && (looksFixed || hasPriority)) node.remove();
      });
    }
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    function scrollToBottom() {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'auto' });
    }
    window.addEventListener('message', (event) => {
      const data = event && event.data;
      if (!data || data.type !== 'AI_PULSE_SCROLL') return;
      if (data.direction === 'up' || data.direction === 'top') scrollToTop();
      if (data.direction === 'down' || data.direction === 'bottom') scrollToBottom();
    });
    stripBlockingPanels();
    setTimeout(stripBlockingPanels, 60);
    setTimeout(stripBlockingPanels, 220);
    setTimeout(stripBlockingPanels, 650);
  </script>
</body>
</html>`;
    fs.writeFileSync(localPath, fallbackHtml);
  };

  // Essayer de récupérer et sauvegarder le contenu complet
  try {
      if (shouldSkipRemoteExtraction(resolvedArticleUrl)) {
        writeFallbackLocalArticle();
      } else {
      // Récupérer la page web complète
      const response = await axios.get(resolvedArticleUrl, {
        timeout: 8000,
        headers: { 'User-Agent': 'AI-Pulse/3.0' }
      });

      // Créer un DOM virtuel pour manipuler le HTML
      const dom = createSafeDom(response.data, resolvedArticleUrl);

      let articleContent = null;

      // Cas spécial GitHub : extraire uniquement le README / contenu projet,
      // jamais le menu/navigation complet de la page.
      const host = (() => {
        try { return new URL(resolvedArticleUrl).hostname.toLowerCase(); } catch (_) { return ''; }
      })();
      const isGitHubHost = host === 'github.com' || host === 'www.github.com';
      if (isGitHubHost) {
        articleContent = extractGitHubMainContent(dom.window.document);
      }

      // Fallback générique via Readability.
      if (!articleContent) {
        const reader = new Readability(dom.window.document);
        articleContent = reader.parse();
      }

      if (articleContent && articleContent.textContent) {
        // Handle paywall bypass first if needed
        if (isPaywallText(articleContent.textContent)) {
          // Essayer les services de bypass avant de renoncer
          const bypassResult = await tryPaywallBypass(resolvedArticleUrl);
          if (bypassResult.success) {
            const bypassDom = createSafeDom(bypassResult.html, resolvedArticleUrl);
            const bypassReader = new Readability(bypassDom.window.document);
            const bypassContent = bypassReader.parse();
            if (bypassContent && bypassContent.textContent && !isPaywallText(bypassContent.textContent) && bypassContent.textContent.length > 200) {
              articleContent = bypassContent;
              // Continue to normal content processing below
            } else {
              writeFallbackLocalArticle();
              return;
            }
          } else {
            writeFallbackLocalArticle();
            return;
          }
        }

        // Process content (whether original or bypassed)
        if (isLikelyBoilerplateExtraction(articleContent.textContent)) {
          writeFallbackLocalArticle();
        } else {
        if (!computedSummary || computedSummary.trim().length < 20) {
          computedSummary = trimPromotionalTailText(cleanupNoiseText(sanitizeText(articleContent.textContent.slice(0, 1400))));
        }
        // Détecter la langue depuis le contenu complet si pas encore fait
        if (!detectedLang) {
          detectedLang = detectLang(articleContent.textContent.slice(0, 500));
        }

        // Créer une page HTML propre avec le contenu
        const sanitizedMainContent = cleanupNoiseHtml(sanitizeHtml(normalizeCodeBlocksHtml(articleContent.content, {
          allowCodeWrap: sourceProfile === 'repo'
        }), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'pre', 'code', 'table', 'thead', 'tbody', 'tr', 'th', 'td']),
          allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ['src', 'alt'],
            code: ['class'],
            table: ['class'],
            th: ['colspan', 'rowspan'],
            td: ['colspan', 'rowspan']
          }
        }), { sourceProfile });
        const sanitizedTextContent = sanitizeText(sanitizedMainContent || '');
        const sanitizedHasEnoughText = sanitizedTextContent.length >= 180;
        const safeFallbackParagraph = smartTruncate(
          cleanupNoiseText(rawSummary || articleContent.textContent || ''),
          1600
        ) || 'Summary unavailable for this article.';
        const finalMainContent = sanitizedHasEnoughText
          ? sanitizedMainContent
          : `<p>${sanitizeText(safeFallbackParagraph)}</p>`;
        const cleanHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${sanitizeText(articleContent.title)}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.55; color: #e2e8f0; max-width: 800px; margin: 26px auto; padding: 0 18px; background: #0a0e27; }
  h1 { color: #00d9ff; margin-bottom: 0.35em; line-height: 1.22; font-size: clamp(1.45rem, 2.1vw, 1.95rem); font-weight: 700; }
  h2, h3 { line-height: 1.28; margin: 1.1em 0 0.45em; }
  .metadata { color: #94a3b8; font-size: 0.86em; margin-bottom: 1.2em; border-bottom: 1px solid rgba(0,217,255,0.2); padding-bottom: 0.7em; }
  img { max-width: 100%; width: auto !important; height: auto !important; object-fit: contain !important; border-radius: 8px; display: block; margin: 0.6em auto; }
  a { color: #00d9ff; }
  p { margin-bottom: 0.72em; line-height: 1.58; }
  ul, ol { margin: 0.5em 0 0.9em 1.1em; }
  li { margin: 0.18em 0; }
  blockquote { border-left: 3px solid #825ee4; padding-left: 12px; margin: 0.8em 0; color: #94a3b8; }
  code { background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 3px; color: #ff79c6; }
  pre { background: rgba(0,0,0,0.4); padding: 12px; border-radius: 6px; overflow-x: auto; }
  .article-elevator { position: fixed; right: 14px; bottom: 14px; display: flex; flex-direction: column; gap: 8px; z-index: 9999; }
  .article-elevator-btn { width: 36px; height: 36px; border: 1px solid rgba(0,217,255,0.35); border-radius: 10px; background: rgba(10,14,39,0.88); color: #00d9ff; cursor: pointer; font-size: 16px; line-height: 1; }
  .article-elevator-btn:hover { background: rgba(10,14,39,1); }
  [id*="overlay"], [class*="overlay"], [id*="modal"], [class*="modal"], [id*="popup"], [class*="popup"],
  [id*="paywall"], [class*="paywall"], [id*="subscribe"], [class*="subscribe"], [id*="cookie"], [class*="cookie"],
  [id*="consent"], [class*="consent"], [id*="gdpr"], [class*="gdpr"], [role="dialog"], [aria-modal="true"] {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }
</style>
</head>
<body>
  <h1>${sanitizeText(articleContent.title)}</h1>
  <div class="metadata">
    ${renderArticleMetadataLine({ sourceName, pubDate: article.pubDate, lang, originalUrl: articleUrl })}
  </div>
  <div class="content">
    ${finalMainContent}
  </div>
  <div class="article-elevator" aria-label="Navigation article">
    <button class="article-elevator-btn" type="button" onclick="scrollToTop()">▲</button>
    <button class="article-elevator-btn" type="button" onclick="scrollToBottom()">▼</button>
  </div>
  <script>
    function stripBlockingPanels() {
      const selector = '[id*="overlay"], [class*="overlay"], [id*="modal"], [class*="modal"], [id*="popup"], [class*="popup"], [id*="paywall"], [class*="paywall"], [id*="subscribe"], [class*="subscribe"], [id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"], [id*="gdpr"], [class*="gdpr"], [role="dialog"], [aria-modal="true"]';
      const textPattern = /\\b(cookie|consent|gdpr|subscribe|subscription|paywall|abonnez[-\\s]?vous|inscrivez[-\\s]?vous|continue reading|continuez la lecture)\\b/i;
      document.querySelectorAll(selector).forEach((node) => node.remove());
      document.querySelectorAll('div, section, aside').forEach((node) => {
        const styleAttr = String(node.getAttribute('style') || '').toLowerCase();
        const classAndId = String(node.className || '').toLowerCase() + ' ' + String(node.id || '').toLowerCase();
        const text = String(node.textContent || '').slice(0, 800);
        const hasKeyword = textPattern.test(classAndId) || textPattern.test(text);
        const looksFixed = /(position\\s*:\\s*(fixed|sticky)|inset\\s*:|top\\s*:|left\\s*:|right\\s*:|bottom\\s*:)/.test(styleAttr);
        const hasPriority = /(z-index\\s*:\\s*[1-9]\\d{1,}|backdrop-filter|overflow\\s*:\\s*hidden)/.test(styleAttr);
        if (hasKeyword && (looksFixed || hasPriority)) node.remove();
      });
    }
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    function scrollToBottom() {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'auto' });
    }
    window.addEventListener('message', (event) => {
      const data = event && event.data;
      if (!data || data.type !== 'AI_PULSE_SCROLL') return;
      if (data.direction === 'up' || data.direction === 'top') scrollToTop();
      if (data.direction === 'down' || data.direction === 'bottom') scrollToBottom();
    });
    stripBlockingPanels();
    setTimeout(stripBlockingPanels, 60);
    setTimeout(stripBlockingPanels, 220);
    setTimeout(stripBlockingPanels, 650);
  </script>
</body>
</html>`;

        // Sauvegarder le fichier HTML localement
        fs.writeFileSync(localPath, cleanHtml);
        }
      }
      }
  } catch (e) {
    if (!shouldSuppressExtractionLog(resolvedArticleUrl, e)) {
      console.error(`    Could not extract content for: ${articleUrl}`);
    }
    // Toujours générer une page locale de secours pour garder un comportement uniforme.
    writeFallbackLocalArticle();
  }

  // Sécurité: si aucune page n'existe encore (cas parse vide sans throw), générer un fallback.
  if (!fs.existsSync(localPath)) {
    writeFallbackLocalArticle();
  }

  // Vérifier si on a un fichier local
  const hasLocalContent = fs.existsSync(localPath);

  // Le reader doit toujours ouvrir la version locale rendue.
  const finalReaderLink = relativeLink;

  // Retourner l'objet article traité
  const normalizedTags = enrichArticleTags(tags, category, article.title || '', rawSummary || '');
  let safeSummary = smartTruncate(trimPromotionalTailText(cleanupNoiseText((computedSummary || '').trim())) || sanitizeText(article.title) || 'Summary unavailable.');
  if (hasSevereTruncationArtifact(safeSummary)) {
    const repaired = cleanupNoiseText(safeSummary)
      .replace(/\bl['’]article[\s\S]{0,260}?\best apparu en premier sur\b[\s\S]*$/i, '')
      .replace(/\bthis article[\s\S]{0,260}?\bappeared first on\b[\s\S]*$/i, '')
      .replace(/[█▓▒]{3,}/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim();
    safeSummary = smartTruncate(repaired || sanitizeText(article.title) || 'Summary unavailable.');
  }
  return {
    title: (sanitizeText(article.title) || 'Untitled').slice(0, 200),
    link: finalReaderLink,
    originalLink: articleUrl, // Always set to ensure RSS feeds have valid external URLs
    pubDate: new Date(article.pubDate || Date.now()),
    source: sourceName,
    tags: normalizedTags,
    category: category,
    lang: detectedLang || feedLang || 'en',
    summary: safeSummary,
    hasLocalContent: hasLocalContent,
    sourceProfile
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

  if (!Array.isArray(feeds) || feeds.length === 0) {
    console.error(`  Warning: No valid feeds configured for category "${categoryName}".`);
    return [];
  }

  const maxArticles = SETTINGS.maxArticlesPerCategory || 120;
  const limit = SETTINGS.articlesPerFeed || 120; // Nombre d'articles par source

  // Traitement en parallèle des sources pour accélérer l'agrégation globale.
  const results = await Promise.allSettled(
    feeds.map(async (feed) => {
      try {
        console.error(`  Fetch: ${feed.name}`);
        const feedData = await parser.parseURL(feed.url);
        const items = await Promise.all(
          feedData.items.slice(0, limit).map((item) =>
            processArticle(item, feed.name, feed.tags, categoryName, feed.lang)
          )
        );
        return items;
      } catch (error) {
        console.error(`  Error: Failed to fetch ${feed.name}: ${error.message}`);
        return [];
      }
    })
  );

  let articles = results
    .filter(r => r.status === 'fulfilled')
    .flatMap(r => r.value)
    .filter(Boolean);

  if (categoryName === 'openclaw') {
    const specialOnly = articles.filter((article) => matchesSpecialCategory(article, categoryName));
    // Keep strict OpenClaw matches when there are enough; otherwise keep broader feed results
    // so the category never collapses to 0-1 item because of narrow keyword hits.
    if (specialOnly.length >= Math.min(5, maxArticles)) {
      articles = specialOnly;
    }
  } else if (categoryName === 'raspberrypi') {
    const specialOnly = articles.filter((article) => matchesSpecialCategory(article, categoryName));
    if (specialOnly.length > 0) {
      articles = specialOnly;
    }
  }

  // Filtrage de pertinence (temperature) pour toutes les categories.
  const temperature = getCategoryTemperature(categoryName);
  const scoredArticles = articles.map((article) => ({
    ...article,
    _categoryScore: computeCategoryRelevance(article, categoryName)
  }));
  if (temperature > 0) {
    const filtered = scoredArticles.filter((article) => article._categoryScore >= temperature);
    if (filtered.length > 0) {
      articles = filtered;
    } else {
      articles = scoredArticles;
    }
  } else {
    articles = scoredArticles;
  }

  // Trier par priorité métier puis date.
  // Pour AI/Cybersécurité, OpenClaw doit remonter en haut de catégorie.
  const sorted = articles.sort((a, b) => {
    const scoreDiff = (b._categoryScore || 0) - (a._categoryScore || 0);
    if (scoreDiff !== 0) return scoreDiff;

    if (categoryName === 'ai' || categoryName === 'cybersecurity') {
      const aBoost = Array.isArray(a.tags) && a.tags.includes('OpenClaw') ? 1 : 0;
      const bBoost = Array.isArray(b.tags) && b.tags.includes('OpenClaw') ? 1 : 0;
      if (bBoost !== aBoost) return bBoost - aBoost;
    }
    return b.pubDate - a.pubDate;
  });

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
  const maxArticles = SETTINGS.maxArticlesPerCategory || 120;

  function ensureLocalArticleLink(article, category) {
    const current = String((article && article.link) || '').trim();
    if (current.startsWith('data/articles/')) return current;

    const seed = String((article && (article.originalLink || article.link || article.title)) || '');
    const hash = crypto.createHash('md5').update(seed).digest('hex');
    const localFileName = `${hash}.html`;
    const localPath = path.join(__dirname, '..', 'data', 'articles', localFileName);
    const relativeLink = `data/articles/${localFileName}`;

    if (!fs.existsSync(localPath)) {
      const lang = article && article.lang === 'fr' ? 'fr' : 'en';
      const safeTitle = sanitizeText((article && article.title) || 'Untitled');
      const safeSummary = smartTruncate(cleanupNoiseText((article && article.summary) || ''), 1200) || 'Summary unavailable.';
      const fallbackHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${safeTitle}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.55; color: #e2e8f0; max-width: 800px; margin: 26px auto; padding: 0 18px; background: #0a0e27; }
  h1 { color: #00d9ff; margin-bottom: 0.35em; line-height: 1.22; font-size: clamp(1.45rem, 2.1vw, 1.95rem); font-weight: 700; }
  .metadata { color: #94a3b8; font-size: 0.86em; margin-bottom: 1.2em; border-bottom: 1px solid rgba(0,217,255,0.2); padding-bottom: 0.7em; }
  p { margin-bottom: 0.72em; line-height: 1.58; }
  a { color: #00d9ff; }
</style>
</head>
<body>
  <h1>${safeTitle}</h1>
  <div class="metadata">${renderArticleMetadataLine({ sourceName: sanitizeText((article && article.source) || category || 'Unknown'), pubDate: article && article.pubDate, lang: (article && article.lang) || 'en', originalUrl: article && article.originalLink })}</div>
  <div class="content">
    <p>${safeSummary}</p>
  </div>
</body>
</html>`;
      fs.writeFileSync(localPath, fallbackHtml);
    }

    if (article) article.link = relativeLink;
    return relativeLink;
  }

  // Parcourir chaque catégorie
  for (const [category, articles] of Object.entries(categorizedArticles)) {
    const catConfig = CATEGORIES[category];
    const labelEn = catConfig ? catConfig.labels.en : category;
    const labelFr = catConfig ? catConfig.labels.fr : category;

    // Début de la section avec attributs pour le filtrage
    readme += `<section id="${category}" data-category="${category}">\n\n`;
    const headingLabel = labelEn === labelFr ? labelEn : `${labelEn} / ${labelFr}`;
    readme += `## ${headingLabel}\n\n`;

    // Si pas d'articles dans cette catégorie
    if (articles.length === 0) {
      readme += `*No articles available*\n\n`;
      readme += `</section>\n\n---\n\n`;
      continue;
    }

    // Générer la liste des articles
    articles.slice(0, maxArticles).forEach((article, index) => {
      const keyword = resolveDisplayKeyword(article.tags, article.lang, category);
      const langBadge = article.lang === 'fr' ? '`FR`' : '`EN`';
      const summaryText = (article.summary && String(article.summary).trim().length > 0)
        ? article.summary
        : smartTruncate(sanitizeText(article.title || 'Summary unavailable.'));
      const localLink = ensureLocalArticleLink(article, category);

      readme += `<div class="article-item" data-lang="${article.lang}" data-category="${category}" data-source="${article.source}">\n\n`;
      readme += `### ${index + 1}. ${langBadge} [${article.title}](${localLink})\n`;
      readme += `**Source:** ${article.source} | **Keyword:** \`${keyword}\`\n`;
      readme += `${summaryText}\n\n`;
      readme += `</div>\n\n`;
    });

    readme += `</section>\n\n---\n\n`;
  }

  readme += README_FOOTER;
  return readme;
}

function writeReadmeAtomically(readmeContent) {
  const readmePath = path.join(__dirname, '..', 'README.md');
  const tempPath = `${readmePath}.tmp`;
  fs.writeFileSync(tempPath, readmeContent, 'utf8');
  fs.renameSync(tempPath, readmePath);
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

  // Générer les items RSS sans limite artificielle côté serveur.
  // La limite éventuelle doit être gérée par le lecteur client.
  let items = articles.map(article => `    <item>
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

// ─── Email Digest ───────────────────────────────────────────

// Validate email address format
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Sleep helper for rate limiting
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendEmailDigests(categorizedArticles) {
  // Vérifier que la clé API existe
  const apiKey = process.env.API_RESEND;
  if (!apiKey) {
    console.error('No API_RESEND key found, skipping email digests');
    return;
  }

  // Validate API key format (should start with re_ for Resend)
  if (!apiKey.startsWith('re_')) {
    console.error('WARNING: API_RESEND key does not appear to be a valid Resend API key');
  }

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

  // Get sender email from environment or use default
  const senderEmail = process.env.EMAIL_FROM || DEFAULT_SENDER_EMAIL;
  if (senderEmail === DEFAULT_SENDER_EMAIL) {
    console.error('WARNING: Using default Resend development domain for sender email.');
    console.error('For production, set EMAIL_FROM environment variable with a verified custom domain.');
  }

  console.error(`Sending email digests to ${subscribers.length} subscriber(s)...`);
  let sentCount = 0;
  let failedCount = 0;

  for (let i = 0; i < subscribers.length; i++) {
    const subscriber = subscribers[i];
    try {
      // Validate email address
      if (!isValidEmail(subscriber.email)) {
        console.error(`  Skipping invalid email address: ${subscriber.email}`);
        failedCount++;
        continue;
      }

      // Filter articles based on subscriber preferences
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
        from: senderEmail,
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
      sentCount++;

      // Rate limiting: wait 100ms between emails to respect API limits
      // Resend free tier allows 100 emails/day, with burst protection
      if (i < subscribers.length - 1) {
        await sleep(100);
      }
    } catch (error) {
      failedCount++;
      // Sanitize error message to avoid exposing sensitive information
      const errorMsg = error.response?.data?.message || error.message || 'Unknown error';
      console.error(`  Failed to send email to ${subscriber.email}: ${errorMsg}`);
    }
  }

  console.error(`\nEmail digest summary: ${sentCount} sent, ${failedCount} failed`);
}

function writeArticleMap(categorizedArticles) {
  try {
    const allArticles = Object.values(categorizedArticles).flat();
    const map = {};
    for (const article of allArticles) {
      if (!article || !article.originalLink || !article.link) continue;
      if (!String(article.link).startsWith('data/articles/')) continue;
      map[String(article.originalLink)] = String(article.link);
    }
    const mapPath = path.join(__dirname, '..', 'data', 'article-map.json');
    fs.writeFileSync(mapPath, JSON.stringify(map, null, 2));
  } catch (error) {
    console.error(`Article map generation failed: ${error.message}`);
  }
}

/**
 * Renforce une catégorie spéciale avec des articles repérés dans les autres catégories.
 * Empêche un rendu vide quand les flux dédiés sont trop limités.
 *
 * @param {Object<string, Object[]>} categorizedArticles
 * @param {string} categoryName
 * @param {number} minTarget
 */
function backfillSpecialCategory(categorizedArticles, categoryName, minTarget = 8) {
  const maxArticles = SETTINGS.maxArticlesPerCategory || 120;
  const current = Array.isArray(categorizedArticles[categoryName]) ? categorizedArticles[categoryName] : [];
  if (current.length >= minTarget) return;

  const seen = new Set(
    current.map((a) => String(a?.originalLink || a?.link || a?.title || '').trim()).filter(Boolean)
  );
  const pool = [];

  for (const [name, articles] of Object.entries(categorizedArticles)) {
    if (name === categoryName || !Array.isArray(articles)) continue;
    for (const article of articles) {
      if (!article || !matchesSpecialCategory(article, categoryName)) continue;
      const key = String(article.originalLink || article.link || article.title || '').trim();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      pool.push({
        ...article,
        category: categoryName,
        tags: Array.isArray(article.tags) && article.tags.includes('OpenClaw')
          ? article.tags
          : ['OpenClaw', ...(Array.isArray(article.tags) ? article.tags : [])]
      });
    }
  }

  if (pool.length === 0) return;

  pool.sort((a, b) => {
    const scoreDiff = computeCategoryRelevance(b, categoryName) - computeCategoryRelevance(a, categoryName);
    if (scoreDiff !== 0) return scoreDiff;
    return new Date(b.pubDate || 0) - new Date(a.pubDate || 0);
  });

  categorizedArticles[categoryName] = deduplicateArticles([...current, ...pool]).slice(0, maxArticles);
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
    try {
      categorizedArticles[categoryName] = await aggregateCategory(categoryName, catConfig.feeds);
    } catch (error) {
      console.error(`  Error: Category "${categoryName}" failed: ${error.message}`);
      categorizedArticles[categoryName] = [];
    }
  }

  // Garde-fou OpenClaw: compléter la catégorie avec les bons signaux croisés.
  backfillSpecialCategory(categorizedArticles, 'openclaw', 8);

  // Générer le README localement (écriture atomique pour éviter les fichiers vides).
  const readme = generateREADME(categorizedArticles);
  writeReadmeAtomically(readme);
  console.error('README.md updated');

  // Générer la table de correspondance URL source -> article local rendu.
  writeArticleMap(categorizedArticles);

  // Générer les flux RSS sans bloquer la publication du README en cas d'erreur.
  try {
    writeRSSFeeds(categorizedArticles);
  } catch (error) {
    console.error(`RSS generation failed: ${error.message}`);
  }

  // Envoyer les emails sans interrompre le pipeline.
  try {
    await sendEmailDigests(categorizedArticles);
  } catch (error) {
    console.error(`Email digest step failed: ${error.message}`);
  }

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

if (require.main === module) {
  // Lancer le script
  main().catch(console.error);
}

module.exports = {
  stripEmojiCharacters,
  isPromotionalContent,
  trimPromotionalTailText,
  cleanupNoiseText,
  trimPromotionalTailHtml,
  cleanupNoiseHtml,
  parseGitHubRepoPath,
  buildGitHubIndexCandidates,
  matchesSpecialCategory,
  backfillSpecialCategory,
  computeCategoryRelevance,
  getCategoryTemperature,
  resolveDisplayKeyword,
  writeArticleMap
};
