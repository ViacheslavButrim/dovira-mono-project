document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.btn-menu-close');

  if (!burgerBtn || !mobileMenu || !closeBtn) {
    console.warn('Елементи меню не знайдені');
    return;
  }

  // Відкрити меню
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  // Закрити меню
  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeMenu);

  // Закривати по кліку на посилання
  mobileMenu.addEventListener('click', e => {
    if (e.target.tagName === 'A') closeMenu();
  });
});