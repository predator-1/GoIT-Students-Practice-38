/**
 * Create heads and tails (with edge state) 
 * game with promise and setTimeout
 */

import { getRandomArbitarary } from './script-task-1.js';

const array = ['heads', 'tails', 'edge'];

const getRandomPromise = () => {
    return new Promise(resolve => {
        const rndIndex = getRandomArbitarary(0, array.length);
        setTimeout(resolve, 1000, array[rndIndex]);
    })
};
// const rndIndex = getRandomArbitarary(0, array.length);
// setTimeout(console.log, 1000, array[rndIndex]);

getRandomPromise().then(console.log);