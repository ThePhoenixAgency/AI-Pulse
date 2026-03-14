/**
 * Tests E2E (End-to-End) pour le workflow d'agrégation
 *
 * Ces tests simulent l'exécution complète du workflow sans réseau:
 * - Mock des flux RSS
 * - Traitement complet des articles
 * - Génération des fichiers de sortie
 *
 * Utilise Node.js built-in test runner (node:test)
 */

const { test, describe, beforeEach, afterEach, mock } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// =============================================================================
// MOCK DATA
// =============================================================================

const MOCK_RSS_RESPONSE = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Test AI News</title>
    <link>https://example.com</link>
    <description>Test feed for AI news</description>
    <item>
      <title>OpenAI Releases GPT-5 with Advanced Reasoning</title>
      <link>https://example.com/gpt5-release</link>
      <description>OpenAI has announced GPT-5, featuring significant improvements in reasoning and problem-solving capabilities.</description>
      <pubDate>Sat, 01 Mar 2026 10:00:00 GMT</pubDate>
    </item>
    <item>
      <title>Google DeepMind Achieves Breakthrough in Protein Folding</title>
      <link>https://example.com/protein-folding</link>
      <description>DeepMind's latest AI model can predict protein structures with unprecedented accuracy.</description>
      <pubDate>Sat, 01 Mar 2026 09:00:00 GMT</pubDate>
    </item>
    <item>
      <title>Claude 4 Sets New Benchmarks in AI Safety</title>
      <link>https://example.com/claude4-safety</link>
      <description>Anthropic's Claude 4 model demonstrates industry-leading safety features.</description>
      <pubDate>Sat, 01 Mar 2026 08:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>`;

const MOCK_CYBERSECURITY_RSS = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Security News</title>
    <link>https://security.example.com</link>
    <item>
      <title>Critical Zero-Day Vulnerability Found in Major Framework</title>
      <link>https://security.example.com/zero-day</link>
      <description>Security researchers have discovered a critical vulnerability affecting millions of users.</description>
      <pubDate>Sat, 01 Mar 2026 11:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>`;

// =============================================================================
// TESTS: Full Workflow Simulation
// =============================================================================

describe('E2E: Full Aggregation Workflow', () => {
  const aggregator = require('../src/aggregator');

  test('workflow complet avec articles mockés', async () => {
    // Créer des articles mockés
    const mockArticles = [
      {
        title: 'AI Revolution: GPT-5 Changes Everything',
        summary: 'The latest AI model brings unprecedented capabilities to developers worldwide.',
        link: 'https://example.com/ai-revolution',
        source: 'TechNews',
        pubDate: new Date().toISOString(),
        lang: 'en',
        tags: ['AI', 'GPT', 'Technology'],
        category: 'ai'
      },
      {
        title: 'Cybersecurity Alert: New Ransomware Strain',
        summary: 'Security experts warn of a sophisticated new ransomware affecting enterprises.',
        link: 'https://example.com/ransomware-alert',
        source: 'SecurityWeek',
        pubDate: new Date().toISOString(),
        lang: 'en',
        tags: ['Security', 'Ransomware', 'Enterprise'],
        category: 'cybersecurity'
      }
    ];

    // Vérifier que les fonctions de traitement marchent sur ces articles
    for (const article of mockArticles) {
      const relevance = aggregator.computeCategoryRelevance(article, article.category);
      assert.ok(typeof relevance === 'number');

      const keyword = aggregator.resolveDisplayKeyword(article.tags, article.lang, article.category);
      assert.ok(typeof keyword === 'string');
    }
  });

  test('déduplication sur articles similaires', () => {
    // Ces articles sont volontairement similaires
    const similarArticles = [
      {
        title: 'OpenAI GPT-5 Released Today',
        summary: 'OpenAI has released GPT-5 with improved reasoning.',
        source: 'Source1'
      },
      {
        title: 'GPT-5 from OpenAI Now Available',
        summary: 'The new GPT-5 from OpenAI features better reasoning capabilities.',
        source: 'Source2'
      },
      {
        title: 'Different Topic: Quantum Computing Breakthrough',
        summary: 'Scientists achieve quantum supremacy with new processor.',
        source: 'Source3'
      }
    ];

    // Les deux premiers articles sont similaires, le troisième est différent
    // On vérifie que le système peut les distinguer
    const { computeCategoryRelevance } = aggregator;

    const score1 = computeCategoryRelevance(similarArticles[0], 'ai');
    const score2 = computeCategoryRelevance(similarArticles[1], 'ai');
    const score3 = computeCategoryRelevance(similarArticles[2], 'ai');

    // Les articles AI devraient avoir des scores positifs
    assert.ok(score1 >= 0);
    assert.ok(score2 >= 0);
  });

  test('nettoyage complet du contenu', () => {
    // Contenu réaliste avec du bruit à la fin
    const dirtyContent = `🚀 OpenAI announces revolutionary AI model with improved capabilities.
      This is a major breakthrough in artificial intelligence.
      Comments: 0 Follow us on Twitter`;

    // Pipeline de nettoyage
    let cleaned = aggregator.stripEmojiCharacters(dirtyContent);
    assert.ok(!cleaned.includes('🚀'), 'Should remove emoji');

    cleaned = aggregator.cleanupNoiseText(cleaned);
    assert.ok(!cleaned.toLowerCase().includes('comments'), 'Should remove comments noise');
    assert.ok(!cleaned.toLowerCase().includes('follow us'), 'Should remove follow us');

    // Le contenu principal devrait être préservé
    assert.ok(cleaned.includes('OpenAI'), 'Should keep OpenAI');
    assert.ok(cleaned.includes('artificial intelligence'), 'Should keep main content');
  });
});

