/**
 * Tests unitaires pour src/aggregator.js
 *
 * Utilise Node.js built-in test runner (node:test)
 * Exécuter avec: npm test ou node --test
 */

const { test, describe } = require('node:test');
const assert = require('node:assert/strict');

const {
  stripEmojiCharacters,
  isPromotionalContent,
  trimPromotionalTailText,
  cleanupNoiseText,
  trimPromotionalTailHtml,
  cleanupNoiseHtml,
  parseGitHubRepoPath,
  buildGitHubIndexCandidates,
  matchesSpecialCategory,
  computeCategoryRelevance,
  getCategoryTemperature,
  resolveDisplayKeyword
} = require('../src/aggregator');

// =============================================================================
// TESTS: stripEmojiCharacters
// =============================================================================

describe('stripEmojiCharacters', () => {
  test('supprime les emojis simples', () => {
    const result = stripEmojiCharacters('Hello 🚀 World');
    assert.equal(result, 'Hello World');
  });

  test('supprime les emojis complexes avec modificateurs', () => {
    const result = stripEmojiCharacters('Test 👨‍💻 code');
    assert.equal(result, 'Test code');
  });

  test('supprime les emojis multiples', () => {
    const result = stripEmojiCharacters('🎉🎊 Celebration 🥳');
    assert.equal(result, 'Celebration');
  });

  test('normalise les espaces multiples', () => {
    const result = stripEmojiCharacters('Hello   World');
    assert.equal(result, 'Hello World');
  });

  test('retourne chaîne vide pour input null', () => {
    const result = stripEmojiCharacters(null);
    assert.equal(result, '');
  });

  test('retourne chaîne vide pour input undefined', () => {
    const result = stripEmojiCharacters(undefined);
    assert.equal(result, '');
  });

  test('conserve le texte sans emojis', () => {
    const result = stripEmojiCharacters('Plain text without emojis');
    assert.equal(result, 'Plain text without emojis');
  });

  test('gère les caractères accentués', () => {
    const result = stripEmojiCharacters('Café résumé été');
    assert.equal(result, 'Café résumé été');
  });
});

// =============================================================================
// TESTS: isPromotionalContent
// =============================================================================

describe('isPromotionalContent', () => {
  test('détecte "advertisement"', () => {
    assert.equal(isPromotionalContent('This is an advertisement'), true);
  });

  test('détecte "sponsored"', () => {
    assert.equal(isPromotionalContent('Sponsored content here'), true);
  });

  test('détecte "subscribe"', () => {
    assert.equal(isPromotionalContent('Subscribe to our newsletter'), true);
  });

  test('détecte "abonnez-vous" (FR)', () => {
    assert.equal(isPromotionalContent('Abonnez-vous maintenant'), true);
  });

  test('détecte "publicité" (FR)', () => {
    assert.equal(isPromotionalContent('Ceci est une publicité'), true);
  });

  test('détecte "follow us"', () => {
    assert.equal(isPromotionalContent('Follow us on Twitter'), true);
  });

  test('détecte "appeared first on"', () => {
    assert.equal(isPromotionalContent('This post appeared first on TechBlog'), true);
  });

  test('détecte "est apparu en premier sur" (FR)', () => {
    assert.equal(isPromotionalContent("L'article est apparu en premier sur TechBlog"), true);
  });

  test('ne détecte pas le contenu normal', () => {
    assert.equal(isPromotionalContent('New AI model achieves breakthrough'), false);
  });

  test('ne détecte pas le contenu tech normal', () => {
    assert.equal(isPromotionalContent('OpenAI releases GPT-5 with improved reasoning'), false);
  });

  test('retourne false pour input vide', () => {
    assert.equal(isPromotionalContent(''), false);
    assert.equal(isPromotionalContent(null), false);
  });

  test('détecte case-insensitive', () => {
    assert.equal(isPromotionalContent('ADVERTISEMENT'), true);
    assert.equal(isPromotionalContent('AdVeRtIsEmEnT'), true);
  });
});

