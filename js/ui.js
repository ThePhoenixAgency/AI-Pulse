/**
 * AI-Pulse UI Manager
 * Handles Custom Cursor and Common UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveLink();
});



function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}
