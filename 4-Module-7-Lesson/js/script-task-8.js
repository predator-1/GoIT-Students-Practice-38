const person = {
  fullname(year) {
    return `${this.firstName} ${this.lastName} ${year}`;
  },
};

const personFactory = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};

const person1 = personFactory('Ivan', 'Ivanov');
const person2 = personFactory('Maria', 'Ivanova');

console.log(person.fullname.call(person1, 1990));
console.log(person.fullname.apply(person2, [1991]));
