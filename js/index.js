function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';

    const tabIcon = document.querySelector('.tab-icon');
    tabIcon.classList.toggle('open');
}


