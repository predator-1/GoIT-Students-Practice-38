//Arrow refactoring

const checkNumbers = (a, b) =>
  a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;

const mult = (x, y, z) => x * y * z;

console.log(mult(1, 2, 3));
console.log(checkNumbers(4, 5));

const muplPlusSpmething = (funMult, plus) => funMult(1, 2) + plus;

console.log(muplPlusSpmething((a, b) => a * b, 10));

console.log(
  muplPlusSpmething(function (a, b) {
    return a * b;
  }, 10),
);
