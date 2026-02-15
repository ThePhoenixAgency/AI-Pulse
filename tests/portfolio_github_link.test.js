const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('portfolio.html', 'utf8');

test('portfolio: GitHub links point to repositories page (no viewer indirection)', () => {
  assert.ok(!html.includes('viewer.html?url=https://github.com/ethanbernier'), 'portfolio must not link to GitHub via viewer.html');
  assert.ok(html.includes('https://github.com/ThePhoenixAgency?tab=repositories'), 'portfolio must link to GitHub repositories tab');
});
