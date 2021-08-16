/**
 * - letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает коллбек ф-цию callback
 * - greet(name) - коллбек принимающий имя и логирующий в консоль строку "Привет" + name
 */

const letMeSeeYourName = callback => {
  const name = prompt('What is ur name?');
  callback(name);
};

const greetWithConsole = text => console.log(`Hello ${text}!`);

const greetInAlert = text => alert(`Hello ${text}!`);

letMeSeeYourName(greetInAlert);
