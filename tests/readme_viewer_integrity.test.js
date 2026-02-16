const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('readme-viewer.html', 'utf8');

function extractInlineScript(haystack) {
  const start = haystack.indexOf('<script>');
  const end = haystack.lastIndexOf('</script>');
  if (start === -1 || end === -1 || end <= start) return null;
  return haystack.slice(start + '<script>'.length, end);
}

test('readme-viewer: inline script is syntactically valid', () => {
  const script = extractInlineScript(html);
  assert.ok(script, 'inline script not found');
  assert.doesNotThrow(() => new Function(script), 'inline script has syntax errors');
});

test('readme-viewer: buildPrefCategories function exists', () => {
  assert.ok(
    html.includes('function buildPrefCategories('),
    'buildPrefCategories function missing'
  );
});

test('readme-viewer: prefHideRead control exists in preferences panel', () => {
  assert.ok(
    html.includes('id="prefHideRead"'),
    'prefHideRead checkbox is missing'
  );
});

test('readme-viewer: renumbering must not rewrite heading textContent (keeps article links clickable)', () => {
  assert.ok(
    !html.includes('heading.textContent = text.replace('),
    'destructive renumbering detected: it can remove article links'
  );
});
