/**
 * This calculator
 */
'use strict';

const calculator = {
  first: 0,
  second: 0,
  read(a, b) {
    this.first = a;
    this.second = b;
  },
  mult() {
    return this.first * this.second;
  },
  sum() {
    return this.first + this.second;
  },
};

calculator.read(3, 5);
// console.log(calculator.mult());
// console.log(calculator.sum());

const sum = calculator.sum;

console.log(sum());
