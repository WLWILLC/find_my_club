//Mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobilemenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () =>
        mobilemenu.classList.toggle('active')
    );
})