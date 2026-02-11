import './js/mobile-menu.js';
import './css/styles.css';
import './js/dovira-agent.js';
import './js/works.js';
document.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector(".location-map");
  if (map) {
    if (!map.dataset.src) {
      map.dataset.src = map.src;
      map.src = ""; 
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            map.src = map.dataset.src;
            obs.unobserve(map);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(map);
  }
});
