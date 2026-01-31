/**
 * AI-Pulse UI Manager
 * Handles Custom Cursor and Common UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    highlightActiveLink();
});

function initCursor() {
    // Custom cursor disabled by user request
    return;
}

function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}
