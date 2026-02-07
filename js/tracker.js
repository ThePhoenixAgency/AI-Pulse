/**
 * AI-Pulse Statistics Tracker
 * Handles local visitor tracking, preferences, read history, and bookmarks via localStorage.
 */

const Tracker = {
    init: function () {
        this.trackVisit();
        this.logDebugInfo();
    },

    generateUUID: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    trackVisit: function () {
        let stats = JSON.parse(localStorage.getItem('ai_pulse_stats')) || {
            visitorId: this.generateUUID(),
            sessions: 0,
            pageViews: 0,
            lastVisit: 0,
            firstVisit: Date.now(),
            locations: [],
            articleClicks: 0
        };

        const now = Date.now();
        const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

        // Check if new session
        if (now - stats.lastVisit > SESSION_TIMEOUT) {
            stats.sessions++;
        }

        stats.pageViews++;
        stats.lastVisit = now;

        // Fetch location if not present or every 7 days (to avoid API spam)
        if (stats.locations.length === 0 || (now - (stats.lastLocUpdate || 0) > 7 * 24 * 60 * 60 * 1000)) {
            this.fetchLocation(stats);
        } else {
            localStorage.setItem('ai_pulse_stats', JSON.stringify(stats));
        }

        // Ensure stats are saved even if location fetch takes time
        localStorage.setItem('ai_pulse_stats', JSON.stringify(stats));

        // Expose for other scripts
        window.aiPulseStats = stats;
        window.aiPulseTracker = this;
    },

    fetchLocation: function (stats) {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                if (data.error) return;

                const locationObj = {
                    city: data.city,
                    country: data.country_name,
                    timestamp: Date.now()
                };

                // Add if not already in list (simple check)
                const exists = stats.locations.some(l => l.city === data.city && l.country === data.country_name);
                if (!exists) {
                    // Store full object now
                    if (typeof stats.locations[0] === 'string') stats.locations = []; // Reset old string format
                    stats.locations.push(locationObj);
                }

                stats.lastLocUpdate = Date.now();
                localStorage.setItem('ai_pulse_stats', JSON.stringify(stats));
                console.log("Location updated:", locationObj);
            })
            .catch(err => console.error("Location fetch failed:", err));
    },

    trackArticleClick: function (articleData) {
        let stats = this.getStats();
        stats.articleClicks = (stats.articleClicks || 0) + 1;
        localStorage.setItem('ai_pulse_stats', JSON.stringify(stats));

        // Also add to read history
        if (articleData.url) {
            ReadHistory.markRead(articleData.url, articleData.title || 'Unknown');
        }

        console.log("Article tracked:", articleData.title);
    },

    getStats: function () {
        return JSON.parse(localStorage.getItem('ai_pulse_stats')) || {
            visitorId: 'Unknown',
            sessions: 0,
            pageViews: 0,
            locations: [],
            articleClicks: 0
        };
    },

    logDebugInfo: function () {
        console.log("AI-Pulse Tracker Active. Visitor ID:", this.getStats().visitorId);
    }
};

/**
 * Preferences Manager - Shared across all pages
 * Same localStorage key as readme-viewer.html for consistency
 */
const PrefsManager = {
    STORAGE_KEY: 'ai_pulse_preferences',

    getDefaults: function () {
        return {
            lang: 'all',
            categories: {},
            keywords: '',
            maxArticles: 30
        };
    },

    load: function () {
        try {
            var stored = localStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                var parsed = JSON.parse(stored);
                var defaults = this.getDefaults();
                for (var key in defaults) {
                    if (!(key in parsed)) parsed[key] = defaults[key];
                }
                return parsed;
            }
        } catch (e) { /* ignore */ }
        return this.getDefaults();
    },

    save: function (prefs) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(prefs));
    },

    reset: function () {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

/**
 * Read History - Track which articles have been read
 */
const ReadHistory = {
    STORAGE_KEY: 'ai_pulse_read_articles',

    // Normalize URL for comparison (remove query params and trailing slashes)
    normalizeUrl: function (url) {
        if (!url) return '';
        try {
            // For local data/articles files, extract the hash
            if (url.includes('data/articles/')) {
                var match = url.match(/data\/articles\/([a-f0-9]+)\.html/);
                if (match) return 'article:' + match[1];
            }
            // For external URLs, keep only the path without query params
            var parsed = new URL(url, window.location.origin);
            return parsed.origin + parsed.pathname.replace(/\/$/, '');
        } catch (e) {
            return url.split('?')[0].replace(/\/$/, '');
        }
    },

    // Normalize title for comparison (lowercase, remove special chars)
    normalizeTitle: function (title) {
        if (!title) return '';
        return title.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    },

    getAll: function () {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch (e) { return []; }
    },

    isRead: function (url, title) {
        var normalizedUrl = this.normalizeUrl(url);
        var normalizedTitle = this.normalizeTitle(title);
        var self = this;
        return this.getAll().some(function (a) {
            // Match by URL OR by similar title
            var urlMatch = self.normalizeUrl(a.url) === normalizedUrl;
            var titleMatch = normalizedTitle && self.normalizeTitle(a.title) === normalizedTitle;
            return urlMatch || titleMatch;
        });
    },

    markRead: function (url, title) {
        var articles = this.getAll();
        var self = this;
        // Check if already read by URL or title
        if (!this.isRead(url, title)) {
            articles.push({ url: url, title: title, readAt: Date.now() });
            // Keep max 500 entries to avoid localStorage bloat
            if (articles.length > 500) {
                articles = articles.slice(-500);
            }
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(articles));
        }
    },

    getCount: function () {
        return this.getAll().length;
    },

    clear: function () {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

/**
 * Bookmarks Manager - Save and manage bookmarked articles
 */
const Bookmarks = {
    STORAGE_KEY: 'ai_pulse_bookmarks',

    getAll: function () {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch (e) { return []; }
    },

    isBookmarked: function (url) {
        return this.getAll().some(function (b) { return b.url === url; });
    },

    toggle: function (url, title, source) {
        var bookmarks = this.getAll();
        var index = bookmarks.findIndex(function (b) { return b.url === url; });
        if (index >= 0) {
            bookmarks.splice(index, 1);
        } else {
            bookmarks.push({ url: url, title: title || '', source: source || '', savedAt: Date.now() });
        }
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookmarks));
        return index < 0; // returns true if added, false if removed
    },

    remove: function (url) {
        var bookmarks = this.getAll().filter(function (b) { return b.url !== url; });
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookmarks));
    },

    getCount: function () {
        return this.getAll().length;
    },

    clear: function () {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

// Expose globally
window.PrefsManager = PrefsManager;
window.ReadHistory = ReadHistory;
window.Bookmarks = Bookmarks;

Tracker.init();
