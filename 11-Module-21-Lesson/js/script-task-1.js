/**
 * You have current UTC. Write func for getting
 * 1. Days
 * 2. Hours
 * 3. Mins
 * 4. Seconds
 */

// 1634578029713

export const getDays = time => Math.floor(time / (1000 * 60 * 60 * 24));

// console.log(getDays(1634578029713));

export const getHours = time =>
        Math.floor(time % (1000 * 60 * 60 * 24) / (1000*60*60) );

// console.log(getHours(1634578029713));

export const getMins = time =>  Math.floor(time % (1000 * 60 * 60) / (1000*60) );

// console.log(getMins(1634578675084));

export const getSeconds = time =>  Math.floor(time % (1000 * 60 ) / 1000 );

// console.log(getSeconds(1634578675084));