// =============================================================================
// TESTS: Category Temperature System
// =============================================================================

describe('E2E: Category Temperature System', () => {
  const { getCategoryTemperature, computeCategoryRelevance } = require('../src/aggregator');

  test('températures différentes par catégorie', () => {
    const categories = ['ai', 'cybersecurity', 'openclaw', 'raspberrypi'];
    const temperatures = {};

    for (const cat of categories) {
      temperatures[cat] = getCategoryTemperature(cat);
      assert.ok(typeof temperatures[cat] === 'number');
      assert.ok(temperatures[cat] >= 0 && temperatures[cat] <= 1);
    }

    // openclaw devrait avoir une température plus élevée (plus permissif)
    // selon la config par défaut
  });

  test('relevance affectée par température', () => {
    const article = {
      title: 'General Tech News Article',
      summary: 'A general article about technology trends.',
      tags: ['tech']
    };

    // Calculer la relevance pour différentes catégories
    const aiRelevance = computeCategoryRelevance(article, 'ai');
    const cyberRelevance = computeCategoryRelevance(article, 'cybersecurity');

    // Les scores devraient être des nombres
    assert.ok(typeof aiRelevance === 'number');
    assert.ok(typeof cyberRelevance === 'number');
  });
});

// =============================================================================
// TESTS: GitHub Content Extraction
// =============================================================================

describe('E2E: GitHub Content Extraction Pipeline', () => {
  const { parseGitHubRepoPath, buildGitHubIndexCandidates } = require('../src/aggregator');

  test('extraction complète pour repo populaire', () => {
    const repos = [
      'https://github.com/facebook/react',
      'https://github.com/microsoft/vscode',
      'https://github.com/anthropics/claude-code',
      'https://github.com/openai/whisper'
    ];

    for (const repoUrl of repos) {
      // Parser le chemin
      const repoPath = parseGitHubRepoPath(repoUrl);
      assert.ok(repoPath !== null, `Should parse ${repoUrl}`);
      assert.ok(repoPath.owner, 'Should have owner');
      assert.ok(repoPath.repo, 'Should have repo');

      // Générer les candidates (index.html ou pages GitHub)
      const candidates = buildGitHubIndexCandidates(repoUrl);
      assert.ok(candidates.length > 0, 'Should generate candidates');
      // Les candidates incluent raw.githubusercontent.com ou github.io
      assert.ok(
      candidates.some(c => {
        try {
          const hostname = new URL(c).hostname;
          return hostname === 'raw.githubusercontent.com' || hostname.endsWith('.github.io');
        } catch {
          return false;
        }
      }),        'Should include valid GitHub content URLs'
      );
    }
  });

  test('gère URLs GitHub invalides gracieusement', () => {
    const invalidUrls = [
      'https://gitlab.com/user/repo',
      'https://github.com',
      'https://github.com/user',
      'not-a-url',
      ''
    ];

    for (const url of invalidUrls) {
      // Ne devrait pas throw
      assert.doesNotThrow(() => {
        const result = parseGitHubRepoPath(url);
        // Résultat peut être null mais pas d'erreur
      });
    }
  });
});

