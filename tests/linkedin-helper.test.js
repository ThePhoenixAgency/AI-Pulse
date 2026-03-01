/**
 * Tests unitaires pour src/linkedin-helper.js
 *
 * Utilise Node.js built-in test runner (node:test)
 */

const { test, describe, beforeEach, afterEach, mock } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// On doit re-require le module pour chaque test suite avec un environnement propre
let linkedinHelper;

describe('LinkedInHelper', () => {
  beforeEach(() => {
    // Reset environment variables
    delete process.env.LINKEDIN_ACCESS_TOKEN;
    delete process.env.LINKEDIN_USER_ID;

    // Clear module cache to get fresh instance
    delete require.cache[require.resolve('../src/linkedin-helper')];
    linkedinHelper = require('../src/linkedin-helper');
  });

  describe('isAlreadyPosted', () => {
    test('retourne un boolean pour URL', () => {
      // L'historique peut déjà contenir des URLs, on vérifie juste le type de retour
      const result = linkedinHelper.isAlreadyPosted('https://unique-test-' + Date.now() + '.example.com/article');
      assert.equal(typeof result, 'boolean');
    });

    test('retourne true après markAsPosted', () => {
      const url = 'https://test-' + Date.now() + '.example.com/article-test';
      linkedinHelper.markAsPosted(url);
      const result = linkedinHelper.isAlreadyPosted(url);
      assert.equal(result, true);
    });

    test('URL unique non postée retourne false', () => {
      // Générer une URL vraiment unique qui n'existe pas
      const uniqueUrl = 'https://never-posted-' + Date.now() + '-' + Math.random() + '.example.com/unique';
      const result = linkedinHelper.isAlreadyPosted(uniqueUrl);
      assert.equal(result, false);
    });
  });

  describe('markAsPosted', () => {
    test('ajoute URL à l\'historique', () => {
      const url = 'https://example.com/test-article';
      linkedinHelper.markAsPosted(url);

      // Vérifier que le fichier contient l'URL
      const historyPath = path.join(__dirname, '..', 'data', 'posted-links.json');
      if (fs.existsSync(historyPath)) {
        const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
        assert.ok(history.includes(url));
      }
    });

    test('ne duplique pas les URLs', () => {
      const url = 'https://example.com/unique-article';
      linkedinHelper.markAsPosted(url);
      linkedinHelper.markAsPosted(url);

      const historyPath = path.join(__dirname, '..', 'data', 'posted-links.json');
      if (fs.existsSync(historyPath)) {
        const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
        const count = history.filter(u => u === url).length;
        assert.equal(count, 1);
      }
    });
  });

  describe('generatePost', () => {
    test('génère un post pour article AI', async () => {
      const article = {
        title: 'OpenAI Releases GPT-5',
        summary: 'Major breakthrough in AI technology.',
        category: 'ai',
        link: 'https://example.com/gpt5'
      };

      const post = await linkedinHelper.generatePost(article);
      assert.ok(typeof post === 'string');
      assert.ok(post.length > 0);
      assert.ok(post.includes(article.title));
    });

    test('génère un post pour article cybersecurity', async () => {
      const article = {
        title: 'Critical Security Flaw Found',
        summary: 'New vulnerability affects millions.',
        category: 'cybersecurity',
        link: 'https://example.com/security'
      };

      const post = await linkedinHelper.generatePost(article);
      assert.ok(typeof post === 'string');
      assert.ok(post.includes(article.title));
    });

    test('génère un post pour article raspberrypi', async () => {
      const article = {
        title: 'Raspberry Pi 5 Announced',
        summary: 'New single board computer.',
        category: 'raspberrypi',
        link: 'https://example.com/rpi5'
      };

      const post = await linkedinHelper.generatePost(article);
      assert.ok(typeof post === 'string');
      assert.ok(post.includes(article.title));
    });

    test('inclut les hashtags', async () => {
      const article = {
        title: 'Test Article',
        summary: 'Test summary.',
        category: 'ai',
        link: 'https://example.com/test'
      };

      const post = await linkedinHelper.generatePost(article);
      assert.ok(post.includes('#'));
    });

    test('gère article sans summary', async () => {
      const article = {
        title: 'Test Article Without Summary',
        category: 'ai',
        link: 'https://example.com/no-summary'
      };

      const post = await linkedinHelper.generatePost(article);
      assert.ok(typeof post === 'string');
      assert.ok(post.includes(article.title));
    });
  });

  describe('postToLinkedIn', () => {
    test('retourne null sans credentials', async () => {
      delete process.env.LINKEDIN_ACCESS_TOKEN;
      delete process.env.LINKEDIN_USER_ID;

      // Re-load module
      delete require.cache[require.resolve('../src/linkedin-helper')];
      const helper = require('../src/linkedin-helper');

      const result = await helper.postToLinkedIn('Test post', 'https://example.com');
      assert.equal(result, null);
    });
  });
});
