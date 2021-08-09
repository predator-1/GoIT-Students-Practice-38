/**
 * 'this' context
 */

'use strict';

const dog = {
  name: 'Tuzik',
};

const cat = {
  name: 'Pushok',
};

const myName = function () {
  console.log(`My name is ${this.name}`);
};

dog.myName = myName;
cat.myName = myName;

dog.myName();
cat.myName();
console.log(dog);
