/**
 * Create infinity scroll of countries
 */
const COUNTRY_SEGMENT_COUNT = 10;
let startIndex = 0;

const listRef = document.querySelector('.country-list');

function isScrollToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function createCountryElement(country) {
  const countryElem = document.createElement('h2');
  countryElem.classList.add('country');
  countryElem.textContent = country;
  return countryElem;
}

function renderPartOfCountries() {
  const partOfCountries = 
    countries.slice(startIndex, startIndex + COUNTRY_SEGMENT_COUNT)
    .map(createCountryElement);
    listRef.append(...partOfCountries);
    startIndex += COUNTRY_SEGMENT_COUNT;
}

renderPartOfCountries();

const scrollHandler = () => {
  if(!isScrollToBottom()) return;

  renderPartOfCountries();

  if(startIndex >= countries.length) {
    window.removeEventListener('scroll', scrollHandler);
  }
};

// window.addEventListener('scroll', scrollHandler);
window.addEventListener('scroll', _.throttle(scrollHandler, 200));