// Шаблонные строки и конкатенация строк. Методы строк.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

const username = 'Fedor';
const age = 5;
const hobby = 'swim';

const messageSchema = `My name is ${username}, I'm ${age} and I like to ${hobby}`;
const messageSchema2 =
  'My name is ' + username + ", I'm " + age + ' and I like to ' + hobby;

// console.log(messageSchema);
// console.log(messageSchema2);

console.log(messageSchema.length);
console.log(messageSchema.split(' '));
