/**
 * Crete page with images in modal window
 * User can change image with button <- and ->
 */

const imagesRef = document.querySelectorAll('.promo-image');
const modalRef = document.getElementById('modal-window');
const modalContentRef = document.getElementById('modal-content');
const dataSources = [];

imagesRef.forEach(element => {
  dataSources.push(element.dataset.source);
  element.addEventListener('click', function (e) {
    modalRef.style.display = 'block';
    modalContentRef.src = element.dataset.source;
  });
});

modalRef.querySelector('.close').addEventListener('click', () => {
  modalRef.style.display = 'none';
});

document.addEventListener('keydown', e => {
  const currentIndex = dataSources.indexOf(modalContentRef.src);
  if (e.key === 'ArrowLeft') {
    leftClick(currentIndex);
  } else if (e.key === 'ArrowRight') {
    rightClick(currentIndex);
  }
});

function leftClick(currentIndex) {
  let nextIndex = currentIndex - 1;
  if (nextIndex === -1) {
    nextIndex = dataSources.length - 1;
  }
  modalContentRef.src = dataSources[nextIndex];
}

function rightClick(currentIndex) {
  let nextIndex = currentIndex + 1;
  if (nextIndex === dataSources.length) {
    nextIndex = 0;
  }
  modalContentRef.src = dataSources[nextIndex];
}
