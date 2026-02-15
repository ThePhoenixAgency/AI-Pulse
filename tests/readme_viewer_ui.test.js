const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

function extractBetween(haystack, startNeedle, endNeedle) {
  const start = haystack.indexOf(startNeedle);
  if (start === -1) return null;
  const end = haystack.indexOf(endNeedle, start + startNeedle.length);
  if (end === -1) return null;
  return haystack.slice(start, end + endNeedle.length);
}

test('readme-viewer: prefs toggle button is inside the top nav (mobile-first, not fixed overlay)', () => {
  const html = fs.readFileSync('readme-viewer.html', 'utf8');
  const nav = extractBetween(html, '<nav class="top-nav"', '</nav>');
  assert.ok(nav, 'top-nav not found');
  assert.ok(nav.includes('id="prefsToggle"'), 'prefsToggle should live inside the top nav');
});
