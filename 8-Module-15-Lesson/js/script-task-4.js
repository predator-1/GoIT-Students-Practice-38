'use strict';

/**
 * Create debounce and throttle
 * Write in console scroll time
 */


const div = document.querySelector('#my-id');

const handleScroll = () => {
  console.log('scroll', new Date());
}

// div.addEventListener('scroll', _.throttle(handleScroll, 2000));
// div.addEventListener('scroll', _.debounce(handleScroll, 2000));
function throttle(callback, delay) {
  let id;

  return function() {
    if(id) {
      return;
    }

    id = setTimeout(() => {
      callback();
      id = 0;
    }, delay);
  }
}

// div.addEventListener('scroll', throttle(handleScroll, 2000));

function debounce(callback, delay) {
  let id;

  return function() {
    if(id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      callback();
      id = 0;
    }, delay);
  }
}

div.addEventListener('scroll', debounce(handleScroll, 2000));
