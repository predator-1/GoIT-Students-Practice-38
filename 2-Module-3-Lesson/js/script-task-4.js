/**
 * Create function that returns smallest value
 */
'use strict';

const min = function (a, b) {
  if (a > b) {
    return b;
  }
  return a;
};

// function min(a, b) {
//   if (a > b) {
//     return b;
//   }
//   return a;
// }

console.log(min(1, 4));
console.log(min(3, 2));
console.log(min(-1, -5));

// function min(a, b) {
//   return 0;
// }