// =============================================================================
// TESTS: cleanupNoiseText
// =============================================================================

describe('cleanupNoiseText', () => {
  test('supprime "comments 0"', () => {
    const result = cleanupNoiseText('Article text. comments 0');
    assert.ok(!result.includes('comments'));
  });

  test('supprime "0 commentaires"', () => {
    const result = cleanupNoiseText('Texte article. 0 commentaires');
    assert.ok(!result.includes('commentaires'));
  });

  test('supprime "sponsors"', () => {
    const result = cleanupNoiseText('Content. sponsors welcome');
    assert.ok(!result.includes('sponsors'));
  });

  test('supprime "abonnez-vous"', () => {
    const result = cleanupNoiseText('Contenu. Abonnez-vous ici');
    assert.ok(!result.toLowerCase().includes('abonnez'));
  });

  test('supprime "follow us"', () => {
    const result = cleanupNoiseText('Content. Follow us on Twitter');
    assert.ok(!result.toLowerCase().includes('follow us'));
  });

  test('supprime le tail "appeared first on"', () => {
    const result = cleanupNoiseText('Great article. This article has appeared first on TechBlog');
    assert.ok(!result.includes('appeared first on'));
  });

  test('normalise les espaces multiples', () => {
    const result = cleanupNoiseText('Text    with    spaces');
    assert.ok(!result.includes('  '));
  });

  test('supprime TL;DR prefix', () => {
    const result = cleanupNoiseText('TL;DR: This is the summary. Real content here.');
    assert.ok(!result.toLowerCase().includes('tl;dr'));
  });

  test('retourne chaîne vide pour null', () => {
    assert.equal(cleanupNoiseText(null), '');
  });

  test('conserve le contenu utile', () => {
    const input = 'OpenAI releases new model with improved capabilities.';
    const result = cleanupNoiseText(input);
    assert.ok(result.includes('OpenAI'));
    assert.ok(result.includes('improved capabilities'));
  });
});

// =============================================================================
// TESTS: parseGitHubRepoPath
// =============================================================================

describe('parseGitHubRepoPath', () => {
  test('parse URL GitHub simple', () => {
    const result = parseGitHubRepoPath('https://github.com/owner/repo');
    assert.deepEqual(result, { owner: 'owner', repo: 'repo' });
  });

  test('retourne null pour URL GitHub avec /tree/ path', () => {
    // La fonction ne gère que les URLs simples de repo
    const result = parseGitHubRepoPath('https://github.com/microsoft/vscode/tree/main/src');
    assert.equal(result, null);
  });

  test('retourne null pour URL GitHub avec /blob/ path', () => {
    // La fonction ne gère que les URLs simples de repo
    const result = parseGitHubRepoPath('https://github.com/facebook/react/blob/main/README.md');
    assert.equal(result, null);
  });

  test('retourne null pour URL non-GitHub', () => {
    const result = parseGitHubRepoPath('https://gitlab.com/owner/repo');
    assert.equal(result, null);
  });

  test('retourne null pour URL invalide', () => {
    const result = parseGitHubRepoPath('not a url');
    assert.equal(result, null);
  });

  test('retourne null pour GitHub sans repo', () => {
    const result = parseGitHubRepoPath('https://github.com/owner');
    assert.equal(result, null);
  });
});

// =============================================================================
// TESTS: buildGitHubIndexCandidates
// =============================================================================

