/**
 * Create promise that will be resolved in [0, 5) seconds
 * and rejected in [5, 10) seconds. Catch success and error
 */

export function getRandomArbitarary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// const promiseFunc = new Promise((resolve, reject) => {
//     const num = getRandomArbitarary(5, 10);
//     setTimeout(() => num < 5 ? resolve(num) : reject(num), num * 100);
// });

// promiseFunc.then(
//     success => console.log('success', success),
//     error => {
//         console.log('1', error);
//         throw new Error('fvck up');
//     },
// ).catch(error => console.log('2', error));