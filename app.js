// NAVBAR
const navbarToggle = navbar.querySelector('#navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};
navbarToggle.addEventListener('click', toggleNavbarVisibility);


// stop click propagation so that any clicks on .navbar-links don’t bubble up and trigger a close.
const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');
navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);
// END OF NAVBAR


