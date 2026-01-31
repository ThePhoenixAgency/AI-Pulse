/**
 * AI-Pulse UI Manager
 * Handles Custom Cursor and Common UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    highlightActiveLink();
});

function initCursor() {
    // Mobile detection - disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
        document.body.style.cursor = 'auto';
        return;
    }

    // Create cursor elements
    const cursorContainer = document.createElement('div');
    cursorContainer.id = 'cursor';

    const cursorArrow = document.createElement('div');
    cursorArrow.id = 'cursor-arrow';

    cursorContainer.appendChild(cursorArrow);
    document.body.appendChild(cursorContainer);

    // Track movement
    document.addEventListener('mousemove', (e) => {
        cursorContainer.style.left = e.clientX + 'px';
        cursorContainer.style.top = e.clientY + 'px';
    });

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, input, .stat-card, .btn');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorArrow.style.transform = 'rotate(-25deg) translate(-50%, -10%) scale(1.5)';
            cursorArrow.style.borderBottomColor = 'var(--secondary)';
        });

        el.addEventListener('mouseleave', () => {
            cursorArrow.style.transform = 'rotate(-25deg) translate(-50%, -10%) scale(1)';
            cursorArrow.style.borderBottomColor = 'var(--primary)';
        });
    });
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
