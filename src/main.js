import './js/mobile-menu.js';
import './css/styles.css';
import './js/brands.js';
import './js/dovira-agent.js';

// main.js 
document.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector(".location-map");

  if (map) {
    // Зберігаємо оригінальний src у data-src
    if (!map.dataset.src) {
      map.dataset.src = map.src;
      map.src = ""; // вимикаємо завантаження до скролу
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            map.src = map.dataset.src; // Завантажуємо карту
            obs.unobserve(map);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(map);
  }
});
