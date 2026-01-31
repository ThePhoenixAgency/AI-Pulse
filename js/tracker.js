/**
 * AI-Pulse Statistics Tracker
 * Handles local visitor tracking using localStorage.
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

                const locationStr = `${data.city}, ${data.country_name}`;
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

Tracker.init();
