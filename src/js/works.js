document.querySelectorAll(".compare").forEach(block => {
  const slider = block.querySelector(".slider");
  const after = block.querySelector(".after");
  const handle = block.querySelector(".glass-handle");
  
  let lastValue = slider.value;
  let ticking = false;

  function updateSlider() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        after.style.clipPath = `inset(0 ${100 - lastValue}% 0 0)`; // Плавне зміщення
        handle.style.left = `${lastValue}%`;  // Переміщуємо маркер ползунка
        ticking = false;
      });
      ticking = true;
    }
  }

  slider.addEventListener("input", (e) => {
    lastValue = e.target.value;
    updateSlider(); // Оновлюємо позицію зображення і маркера
  });
});