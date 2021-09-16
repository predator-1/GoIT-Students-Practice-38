/**
 * Show hidden popup on blur
 */

const inputRef = document.querySelector('input');
const popupRef = document.querySelector('.js-popup');
const popupTextRef = document.querySelector('#js-popup-text');

const handleClosePopup = e => {
  if (e.code === 'Escape') {
    popupRef.classList.remove('popup-open');

    document.removeEventListener('keydown', handleClosePopup);
  }
};

inputRef.addEventListener('blur', function () {
  popupRef.classList.add('popup-open');
  popupTextRef.textContent = this.value;
  document.addEventListener('keydown', handleClosePopup);
});
