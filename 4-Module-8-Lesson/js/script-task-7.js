/**
 * Создайте функцию myPassword(password) которая будет хранить
 * внутри password и вернет объект с функцией guessPassword(testPassword), которая
 * вернет true если testPassword и password внутри функции совпадут
 * и false если не совпадут
 */

const myPassword = function (password) {
  return testPassword => password === testPassword;
};

const savedPassword = myPassword('myPass');

console.log(savedPassword('gegreg'));
console.log(savedPassword('myPass'));
