document.addEventListener("DOMContentLoaded", () => {
const target = document.querySelector(".h-brands");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add("animate");
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.4 
  });

  observer.observe(target);
});
