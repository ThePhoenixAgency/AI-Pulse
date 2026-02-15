const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('privacy: header logo uses logo_final.png (not logo_text.png)', () => {
  const html = fs.readFileSync('privacy.html', 'utf8');
  assert.ok(!html.includes('./assets/logo_text.png'), 'privacy.html must not reference logo_text.png');
  assert.ok(html.includes('./assets/logo_final.png'), 'privacy.html must reference logo_final.png');
});

