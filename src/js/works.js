document.querySelectorAll(".compare").forEach(block => {
  const slider = block.querySelector(".slider");
  const after = block.querySelector(".after");
  const handle = block.querySelector(".glass-handle");

  slider.addEventListener("input", e => {
    const v = e.target.value;
    after.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
    handle.style.left = v + "%";
  });
});