/**
 * Array-like object arguments
 */

const argFunc = function () {
  //for (const item of arguments) console.log(item);
  //for (let i = 0; i < arguments.length; i++) console.log(arguments[i]);

  const array = Array.from(arguments);
  arguments[arguments.length] = 'new';
  console.log(arguments);
  console.log(array);
};

argFunc(1, 3, 2, 0);
// console.log([1, 3, 2, 0]);

/*
"const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
*/