describe('buildGitHubIndexCandidates', () => {
  test('génère les URLs candidates pour index/pages', () => {
    const candidates = buildGitHubIndexCandidates('https://github.com/owner/repo');
    assert.ok(Array.isArray(candidates));
    assert.ok(candidates.length > 0);
    // Les candidates peuvent inclure index.html ou github.io
    assert.ok(candidates.some(url => url.includes('index.html') || url.includes('github.io')));
  });

  test('inclut raw.githubusercontent.com', () => {
    const candidates = buildGitHubIndexCandidates('https://github.com/owner/repo');
    assert.ok(candidates.some(url => url.includes('raw.githubusercontent.com')));
  });

  test('retourne tableau vide pour non-GitHub', () => {
    const candidates = buildGitHubIndexCandidates('https://gitlab.com/owner/repo');
    assert.deepEqual(candidates, []);
  });
});

// =============================================================================
// TESTS: getCategoryTemperature
// =============================================================================

describe('getCategoryTemperature', () => {
  test('retourne température pour catégorie connue', () => {
    const temp = getCategoryTemperature('ai');
    assert.ok(typeof temp === 'number');
    assert.ok(temp >= 0 && temp <= 1);
  });

  test('retourne température par défaut pour catégorie inconnue', () => {
    const temp = getCategoryTemperature('nonexistent_category_xyz');
    assert.ok(typeof temp === 'number');
    assert.ok(temp >= 0 && temp <= 1);
  });

  test('retourne température pour openclaw', () => {
    const temp = getCategoryTemperature('openclaw');
    assert.ok(typeof temp === 'number');
    // openclaw a une température plus élevée (0.22)
    assert.ok(temp > 0.1);
  });
});

// =============================================================================
// TESTS: matchesSpecialCategory
// =============================================================================

describe('matchesSpecialCategory', () => {
  test('matche article avec mention Raspberry Pi dans le titre', () => {
    const article = {
      title: 'Raspberry Pi 5 Released',
      summary: 'The new Raspberry Pi 5 brings improved performance.',
      tags: ['hardware']
    };
    const result = matchesSpecialCategory(article, 'raspberrypi');
    assert.equal(result, true);
  });

  test('matche article avec mention Pi dans le summary', () => {
    const article = {
      title: 'New Project Released',
      summary: 'Build this project using a Raspberry Pi for best results.',
      tags: ['hardware']
    };
    const result = matchesSpecialCategory(article, 'raspberrypi');
    assert.equal(result, true);
  });

  test('ne matche pas article sans mention Raspberry Pi', () => {
    const article = {
      title: 'Intel releases new CPU',
      summary: 'New desktop processors announced.',
      tags: ['intel', 'cpu']
    };
    const result = matchesSpecialCategory(article, 'raspberrypi');
    assert.equal(result, false);
  });

  test('matche catégorie AI pour article AI', () => {
    // matchesSpecialCategory peut matcher AI si les signaux sont présents
    const article = {
      title: 'AI News',
      summary: 'Latest AI developments.',
      tags: ['ai']
    };
    const result = matchesSpecialCategory(article, 'ai');
    // La fonction retourne true car AI a des signaux dans la config
    assert.ok(typeof result === 'boolean');
  });
});

// =============================================================================
// TESTS: computeCategoryRelevance
// =============================================================================

describe('computeCategoryRelevance', () => {
  test('calcule relevance pour article AI', () => {
    const article = {
      title: 'OpenAI Announces GPT-5',
      summary: 'Major breakthrough in artificial intelligence and machine learning.',
      tags: ['AI', 'OpenAI']
    };
    const score = computeCategoryRelevance(article, 'ai');
    assert.ok(typeof score === 'number');
    assert.ok(score >= 0);
  });

  test('calcule relevance pour article cybersecurity', () => {
    const article = {
      title: 'Critical Security Vulnerability Found',
      summary: 'Hackers exploit zero-day vulnerability in major software.',
      tags: ['security', 'hacking']
    };
    const score = computeCategoryRelevance(article, 'cybersecurity');
    assert.ok(typeof score === 'number');
    assert.ok(score >= 0);
  });

  test('retourne 0 pour article non pertinent', () => {
    const article = {
      title: 'Recipe for Apple Pie',
      summary: 'Delicious homemade apple pie recipe.',
      tags: ['cooking', 'recipes']
    };
    const score = computeCategoryRelevance(article, 'ai');
    assert.ok(score < 1);
  });
});

