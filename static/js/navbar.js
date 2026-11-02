document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.navbar__toggle');
    const links = document.querySelectorAll('.navbar__links a');

    if (!navbar || !toggle) return;

    toggle.addEventListener('click', () => {
        const aberto = navbar.classList.toggle('aberto');

        toggle.setAttribute('aria-expanded', aberto);
        toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target)) {
            navbar.classList.remove('aberto');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Abrir menu');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('aberto');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Abrir menu');
        });
    });
});