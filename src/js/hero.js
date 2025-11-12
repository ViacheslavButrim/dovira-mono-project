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

// автоперемикання
setInterval(() => changeSlide(1), 7000);