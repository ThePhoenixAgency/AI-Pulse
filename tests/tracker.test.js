const { test, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function createLocalStorage(initial = {}) {
  const store = { ...initial };
  return {
    getItem: (k) => (Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    _dump: () => ({ ...store })
  };
}

function createCookieJar() {
  let cookie = '';
  return {
    get: () => cookie,
    set: (v) => {
      // Naive cookie jar: keep the latest value for each cookie name.
      const parts = v.split(';').map(s => s.trim());
      const [kv] = parts;
      const eq = kv.indexOf('=');
      const name = eq === -1 ? kv : kv.slice(0, eq);
      const value = eq === -1 ? '' : kv.slice(eq + 1);

      const current = cookie ? cookie.split(';').map(s => s.trim()).filter(Boolean) : [];
      const next = current.filter(p => !p.startsWith(name + '='));
      next.push(name + '=' + value);
      cookie = next.join('; ');
    },
    clear: () => { cookie = ''; }
  };
}

function loadTrackerIntoSandbox({ localStorage, cookieJar, fetchImpl, now, cryptoImpl }) {
  const trackerPath = path.join(process.cwd(), 'js', 'tracker.js');
  const code = fs.readFileSync(trackerPath, 'utf8');

  const document = {};
  Object.defineProperty(document, 'cookie', {
    get: () => cookieJar.get(),
    set: (v) => cookieJar.set(v)
  });

  const sandbox = {
    window: {},
    document,
    localStorage,
    fetch: fetchImpl,
    console: { log() {}, error() {} },
    Date: class extends Date {
      static now() { return now; }
    },
    setTimeout,
    clearTimeout,
  };
  if (cryptoImpl) sandbox.crypto = cryptoImpl;

  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: 'js/tracker.js' });

  return sandbox;
}

const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

test('Premiere visite: cree une session et increment sessions/pageViews', async () => {
  const localStorage = createLocalStorage();
  const cookieJar = createCookieJar();

  let fetchCalls = 0;
  const fetchImpl = async () => {
    fetchCalls++;
    return { json: async () => ({ city: 'Grenoble', country_name: 'France' }) };
  };

  loadTrackerIntoSandbox({ localStorage, cookieJar, fetchImpl, now: 1000 });

  const stats = JSON.parse(localStorage.getItem('ai_pulse_stats'));
  assert.equal(stats.sessions, 1);
  assert.equal(stats.pageViews, 1);
  assert.ok(stats.visitorId);

  // Cookie de session present
  assert.match(cookieJar.get(), /ai_pulse_session=/);
  assert.equal(fetchCalls, 1);
});

test('Deuxieme visite dans la meme session: ne recompte pas une session', async () => {
  const localStorage = createLocalStorage();
  const cookieJar = createCookieJar();

  const fetchImpl = async () => ({ json: async () => ({ city: 'Grenoble', country_name: 'France' }) });

  loadTrackerIntoSandbox({ localStorage, cookieJar, fetchImpl, now: 1000 });
  loadTrackerIntoSandbox({ localStorage, cookieJar, fetchImpl, now: 2000 });

  const stats = JSON.parse(localStorage.getItem('ai_pulse_stats'));
  assert.equal(stats.sessions, 1);
  assert.equal(stats.pageViews, 2);
});

test('Retour apres expiration (cookie absent): recompte une session', async () => {
  const localStorage = createLocalStorage();
  const cookieJar = createCookieJar();

  const fetchImpl = async () => ({ json: async () => ({ city: 'Grenoble', country_name: 'France' }) });

  loadTrackerIntoSandbox({ localStorage, cookieJar, fetchImpl, now: 1000 });
  cookieJar.clear();
  loadTrackerIntoSandbox({ localStorage, cookieJar, fetchImpl, now: 999999 });

  const stats = JSON.parse(localStorage.getItem('ai_pulse_stats'));
  assert.equal(stats.sessions, 2);
  assert.equal(stats.pageViews, 2);
});

test('Throttle geoip: ne refait pas fetch si lastLocUpdate recent et locations presentes', async () => {
  const localStorage = createLocalStorage({
    ai_pulse_stats: JSON.stringify({
      visitorId: 'v',
      sessions: 1,
      pageViews: 1,
      lastVisit: 0,
      firstVisit: 0,
      locations: [{ city: 'Grenoble', country: 'France', timestamp: 1 }],
      lastLocUpdate: 1000,
      articleClicks: 0
    })
  });
  const cookieJar = createCookieJar();

  let fetchCalls = 0;
  const fetchImpl = async () => {
    fetchCalls++;
    return { json: async () => ({ city: 'Grenoble', country_name: 'France' }) };
  };

  loadTrackerIntoSandbox({ localStorage, cookieJar, fetchImpl, now: 2000 });

  assert.equal(fetchCalls, 0);
});

test('UUID: utilise crypto.getRandomValues quand disponible', async () => {
  const localStorage = createLocalStorage();
  const cookieJar = createCookieJar();
  let called = 0;
  const cryptoImpl = {
    getRandomValues(arr) {
      called++;
      for (let i = 0; i < arr.length; i++) arr[i] = i;
      return arr;
    }
  };
  const fetchImpl = async () => ({ json: async () => ({ city: 'Grenoble', country_name: 'France' }) });

  const sandbox = loadTrackerIntoSandbox({ localStorage, cookieJar, fetchImpl, now: 1000, cryptoImpl });
  const uuid = sandbox.window.aiPulseTracker.generateUUID();

  assert.ok(called > 0);
  assert.match(uuid, UUID_V4_REGEX);
});

test('UUID: fallback Math.random si crypto indisponible', async () => {
  const localStorage = createLocalStorage();
  const cookieJar = createCookieJar();
  const fetchImpl = async () => ({ json: async () => ({ city: 'Grenoble', country_name: 'France' }) });

  const sandbox = loadTrackerIntoSandbox({ localStorage, cookieJar, fetchImpl, now: 1000 });
  const uuid = sandbox.window.aiPulseTracker.generateUUID();

  assert.match(uuid, UUID_V4_REGEX);
});
