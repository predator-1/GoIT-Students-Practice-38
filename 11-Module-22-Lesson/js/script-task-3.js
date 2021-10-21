/**
 * Wait when all 3 images will be downloaded
 */

const images = [
  'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/1photo-1622495546323-5dac33dedb01?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
  'https://images.unsplash.com/photo-1623405076123-cab57d53f7ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
];


const getImage = src => {
  const img = document.createElement('img');

  img.src = src;
  img.width = 500;
  img.height = 300;

  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = () => reject('Load aborted');
  })
}

// Promise.all(images.map(getImage))
// .then(imgList => document.body.append(...imgList))
// .catch((error) => console.log('Oooops', error));

Promise.allSettled(images.map(getImage))
.then(imgList => imgList.filter(img => img.status === 'fulfilled'))
.then(imgList => imgList.map(img => img.value))
.then(imgList => document.body.append(...imgList))
.catch((error) => console.log('Oooops', error));