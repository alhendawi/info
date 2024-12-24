document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.createElement('div');
    navOverlay.classList.add('nav-overlay');
    document.body.appendChild(navOverlay);

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            navOverlay.classList.toggle('show');
            // Toggle hamburger icon to cross shape
            navToggle.classList.toggle('active');
        });

        // Close the menu if overlay is clicked
        navOverlay.addEventListener('click', () => {
            navLinks.classList.remove('show');
            navOverlay.classList.remove('show');
            navToggle.classList.remove('active');
        });
    }
});

