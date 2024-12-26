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
            navToggle.classList.toggle('active');
        });

        navOverlay.addEventListener('click', () => {
            navLinks.classList.remove('show');
            navOverlay.classList.remove('show');
            navToggle.classList.remove('active');
        });
    }
});
