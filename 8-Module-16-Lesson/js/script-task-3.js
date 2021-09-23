/**
 * Create infinity scroll of countries with IntersectionObserver
 */
const COUNTRY_SEGMENT_COUNT = 10;
let startIndex = 0;

const listRef = document.querySelector('.country-list');
const anchorRef = document.querySelector('.anchor');

const observer = new IntersectionObserver(observerHandler, {
    threshold: 0,
});

observer.observe(anchorRef);

function observerHandler([entrie], observerRef) {
    if(!entrie.isIntersecting) return;

    renderPartOfCountries();

    if(startIndex >= countries.length) {
        observerRef.unobserve(anchorRef);
    }
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