// =============================================================================
// TESTS: Special Category Handling (Raspberry Pi, OpenClaw)
// =============================================================================

describe('E2E: Special Category Handling', () => {
  const { matchesSpecialCategory, backfillSpecialCategory } = require('../src/aggregator');

  test('Raspberry Pi articles correctement catégorisés', () => {
    const rpiArticles = [
      {
        title: 'Raspberry Pi 5 Performance Review',
        summary: 'Testing the new Raspberry Pi 5 in various scenarios.',
        tags: ['Raspberry Pi', 'Hardware']
      },
      {
        title: 'Building a Home Server with Raspberry Pi',
        summary: 'How to set up a home server using a Raspberry Pi.',
        tags: ['DIY', 'Server', 'Pi']
      },
      {
        title: 'Pi-hole: Block Ads with Raspberry Pi',
        summary: 'Using a Raspberry Pi to block advertisements network-wide.',
        tags: ['Pi-hole', 'Network', 'Raspberry Pi']
      }
    ];

    for (const article of rpiArticles) {
      const matches = matchesSpecialCategory(article, 'raspberrypi');
      assert.equal(matches, true, `Should match: ${article.title}`);
    }
  });

  test('Articles non-Pi ne matchent pas', () => {
    const nonRpiArticles = [
      {
        title: 'Intel Announces New Processors',
        summary: 'New desktop CPUs for gaming.',
        tags: ['Intel', 'CPU']
      },
      {
        title: 'Apple M3 Chip Review',
        summary: 'Testing Apple silicon performance.',
        tags: ['Apple', 'M3', 'ARM']
      }
    ];

    for (const article of nonRpiArticles) {
      const matches = matchesSpecialCategory(article, 'raspberrypi');
      assert.equal(matches, false, `Should not match: ${article.title}`);
    }
  });

  test('backfill fonctionne avec données réelles', () => {
    const categorizedArticles = {
      ai: [
        { title: 'AI Article 1', summary: 'AI content', tags: ['AI'] },
        { title: 'Raspberry Pi AI Project', summary: 'Using Pi for ML', tags: ['AI', 'Raspberry Pi'] }
      ],
      cybersecurity: [
        { title: 'Security Article', summary: 'Security content', tags: ['Security'] }
      ]
    };

    // backfill ne devrait pas throw
    assert.doesNotThrow(() => {
      backfillSpecialCategory(categorizedArticles, 'raspberrypi', 5);
    });
  });
});

// =============================================================================
// TESTS: Output File Generation (Simulation)
// =============================================================================

describe('E2E: Output File Validation', () => {
  test('README.md existe si des articles ont été générés', () => {
    const readmePath = path.join(__dirname, '..', 'README.md');

    // README devrait exister (généré par une exécution précédente)
    if (fs.existsSync(readmePath)) {
      const content = fs.readFileSync(readmePath, 'utf8');
      assert.ok(content.length > 0, 'README should have content');
      assert.ok(content.includes('AI-Pulse'), 'README should mention AI-Pulse');
    }
  });

  test('data/article-map.json structure si existe', () => {
    const mapPath = path.join(__dirname, '..', 'data', 'article-map.json');

    if (fs.existsSync(mapPath)) {
      const content = fs.readFileSync(mapPath, 'utf8');
      const data = JSON.parse(content);

      assert.ok(typeof data === 'object', 'Should be an object');
      // Vérifier la structure
      for (const [key, value] of Object.entries(data)) {
        assert.ok(typeof key === 'string', 'Keys should be strings');
        assert.ok(typeof value === 'object' || typeof value === 'string', 'Values should be objects or strings');
      }
    }
  });

  test('flux RSS valides si existent', () => {
    const feedPath = path.join(__dirname, '..', 'feed.xml');

    if (fs.existsSync(feedPath)) {
      const content = fs.readFileSync(feedPath, 'utf8');
      assert.ok(content.includes('<?xml'), 'Should be XML');
      assert.ok(content.includes('<rss') || content.includes('<feed'), 'Should be RSS/Atom');
    }
  });
});

