// Intersection Observer для анімації при прокрутці
const squirrel = document.querySelector('.squirrel-icon');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      squirrel.classList.add('animate-in');
      obs.unobserve(entry.target); // один раз
    }
  });
}, {
  threshold: 0.5 // спрацьовує коли 50% елемента видно
});

observer.observe(squirrel);