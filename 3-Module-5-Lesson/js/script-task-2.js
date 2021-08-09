/**
 * Object values
 * 1. Get min salary
 * 2. Get max salary
 * 3. Get total
 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const values = Object.values(salaries);

let min = values[0];
let max = values[0];
let total = 0;

for (let value of values) {
  if (min > value) {
    min = value;
  }

  if (max < value) {
    max = value;
  }

  total += value;
}

console.log('min', min);
console.log('max', max);
console.log('total', total);

console.log('Math.min', Math.min(...values));
console.log('Math.min', Math.max(...values));
