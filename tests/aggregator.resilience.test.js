/**
 * Tests de résilience pour l'agrégateur
 *
 * Ces tests vérifient que:
 * 1. Les articles sont bien récupérés depuis les feeds
 * 2. Le système est résilient aux erreurs (un feed qui échoue ne bloque pas les autres)
 * 3. Le workflow ne s'arrête pas de façon inattendue
 *
 * Approche TDD: on écrit les tests d'abord pour définir le comportement attendu
 */

const { test, describe, mock, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// =============================================================================
// TESTS: Configuration doit permettre la récupération d'articles
// =============================================================================

describe('Configuration Feeds Availability', () => {
  let config;

  beforeEach(() => {
    const configPath = path.join(__dirname, '..', 'config.json');
    config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  });

  test('config.json doit avoir au moins une catégorie avec des feeds', () => {
    const categories = Object.keys(config.categories);
    assert.ok(categories.length > 0, 'Doit avoir au moins une catégorie');

    let totalFeeds = 0;
    for (const cat of categories) {
      totalFeeds += config.categories[cat].feeds?.length || 0;
    }
    assert.ok(totalFeeds > 0, 'Doit avoir au moins un feed configuré');
  });

  test('chaque feed doit avoir une URL valide', () => {
    for (const [catName, catData] of Object.entries(config.categories)) {
      for (const feed of catData.feeds || []) {
        assert.ok(feed.url, `Feed ${feed.name} dans ${catName} doit avoir une URL`);
        assert.ok(
          feed.url.startsWith('http://') || feed.url.startsWith('https://'),
          `URL de ${feed.name} doit commencer par http(s)://`
        );
      }
    }
  });

  test('les catégories principales doivent avoir plusieurs feeds (redondance)', () => {
    const mainCategories = ['ai', 'cybersecurity'];
    const minFeedsPerCategory = 3;

    for (const cat of mainCategories) {
      if (config.categories[cat]) {
        const feedCount = config.categories[cat].feeds?.length || 0;
        assert.ok(
          feedCount >= minFeedsPerCategory,
          `Catégorie ${cat} doit avoir au moins ${minFeedsPerCategory} feeds pour la redondance (actuellement: ${feedCount})`
        );
      }
    }
  });
});

// =============================================================================
// TESTS: Résilience de l'agrégateur aux erreurs
// =============================================================================

describe('Aggregator Error Resilience', () => {
  const aggregator = require('../src/aggregator');

  test('computeCategoryRelevance ne crash pas avec un article malformé', () => {
    const malformedArticles = [
      null,
      undefined,
      {},
      { title: null },
      { title: '', summary: null, tags: null },
      { title: 123, summary: 456 },
    ];

    for (const article of malformedArticles) {
      assert.doesNotThrow(() => {
        aggregator.computeCategoryRelevance(article, 'ai');
      }, `Ne doit pas crash avec: ${JSON.stringify(article)}`);
    }
  });

  test('matchesSpecialCategory ne crash pas avec des inputs invalides', () => {
    const invalidInputs = [
      [null, 'ai'],
      [undefined, 'raspberrypi'],
      [{}, null],
      [{ title: '' }, undefined],
    ];

    for (const [article, category] of invalidInputs) {
      assert.doesNotThrow(() => {
        aggregator.matchesSpecialCategory(article, category);
      }, `Ne doit pas crash avec article=${JSON.stringify(article)}, category=${category}`);
    }
  });

  test('cleanupNoiseText gère les entrées invalides', () => {
    const invalidInputs = [null, undefined, '', 123, {}, []];

    for (const input of invalidInputs) {
      assert.doesNotThrow(() => {
        const result = aggregator.cleanupNoiseText(input);
        assert.ok(typeof result === 'string', 'Doit retourner une string');
      }, `Ne doit pas crash avec: ${JSON.stringify(input)}`);
    }
  });

  test('stripEmojiCharacters gère les entrées invalides', () => {
    const invalidInputs = [null, undefined, '', 123, {}, []];

    for (const input of invalidInputs) {
      assert.doesNotThrow(() => {
        const result = aggregator.stripEmojiCharacters(input);
        assert.ok(typeof result === 'string', 'Doit retourner une string');
      }, `Ne doit pas crash avec: ${JSON.stringify(input)}`);
    }
  });

  test('resolveDisplayKeyword gère les entrées invalides', () => {
    const invalidCases = [
      [null, 'en', 'ai'],
      [undefined, 'en', 'ai'],
      [[], null, 'ai'],
      [[], 'en', null],
      [[], '', ''],
    ];

    for (const [tags, lang, category] of invalidCases) {
      assert.doesNotThrow(() => {
        const result = aggregator.resolveDisplayKeyword(tags, lang, category);
        assert.ok(typeof result === 'string', 'Doit retourner une string');
      }, `Ne doit pas crash avec: tags=${JSON.stringify(tags)}, lang=${lang}, category=${category}`);
    }
  });
});

// =============================================================================
// TESTS: Backfill ne doit pas arrêter le workflow
// =============================================================================

describe('Backfill Resilience', () => {
  const { backfillSpecialCategory } = require('../src/aggregator');

  test('backfillSpecialCategory gère un objet categorizedArticles vide', () => {
    const empty = {};
    assert.doesNotThrow(() => {
      backfillSpecialCategory(empty, 'raspberrypi', 5);
    });
  });

  test('backfillSpecialCategory gère une catégorie inexistante', () => {
    const articles = { ai: [{ title: 'Test', summary: 'Test' }] };
    assert.doesNotThrow(() => {
      backfillSpecialCategory(articles, 'nonexistent_category', 5);
    });
  });

  test('backfillSpecialCategory gère maxArticles = 0', () => {
    const articles = { ai: [{ title: 'Test', summary: 'Test' }] };
    assert.doesNotThrow(() => {
      backfillSpecialCategory(articles, 'ai', 0);
    });
  });

  test('backfillSpecialCategory gère maxArticles négatif', () => {
    const articles = { ai: [{ title: 'Test', summary: 'Test' }] };
    assert.doesNotThrow(() => {
      backfillSpecialCategory(articles, 'ai', -5);
    });
  });
});

// =============================================================================
// TESTS: GitHub URL parsing ne doit pas arrêter le workflow
// =============================================================================

describe('GitHub URL Parsing Resilience', () => {
  const { parseGitHubRepoPath, buildGitHubIndexCandidates } = require('../src/aggregator');

  test('parseGitHubRepoPath gère les URLs invalides sans crash', () => {
    const invalidUrls = [
      null,
      undefined,
      '',
      'not a url',
      'ftp://github.com/owner/repo',
      'https://notgithub.com/owner/repo',
      'https://github.com',
      'https://github.com/',
    ];

    for (const url of invalidUrls) {
      assert.doesNotThrow(() => {
        const result = parseGitHubRepoPath(url);
        assert.ok(result === null || typeof result === 'object');
      }, `Ne doit pas crash avec: ${url}`);
    }
  });

  test('buildGitHubIndexCandidates gère les URLs invalides sans crash', () => {
    const invalidUrls = [null, undefined, '', 'not a url'];

    for (const url of invalidUrls) {
      assert.doesNotThrow(() => {
        const result = buildGitHubIndexCandidates(url);
        assert.ok(Array.isArray(result), 'Doit retourner un tableau');
      }, `Ne doit pas crash avec: ${url}`);
    }
  });
});

// =============================================================================
// TESTS: writeArticleMap ne doit pas bloquer le workflow
// =============================================================================

describe('writeArticleMap Resilience', () => {
  const { writeArticleMap } = require('../src/aggregator');

  test('writeArticleMap gère un objet vide', () => {
    assert.doesNotThrow(() => {
      writeArticleMap({});
    });
  });

  test('writeArticleMap gère des articles malformés', () => {
    const malformed = {
      ai: [
        null,
        undefined,
        {},
        { title: 'Test' }, // missing link
        { link: 'https://example.com' }, // missing title
      ],
    };

    assert.doesNotThrow(() => {
      writeArticleMap(malformed);
    });
  });
});

// =============================================================================
// TESTS: Vérification que process.exit n'est pas appelé de façon inattendue
// =============================================================================

describe('No Unexpected Process Exit', () => {
  test('aggregator module charge sans appeler process.exit', () => {
    // Si le module appelle process.exit(1), ce test échouera car le processus s'arrêtera
    let loaded = false;
    assert.doesNotThrow(() => {
      require('../src/aggregator');
      loaded = true;
    });
    assert.ok(loaded, 'Le module doit se charger complètement');
  });
});

// =============================================================================
// TESTS: Intégration - Vérification qu'on peut récupérer des articles
// =============================================================================

describe('Feed Fetching Integration', () => {
  // Skip si on est en CI sans réseau, si SKIP_NETWORK_TESTS est défini, ou si pas de DNS
  const skipNetworkTests = process.env.SKIP_NETWORK_TESTS === 'true' || process.env.CI === 'true';

  test('au moins un feed RSS doit pouvoir être parsé', { skip: skipNetworkTests, timeout: 30000 }, async () => {
    const Parser = require('rss-parser');
    const parser = new Parser({
      timeout: 10000,
      headers: {
        'User-Agent': 'AI-Pulse/1.0 (+https://github.com/ThePhoenixAgency/AI-Pulse)',
      },
    });

    const configPath = path.join(__dirname, '..', 'config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    // Collecter tous les feeds de toutes les catégories
    const allFeeds = [];
    for (const catData of Object.values(config.categories)) {
      if (catData.feeds) {
        allFeeds.push(...catData.feeds);
      }
    }

    assert.ok(allFeeds.length > 0, 'Doit avoir au moins un feed à tester');

    // Essayer de parser au moins un feed avec succès
    let successCount = 0;
    let totalArticles = 0;
    const errors = [];

    // Tester un échantillon de feeds (max 5 pour ne pas être trop lent)
    const feedsToTest = allFeeds.slice(0, 5);

    for (const feed of feedsToTest) {
      try {
        const result = await parser.parseURL(feed.url);
        if (result.items && result.items.length > 0) {
          successCount++;
          totalArticles += result.items.length;
        }
      } catch (error) {
        errors.push(`${feed.name}: ${error.message}`);
      }
    }

    // Au moins un feed doit réussir
    assert.ok(
      successCount > 0,
      `Au moins un feed doit être accessible. Erreurs: ${errors.join(', ')}`
    );

    // On doit avoir récupéré des articles
    assert.ok(
      totalArticles > 0,
      `On doit avoir récupéré au moins un article. Total: ${totalArticles}`
    );

    console.error(`  [Integration] ${successCount}/${feedsToTest.length} feeds OK, ${totalArticles} articles récupérés`);
  });

  test('erreur sur un feed ne doit pas empêcher les autres de fonctionner', { skip: skipNetworkTests, timeout: 30000 }, async () => {
    const Parser = require('rss-parser');
    const parser = new Parser({ timeout: 5000 });

    // Mix de feeds valides et invalides
    const testFeeds = [
      { name: 'Invalid Feed', url: 'https://this-url-does-not-exist-12345.com/feed.xml' },
      { name: 'Hugging Face Blog', url: 'https://huggingface.co/blog/feed.xml' },
    ];

    const results = await Promise.allSettled(
      testFeeds.map(async (feed) => {
        try {
          const data = await parser.parseURL(feed.url);
          return { name: feed.name, success: true, count: data.items?.length || 0 };
        } catch (error) {
          return { name: feed.name, success: false, error: error.message };
        }
      })
    );

    // Vérifier qu'on a bien les résultats pour tous les feeds
    assert.equal(results.length, testFeeds.length, 'Doit avoir un résultat pour chaque feed');

    // Vérifier que les résultats fulfilled contiennent les données attendues
    const fulfilledResults = results.filter((r) => r.status === 'fulfilled').map((r) => r.value);
    assert.ok(fulfilledResults.length > 0, 'Au moins un résultat doit être fulfilled');

    // Le feed invalide doit avoir success=false mais ne pas avoir crashé
    const invalidResult = fulfilledResults.find((r) => r.name === 'Invalid Feed');
    if (invalidResult) {
      assert.equal(invalidResult.success, false, 'Le feed invalide doit avoir échoué');
    }

    // Le feed valide devrait avoir réussi (si le réseau fonctionne)
    const validResult = fulfilledResults.find((r) => r.name === 'Hugging Face Blog');
    if (validResult && validResult.success) {
      assert.ok(validResult.count > 0, 'Le feed valide devrait avoir des articles');
    }
  });
});