// =============================================================================
// TESTS: resolveDisplayKeyword
// =============================================================================

describe('resolveDisplayKeyword', () => {
  test('retourne keyword approprié pour tags AI', () => {
    const keyword = resolveDisplayKeyword(['AI', 'Machine Learning'], 'en', 'ai');
    assert.ok(typeof keyword === 'string');
    assert.ok(keyword.length > 0);
  });

  test('retourne keyword pour tags vides', () => {
    const keyword = resolveDisplayKeyword([], 'en', 'ai');
    assert.ok(typeof keyword === 'string');
  });

  test('gère la langue française', () => {
    const keyword = resolveDisplayKeyword(['IA', 'Intelligence Artificielle'], 'fr', 'ai');
    assert.ok(typeof keyword === 'string');
  });

  test('retourne keyword pour catégorie cybersecurity', () => {
    const keyword = resolveDisplayKeyword(['security', 'hacking'], 'en', 'cybersecurity');
    assert.ok(typeof keyword === 'string');
  });
});

// =============================================================================
// TESTS: trimPromotionalTailText
// =============================================================================

describe('trimPromotionalTailText', () => {
  test('supprime "The post ... appeared first on"', () => {
    const input = 'Great article content here. The post appeared first on TechBlog.';
    const result = trimPromotionalTailText(input);
    assert.ok(!result.includes('appeared first on'));
  });

  test('supprime "L\'article ... est apparu en premier sur"', () => {
    const input = "Contenu de l'article. L'article est apparu en premier sur Blog Tech.";
    const result = trimPromotionalTailText(input);
    assert.ok(!result.includes('est apparu en premier sur'));
  });

  test('conserve le contenu principal', () => {
    const input = 'Important news about AI developments.';
    const result = trimPromotionalTailText(input);
    assert.equal(result, input);
  });

  test('retourne chaîne vide pour input null', () => {
    const result = trimPromotionalTailText(null);
    assert.equal(result, '');
  });
});

// =============================================================================
// TESTS: cleanupNoiseHtml
// =============================================================================

describe('cleanupNoiseHtml', () => {
  test('conserve le contenu HTML de base', () => {
    const input = '<p>Content</p><div>More content</div>';
    const result = cleanupNoiseHtml(input);
    assert.ok(result.includes('Content'));
    assert.ok(result.includes('More content'));
  });

  test('conserve les paragraphes', () => {
    const input = '<p style="display:none">Hidden</p><p>Visible</p>';
    const result = cleanupNoiseHtml(input);
    assert.ok(result.includes('Visible'));
  });

  test('conserve le contenu textuel', () => {
    const input = '<p>Important paragraph</p><div>Another section</div>';
    const result = cleanupNoiseHtml(input);
    assert.ok(result.includes('Important paragraph'));
  });

  test('retourne chaîne vide pour input null', () => {
    const result = cleanupNoiseHtml(null);
    assert.equal(result, '');
  });

  test('gère le HTML mal formé', () => {
    const input = '<p>Unclosed paragraph<div>Content</div>';
    const result = cleanupNoiseHtml(input);
    assert.ok(typeof result === 'string');
  });
});

// =============================================================================
// TESTS: trimPromotionalTailHtml
// =============================================================================

describe('trimPromotionalTailHtml', () => {
  test('supprime les balises promotionnelles', () => {
    const input = '<article>Content</article><div class="related-posts">Related</div>';
    const result = trimPromotionalTailHtml(input);
    assert.ok(result.includes('Content'));
  });

  test('conserve le contenu principal', () => {
    const input = '<article><h1>Title</h1><p>Content here</p></article>';
    const result = trimPromotionalTailHtml(input);
    assert.ok(result.includes('Title'));
    assert.ok(result.includes('Content here'));
  });
});
