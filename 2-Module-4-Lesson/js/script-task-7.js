//Arrow refactoring

const checkNumbers = function (a, b) {
  return a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;
};

const mult = function (x, y, z) {
  return x * y * z;
};

console.log(mult(1, 2, 3));
console.log(checkNumbers(4, 5));
