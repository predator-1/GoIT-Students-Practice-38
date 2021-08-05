/**
 * Find smallest number in array
 */

const array1 = [2, 17, 94, 1, 23, 37];
const array2 = [49, 4, 83, 7, 12];

const minInArray = function (array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
};

console.log(minInArray(array1));
console.log(minInArray(array2));
