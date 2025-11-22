document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.pathname.endsWith("/") && !window.location.pathname.endsWith("index.html")) return;

  const target = document.querySelector(".h-brands");
  if (!target) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add("animate");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.4 });

  observer.observe(target);
});