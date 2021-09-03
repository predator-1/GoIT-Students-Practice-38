/**
 * Создать массив из N элементов и запонить его значениями
 * { index: текущий_индекс }
 */

const createArraySimple = number => {
  const array = [];
  for (let i = 0; i < number; i++) {
    array[i] = { index: i };
  }
  return array;
};

const createArray = number => {
  return Array(number)
    .fill('')
    .map((_, index) => ({
      index,
    }));
};

console.log(createArraySimple(4));
console.log(createArray(4));
