import './js/filter.js';

const headerBurger = document.querySelector('.header-burger');
const closeHeaderBurger = document.querySelector('#close-header-burger');
const openHeaderBurger = document.querySelector('#header-open-burger');

closeHeaderBurger.addEventListener('click', () => {
  headerBurger.classList.remove('is-open');
});

openHeaderBurger.addEventListener('click', () => {
  headerBurger.classList.add('is-open');
});
