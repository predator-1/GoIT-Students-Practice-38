const person = {
  fullname() {
    return `${this.firstName} ${this.lastName}`;
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

console.log(person.fullname.call(person1));
console.log(person.fullname.call(person2));
