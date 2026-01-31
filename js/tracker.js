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
            locations: ['Local Global Network'] // Mock location
        };

        const now = Date.now();
        const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

        // Check if new session
        if (now - stats.lastVisit > SESSION_TIMEOUT) {
            stats.sessions++;
        }

        stats.pageViews++;
        stats.lastVisit = now;

        localStorage.setItem('ai_pulse_stats', JSON.stringify(stats));

        // Expose for other scripts
        window.aiPulseStats = stats;
    },

    getStats: function () {
        return JSON.parse(localStorage.getItem('ai_pulse_stats')) || {
            visitorId: 'Unknown',
            sessions: 0,
            pageViews: 0,
            locations: []
        };
    },

    logDebugInfo: function () {
        console.log("AI-Pulse Tracker Active. Visitor ID:", this.getStats().visitorId);
    }
};

Tracker.init();
