// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

const positiveNums = [4, 6, 7, 3, 9];
const positiveAndNegativeNums = [4, -6, -7, -3, 9];

// Проверьте то, что все элементы в массиве больше нуля.
console.log(
  'positive every positiveNums',
  positiveNums.every(x => x > 0),
);

console.log('positive some positiveNums', !positiveNums.some(x => x <= 0));

console.log(
  'positive positiveAndNegativeNums',
  positiveAndNegativeNums.every(x => x > 0),
);

console.log(
  'positive some positiveAndNegativeNums',
  !positiveAndNegativeNums.some(x => x <= 0),
);

// Проверьте то, что в нем есть отрицательные элементы.

console.log('negative every positiveNums', !positiveNums.every(x => x >= 0));

console.log(
  'negative some positiveNums',
  positiveNums.some(x => x < 0),
);

console.log(
  'negative positiveAndNegativeNums',
  !positiveAndNegativeNums.every(x => x >= 0),
);

console.log(
  'negative some positiveAndNegativeNums',
  positiveAndNegativeNums.some(x => x < 0),
);

// Посчитайте количество отрицательных чисел в этом массиве.
const sumReduce = (acc, item) => (item < 0 ? ++acc : acc);
const sumFilter = item => item < 0;
console.log('negative count positiveNums', positiveNums.reduce(sumReduce, 0));

console.log(
  'negative count positiveAndNegativeNums',
  positiveAndNegativeNums.reduce(sumReduce, 0),
);

console.log(
  'negative filter count positiveNums',
  positiveNums.filter(sumFilter).length,
);

console.log(
  'negative filter count positiveAndNegativeNums',
  positiveAndNegativeNums.filter(sumFilter).length,
);
