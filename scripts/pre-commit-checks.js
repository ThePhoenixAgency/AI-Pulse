#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8', ...opts });
  return res;
}

function fail(message) {
  console.error(`[ERROR] ${message}`);
  process.exit(1);
}

function info(message) {
  console.log(`[OK] ${message}`);
}

function stagedFiles() {
  const res = run('git', ['diff', '--cached', '--name-only', '--diff-filter=ACMR']);
  if (res.status !== 0) {
    fail(`Impossible de lire les fichiers staged: ${res.stderr || res.stdout}`);
  }
  return res.stdout.split('\n').map((s) => s.trim()).filter(Boolean);
}

function checkJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  JSON.parse(raw);
}

function checkJsSyntax(filePath) {
  const res = run(process.execPath, ['--check', filePath]);
  if (res.status !== 0) {
    throw new Error((res.stderr || res.stdout || 'Syntax error').trim());
  }
}

function checkBasicText(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  if (raw.trim().length === 0) {
    throw new Error('fichier vide');
  }
}

function checkDiffSecrets() {
  const res = run('git', ['diff', '--cached']);
  if (res.status !== 0) {
    throw new Error('Impossible de lire le diff staged');
  }

  const diff = res.stdout;
  const suspicious = [
    /-----BEGIN (RSA|EC|OPENSSH|DSA) PRIVATE KEY-----/i,
    /AKIA[0-9A-Z]{16}/,
    /ghp_[A-Za-z0-9]{36,}/,
    /xox[baprs]-[A-Za-z0-9-]{10,}/,
    /AIza[0-9A-Za-z\-_]{35}/
  ];

  for (const re of suspicious) {
    if (re.test(diff)) {
      throw new Error(`Pattern sensible detecte: ${re}`);
    }
  }
}

function runTests() {
  const res = spawnSync(process.execPath, ['--test'], { stdio: 'inherit', encoding: 'utf8' });
  if (res.status !== 0) {
    throw new Error('Tests en echec (node --test)');
  }
}

function main() {
  const files = stagedFiles();
  if (files.length === 0) {
    info('Aucun fichier staged, pre-commit valide.');
    return;
  }

  const root = process.cwd();

  for (const rel of files) {
    const filePath = path.join(root, rel);
    if (!fs.existsSync(filePath)) {
      fail(`Fichier staged introuvable: ${rel}`);
    }

    const ext = path.extname(rel).toLowerCase();
    try {
      if (ext === '.json') {
        checkJson(filePath);
      } else if (ext === '.js' || ext === '.mjs' || ext === '.cjs') {
        checkJsSyntax(filePath);
      } else if (ext === '.md' || ext === '.html' || ext === '.css' || ext === '.yml' || ext === '.yaml' || ext === '.xml') {
        checkBasicText(filePath);
      } else {
        if (fs.statSync(filePath).isFile() && fs.statSync(filePath).size === 0) {
          throw new Error('fichier vide');
        }
      }
      info(`Validation fichier OK: ${rel}`);
    } catch (error) {
      fail(`Validation fichier KO (${rel}): ${error.message}`);
    }
  }

  try {
    checkDiffSecrets();
    info('Audit securite staged OK.');
  } catch (error) {
    fail(error.message);
  }

  try {
    runTests();
    info('Tests globaux OK.');
  } catch (error) {
    fail(error.message);
  }
}

main();
