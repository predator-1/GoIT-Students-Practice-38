/**
 * Create country search
 */

const listRef = document.querySelector('.country-list');
const searchRef = document.querySelector('.search');

searchRef.addEventListener('input', _.debounce(handleInput, 500));

function handleInput() {
    const searchText = this.value;
    const filteredCountries = countries.filter(country => {
        if(searchText === '') return true;

        return country.toLowerCase().startsWith(searchText.toLowerCase());
    });
    renderFilteredCountries(filteredCountries);
}

function renderFilteredCountries(filtered) {
    listRef.innerHTML = '';

    const countriesElements = filtered.map(createCountryElement);

    listRef.append(...countriesElements);
}

function createCountryElement(country) {
    const countryElem = document.createElement('h2');
    countryElem.classList.add('country');
    countryElem.textContent = country;
    return countryElem;
}

renderFilteredCountries(countries);