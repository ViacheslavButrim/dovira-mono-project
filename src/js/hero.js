const hero = document.querySelector('.section-hero');
const images = [
  './happy-family-min.jpg',
  './child-min.jpg',
  './doctror-min.jpg',
  './girl-min.jpg'
];

let index = 0;
hero.style.backgroundImage = `url(${images[index]})`;

function changeSlide(n) {
  index = (index + n + images.length) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}

// універсальна функція створення кнопки зі спрайта
function createArrow(direction, iconId, handler) {
  const button = document.createElement('button');
  button.className = `hero-arrow ${direction}`;
  button.innerHTML = `
    <svg class="arrow-icon" width="24" height="24" aria-hidden="true">
      <use href="./img/icons.svg#${iconId}"></use>
    </svg>
  `;
  button.addEventListener('click', handler);
  return button;
}

const leftArrow = createArrow('left', 'icon-ileft', () => changeSlide(-1));
const rightArrow = createArrow('right', 'icon-iright', () => changeSlide(1));

hero.append(leftArrow, rightArrow);

// автоперемикання
setInterval(() => changeSlide(1), 7000);