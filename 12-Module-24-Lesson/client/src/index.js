// create infinity cat scroll
import './style.css';
import { getCat } from './request.service';
import $ from 'jquery';

const getHtmlImg = url => {
  return `<li><img style="width: 400px" src=${url} /></li>`;
};

const CATS_COUNT = 5;

const loader = $('#loader');
const anchor = $('#anchor');
const catsList = $('.cats-list');

let isLoading = false;

const showLoader = () => {
  loader.show();
  isLoading = true;
};

const hideLoader = () => {
  loader.hide();
  isLoading = false;
};

const getCats = count => {
  const promises = [];
  for (let i = 0; i < count; i++) {
    promises.push(getCat());
  }
  return Promise.all(promises);
};

const render = () => {
  showLoader();
  getCats(CATS_COUNT)
    .then(result => result.map(cat => getHtmlImg(cat.url)))
    .then(result => catsList.append(...result))
    .then(() => hideLoader());
};

document.querySelector('.load').addEventListener('click', () => {
  render();
});

const loadCats = ([entrie]) => {
  if (isLoading) return;

  if (entrie.isIntersecting) render();
};

const observer = new IntersectionObserver(loadCats, {
  threshold: 0.5,
});

observer.observe(anchor.get(0));
