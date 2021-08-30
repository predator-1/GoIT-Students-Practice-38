/**
 * Написать функцию которая определит массив
 * содеражщий только цифры
 */
const array1 = [2, 4, '1', true];
const array2 = [2, 4, 1];

const isNumberArray = array => {
  return array.every(value => typeof value === 'number');
  // return array.some(value => typeof value !== 'number');
};

console.log(isNumberArray(array1));
console.log(isNumberArray(array2));
