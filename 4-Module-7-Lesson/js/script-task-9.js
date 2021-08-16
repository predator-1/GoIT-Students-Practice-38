// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }
// const messages = orders.map(function (order, index, orders) {
//     return composeMessage.call(order, index + 1);
// });

const personFactory = (firstName, lastName, year) => {
  return {
    firstName,
    lastName,
    year,
  };
};

const persons = [];
persons.push(personFactory('Maria', 'Ivanova', 1900));
persons.push(personFactory('Ivan', 'Ivanov', 1910));
persons.push(personFactory('Vera', 'Ivanova', 1920));

// const personsFullInfo = [];
// for (let person of persons) {
//   // personsFullInfo.push(`${person.firstName} ${person.lastName} ${person.year}`);
//   personsFullInfo.push({
//     fist: person.firstName,
//     last: person.lastName,
//   });
// }

// const personsFullInfo = persons.map((person, index, fullArray) => {
//   return `${index} ${person.firstName} ${person.lastName} ${person.year}`;
// });

// console.log(personsFullInfo);

for (let i = 0; i < persons.length; i += 1) {
  console.log(
    `${i} ${persons[i].firstName} ${persons[i].lastName} ${persons[i].year}`,
  );
}

persons.forEach((person, i) =>
  console.log(`${i} ${person.firstName} ${person.lastName} ${person.year}`),
);
