'use strict';

const fullname = function () {
  return `${this.firstname} ${this.lastname}`;
};

const personFactory = (firstname, lastname) => ({
  firstname,
  lastname,
});

const person1 = personFactory('Ivan', 'Ivanov');
const person2 = personFactory('Maria', 'Ivanova');

person1.fullname = fullname;
person2.fullname = fullname;

console.log(person1.fullname());
console.log(person2.fullname());

const person1Fullname = () => person1.fullname();
console.log(person1Fullname());
