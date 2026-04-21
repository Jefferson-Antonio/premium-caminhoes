/* Mobile menu toggle */
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');
toggle.addEventListener('click', (event) => {
    // Prevents the click on the menu button from being detected by the document below.
    event.stopPropagation();
    
    menu.classList.toggle('active');

    // accessibility
    const isOpen = menu.classList.contains('active');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');


});

document.addEventListener('click', (event) => {
    const isOpen = menu.classList.contains('active');

    // If the menu is open AND the click is NOT within the menu AND is NOT on the button
    if (isOpen && !menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove('active');

        // accessibility
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
    }
});

// Close the menu by pressing the "ESC" key.
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
    }
});
