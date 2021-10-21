/**
 * Find the differences between all, allSettled, any, race
 * https://learn.javascript.ru/promise-api#promise-allsettled
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/any 
 * 
 */
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello');
        // reject('error')
    }, 500); // 2 sec
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('from');
    }, 1000); // .5 sec
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('Promise');
       // reject('error')
    }, 2000); // 1 sec
});

// promise1.then(console.log);
// promise2.then(console.log);
// promise3.then(console.log);

// Promise.all([promise1, promise2, promise3])
//   .then((arr) => console.log(arr.join(' ')))
//   .catch(console.log);

// Promise.allSettled([promise1, promise2, promise3])
//    .then((arr) => console.log(arr))
//    .catch(console.log);

// Promise.any([promise1, promise2, promise3])
//   .then((val) => console.log(val))
//   .catch(console.log);

Promise.race([promise1, promise2, promise3])
  .then((val) => console.log('val', val))
  .catch((err) => console.log('err', err));