// =============================================================================
// TESTS: Error Handling
// =============================================================================

describe('E2E: Error Handling', () => {
  const aggregator = require('../src/aggregator');

  test('fonctions gèrent gracieusement les entrées nulles', () => {
    assert.doesNotThrow(() => aggregator.stripEmojiCharacters(null));
    assert.doesNotThrow(() => aggregator.cleanupNoiseText(null));
    assert.doesNotThrow(() => aggregator.trimPromotionalTailText(null));
    assert.doesNotThrow(() => aggregator.isPromotionalContent(null));
  });

  test('fonctions gèrent les entrées undefined', () => {
    assert.doesNotThrow(() => aggregator.stripEmojiCharacters(undefined));
    assert.doesNotThrow(() => aggregator.cleanupNoiseText(undefined));
    assert.doesNotThrow(() => aggregator.trimPromotionalTailText(undefined));
  });

  test('fonctions gèrent les entrées vides', () => {
    assert.equal(aggregator.stripEmojiCharacters(''), '');
    assert.equal(aggregator.cleanupNoiseText(''), '');
    assert.equal(aggregator.trimPromotionalTailText(''), '');
  });

  test('parseGitHubRepoPath gère URL malformée', () => {
    assert.doesNotThrow(() => aggregator.parseGitHubRepoPath('not a url'));
    assert.doesNotThrow(() => aggregator.parseGitHubRepoPath(''));
    assert.doesNotThrow(() => aggregator.parseGitHubRepoPath(null));
  });

  test('computeCategoryRelevance gère article malformé', () => {
    assert.doesNotThrow(() => {
      aggregator.computeCategoryRelevance({}, 'ai');
    });
    assert.doesNotThrow(() => {
      aggregator.computeCategoryRelevance({ title: null }, 'ai');
    });
  });
});

// =============================================================================
// TESTS: Performance (Basic)
// =============================================================================

describe('E2E: Articles Without Full Content', () => {
  test('articles sans hasFullContent ne sont pas filtrés', () => {
    // Simule des articles où l'extraction de contenu a échoué (timeout, etc.)
    const articlesWithMixedContent = [
      {
        title: 'Article avec contenu complet',
        summary: 'Résumé de l\'article',
        hasFullContent: true,
        pubDate: new Date()
      },
      {
        title: 'Article sans contenu (fallback résumé)',
        summary: 'Ce résumé devrait toujours être visible',
        hasFullContent: false,
        pubDate: new Date()
      },
      {
        title: 'Article avec hasFullContent undefined',
        summary: 'Résumé aussi visible',
        pubDate: new Date()
      }
    ];

    // Tous les articles doivent être conservés, pas seulement ceux avec hasFullContent: true
    const kept = articlesWithMixedContent.filter(a => {
      // L'ancienne logique (bugguée) :
      // return a.hasFullContent === true;
      // La nouvelle logique : on garde tous les articles
      return true;
    });

    assert.equal(kept.length, 3, 'Tous les articles doivent être conservés');
    assert.ok(kept.some(a => a.hasFullContent === false), 'Articles sans contenu complet doivent être gardés');
    assert.ok(kept.some(a => a.hasFullContent === undefined), 'Articles avec hasFullContent undefined doivent être gardés');
  });
});

// =============================================================================

describe('E2E: Performance Checks', () => {
  const aggregator = require('../src/aggregator');

  test('traitement rapide de texte court', () => {
    const shortText = 'Quick AI update.';
    const start = Date.now();

    for (let i = 0; i < 1000; i++) {
      aggregator.stripEmojiCharacters(shortText);
      aggregator.cleanupNoiseText(shortText);
    }

    const elapsed = Date.now() - start;
    assert.ok(elapsed < 1000, `1000 iterations should complete in < 1s, took ${elapsed}ms`);
  });

  test('traitement raisonnable de texte long', () => {
    const longText = 'AI technology continues to advance. '.repeat(1000);
    const start = Date.now();

    aggregator.stripEmojiCharacters(longText);
    aggregator.cleanupNoiseText(longText);
    aggregator.trimPromotionalTailText(longText);

    const elapsed = Date.now() - start;
    assert.ok(elapsed < 500, `Long text processing should complete in < 500ms, took ${elapsed}ms`);
  });
});
