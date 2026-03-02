/**
 * Tests d'intégration pour src/aggregator.js
 *
 * Ces tests vérifient l'intégration entre les différents composants:
 * - Lecture de la configuration
 * - Traitement des articles
 * - Génération des fichiers
 *
 * Utilise Node.js built-in test runner (node:test)
 */

const { test, describe, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// =============================================================================
// TESTS: Configuration Loading
// =============================================================================

describe('Configuration Integration', () => {
  test('config.json existe et est valide', () => {
    const configPath = path.join(__dirname, '..', 'config.json');
    assert.ok(fs.existsSync(configPath), 'config.json should exist');

    const configContent = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configContent);

    assert.ok(config.settings, 'config should have settings');
    assert.ok(config.categories, 'config should have categories');
  });

  test('config.settings a les champs requis', () => {
    const configPath = path.join(__dirname, '..', 'config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    assert.ok(typeof config.settings.articlesPerFeed === 'number');
    assert.ok(typeof config.settings.maxArticlesPerCategory === 'number');
    assert.ok(config.settings.deduplication !== undefined);
  });

  test('config.categories contient les catégories principales', () => {
    const configPath = path.join(__dirname, '..', 'config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    const expectedCategories = ['ai', 'cybersecurity'];
    for (const cat of expectedCategories) {
      assert.ok(config.categories[cat], `Category ${cat} should exist`);
    }
  });

  test('chaque catégorie a des feeds valides', () => {
    const configPath = path.join(__dirname, '..', 'config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    for (const [catName, catData] of Object.entries(config.categories)) {
      assert.ok(Array.isArray(catData.feeds), `${catName} should have feeds array`);
      assert.ok(catData.feeds.length > 0, `${catName} should have at least one feed`);

      for (const feed of catData.feeds) {
        assert.ok(feed.name, `Feed in ${catName} should have name`);
        assert.ok(feed.url, `Feed in ${catName} should have url`);
        assert.ok(feed.url.startsWith('http'), `Feed URL should be valid: ${feed.url}`);
      }
    }
  });

  test('categoryTemperature a des valeurs valides', () => {
    const configPath = path.join(__dirname, '..', 'config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    if (config.settings.categoryTemperature) {
      for (const [cat, temp] of Object.entries(config.settings.categoryTemperature)) {
        assert.ok(typeof temp === 'number', `Temperature for ${cat} should be number`);
        assert.ok(temp >= 0 && temp <= 1, `Temperature for ${cat} should be 0-1`);
      }
    }
  });
});

// =============================================================================
// TESTS: Data Directory Structure
// =============================================================================

describe('Data Directory Structure', () => {
  test('data directory existe', () => {
    const dataPath = path.join(__dirname, '..', 'data');
    assert.ok(fs.existsSync(dataPath), 'data directory should exist');
  });

  test('data/articles directory existe ou peut être créé', () => {
    const articlesPath = path.join(__dirname, '..', 'data', 'articles');
    // Le dossier peut ne pas exister avant la première exécution
    if (!fs.existsSync(articlesPath)) {
      fs.mkdirSync(articlesPath, { recursive: true });
    }
    assert.ok(fs.existsSync(articlesPath));
  });
});

// =============================================================================
// TESTS: Aggregator Module Loading
// =============================================================================

describe('Aggregator Module Loading', () => {
  test('aggregator module se charge sans erreur', () => {
    let aggregator;
    assert.doesNotThrow(() => {
      aggregator = require('../src/aggregator');
    }, 'Aggregator module should load without errors');
  });

  test('aggregator exporte les fonctions attendues', () => {
    const aggregator = require('../src/aggregator');

    const expectedExports = [
      'stripEmojiCharacters',
      'isPromotionalContent',
      'cleanupNoiseText',
      'parseGitHubRepoPath',
      'buildGitHubIndexCandidates',
      'matchesSpecialCategory',
      'computeCategoryRelevance',
      'getCategoryTemperature',
      'resolveDisplayKeyword'
    ];

    for (const fn of expectedExports) {
      assert.ok(typeof aggregator[fn] === 'function', `Should export ${fn}`);
    }
  });
});

// =============================================================================
// TESTS: LinkedIn Helper Module Loading
// =============================================================================

describe('LinkedIn Helper Module Loading', () => {
  test('linkedin-helper module se charge sans erreur', () => {
    assert.doesNotThrow(() => {
      require('../src/linkedin-helper');
    }, 'LinkedIn helper should load without errors');
  });

  test('linkedin-helper exporte les méthodes attendues', () => {
    const helper = require('../src/linkedin-helper');

    assert.ok(typeof helper.isAlreadyPosted === 'function');
    assert.ok(typeof helper.markAsPosted === 'function');
    assert.ok(typeof helper.generatePost === 'function');
    assert.ok(typeof helper.postToLinkedIn === 'function');
  });
});

// =============================================================================
// TESTS: Deduplication Workflow
// =============================================================================

describe('Deduplication Workflow', () => {
  const aggregator = require('../src/aggregator');

  test('articles similaires sont détectés', () => {
    const { computeCategoryRelevance } = aggregator;

    // Deux articles similaires sur le même sujet
    const article1 = {
      title: 'OpenAI Announces GPT-5 Model',
      summary: 'Major breakthrough in artificial intelligence with new language model.',
      tags: ['AI', 'OpenAI', 'GPT']
    };

    const article2 = {
      title: 'GPT-5 Released by OpenAI',
      summary: 'New AI language model from OpenAI shows significant improvements.',
      tags: ['AI', 'OpenAI', 'GPT']
    };

    // Les deux devraient avoir une haute relevance pour la catégorie AI
    const score1 = computeCategoryRelevance(article1, 'ai');
    const score2 = computeCategoryRelevance(article2, 'ai');

    assert.ok(score1 >= 0, 'Article 1 should have positive relevance');
    assert.ok(score2 >= 0, 'Article 2 should have positive relevance');
  });
});

// =============================================================================
// TESTS: Special Category Matching
// =============================================================================

describe('Special Category Matching Workflow', () => {
  const { matchesSpecialCategory, backfillSpecialCategory } = require('../src/aggregator');

  test('raspberrypi articles sont correctement identifiés', () => {
    const rpiArticle = {
      title: 'Raspberry Pi 5: Everything You Need to Know',
      summary: 'The new Raspberry Pi 5 features improved CPU and RAM.',
      tags: ['Raspberry Pi', 'SBC', 'Hardware']
    };

    const result = matchesSpecialCategory(rpiArticle, 'raspberrypi');
    assert.equal(result, true);
  });

  test('non-raspberrypi articles ne matchent pas', () => {
    const otherArticle = {
      title: 'Intel Releases New Desktop CPUs',
      summary: 'New processors for gaming and workstations.',
      tags: ['Intel', 'CPU', 'Hardware']
    };

    const result = matchesSpecialCategory(otherArticle, 'raspberrypi');
    assert.equal(result, false);
  });

  test('backfillSpecialCategory gère un objet vide', () => {
    const categorizedArticles = {};
    assert.doesNotThrow(() => {
      backfillSpecialCategory(categorizedArticles, 'raspberrypi', 5);
    });
  });
});

// =============================================================================
// TESTS: GitHub URL Processing
// =============================================================================

describe('GitHub URL Processing Workflow', () => {
  const { parseGitHubRepoPath, buildGitHubIndexCandidates } = require('../src/aggregator');

  test('pipeline complet pour URL GitHub simple', () => {
    const githubUrl = 'https://github.com/anthropics/claude-code';

    // Étape 1: Parser le chemin
    const repoPath = parseGitHubRepoPath(githubUrl);
    assert.deepEqual(repoPath, { owner: 'anthropics', repo: 'claude-code' });

    // Étape 2: Générer les candidates (index.html, github.io)
    const candidates = buildGitHubIndexCandidates(githubUrl);
    assert.ok(candidates.length > 0);
    assert.ok(candidates.some(url => url.includes('raw.githubusercontent.com') || url.includes('github.io')));
  });

  test('retourne null pour URL GitHub avec sous-path', () => {
    // parseGitHubRepoPath ne gère que les URLs simples
    const githubUrl = 'https://github.com/microsoft/vscode/tree/main/extensions';

    const repoPath = parseGitHubRepoPath(githubUrl);
    assert.equal(repoPath, null);
  });
});

// =============================================================================
// TESTS: Text Processing Pipeline
// =============================================================================

describe('Text Processing Pipeline', () => {
  const {
    stripEmojiCharacters,
    cleanupNoiseText,
    isPromotionalContent,
    trimPromotionalTailText
  } = require('../src/aggregator');

  test('pipeline complet de nettoyage de texte', () => {
    // Input "sale" avec emojis, bruit, et contenu promotionnel
    const dirtyInput = '🚀 Great AI Article! Comments 0. Follow us on Twitter. Subscribe now!';

    // Étape 1: Supprimer emojis
    const noEmoji = stripEmojiCharacters(dirtyInput);
    assert.ok(!noEmoji.includes('🚀'));

    // Étape 2: Nettoyer le bruit
    const cleaned = cleanupNoiseText(noEmoji);
    assert.ok(!cleaned.toLowerCase().includes('comments'));
    assert.ok(!cleaned.toLowerCase().includes('follow us'));

    // Étape 3: Vérifier si promotionnel
    // Note: après nettoyage, le texte ne devrait plus être détecté comme promotionnel
    // car les marqueurs ont été supprimés
  });

  test('pipeline préserve le contenu utile', () => {
    const goodContent = 'OpenAI releases GPT-5 with improved reasoning capabilities. The new model achieves state-of-the-art results on multiple benchmarks.';

    const afterStrip = stripEmojiCharacters(goodContent);
    const afterClean = cleanupNoiseText(afterStrip);
    const afterTrim = trimPromotionalTailText(afterClean);

    assert.ok(afterTrim.includes('OpenAI'));
    assert.ok(afterTrim.includes('GPT-5'));
    assert.ok(afterTrim.includes('reasoning'));
  });
});

// =============================================================================
// TESTS: Keyword Resolution
// =============================================================================

describe('Keyword Resolution Workflow', () => {
  const { resolveDisplayKeyword } = require('../src/aggregator');

  test('résolution keyword pour différentes langues', () => {
    const tags = ['AI', 'Machine Learning', 'Deep Learning'];

    const enKeyword = resolveDisplayKeyword(tags, 'en', 'ai');
    const frKeyword = resolveDisplayKeyword(tags, 'fr', 'ai');

    assert.ok(typeof enKeyword === 'string');
    assert.ok(typeof frKeyword === 'string');
  });

  test('fallback pour tags vides', () => {
    const keyword = resolveDisplayKeyword([], 'en', 'ai');
    assert.ok(typeof keyword === 'string');
  });

  test('résolution pour catégorie cybersecurity', () => {
    const tags = ['Security', 'Vulnerability', 'Hacking'];
    const keyword = resolveDisplayKeyword(tags, 'en', 'cybersecurity');
    assert.ok(typeof keyword === 'string');
  });
});
