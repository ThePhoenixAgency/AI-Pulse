const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('theme: css/style.css exists (local theme not broken)', () => {
  assert.ok(fs.existsSync('css/style.css'), 'css/style.css is missing');
});
