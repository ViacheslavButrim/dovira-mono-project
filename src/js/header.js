const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    navLinks.forEach(l => l.classList.remove('current'));
    e.currentTarget.classList.add('current');
  });
});