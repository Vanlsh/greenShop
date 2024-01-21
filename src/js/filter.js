const minRange = document.querySelector('#minRange');
const maxRange = document.querySelector('#maxRange');
const minPrice = document.querySelector('.js-prise-min');
const maxPrice = document.querySelector('.js-prise-max');
const track = document.querySelector('.js-filter-track');

const gap = 1000;

setMinRange({ value: minRange.value, max: minRange.max });
setMaxRange({ value: maxRange.value, max: maxRange.max });

minRange.addEventListener('input', event => {
  const { value, max } = event.target;
  setMinRange({ value, max });
});

maxRange.addEventListener('input', event => {
  const { value, max } = event.target;
  setMaxRange({ value, max });
});

function setMinRange({ value, max }) {
  let leftTrackPosition = (value / max) * 100;
  const maxRangeValue = maxRange.value;
  if (maxRangeValue - value < gap) {
    const limit = maxRangeValue - gap;
    minRange.value = limit;
    leftTrackPosition = (limit / max) * 100;
  }
  track.style.left = leftTrackPosition + '%';
  minPrice.textContent = minRange.value;
}

function setMaxRange({ value, max }) {
  const minRangeValue = minRange.value;
  let rightTrackPosition = 100 - (value / max) * 100;
  if (value - minRangeValue < gap) {
    const limit = gap + parseInt(minRangeValue);
    maxRange.value = limit;
    rightTrackPosition = 100 - (limit / max) * 100;
  }
  track.style.right = rightTrackPosition + '%';
  maxPrice.textContent = maxRange.value;
}

const filterList = document.querySelector('.filter-list');
const filterButton = document.querySelector('.js-filter-button');

filterList.addEventListener('change', e => {
  console.log(e.target);
});

// filterButton.addEventListener('click', () => {
//   const template = `
//    <li class="filter-item">
//         <input
//           type="radio"
//           name="categories"
//           id="accessories2"
//           value="accessories2"
//         />
//         <label for="accessories2" class="filter-item-button"
//           >Accessories<span>(33)</span></label
//         >
//       </li>
//   `;
//   filterList.insertAdjacentHTML('beforeend', template);
// });
