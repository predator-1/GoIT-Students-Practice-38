/**
 * Bind
 *
 * Создайте метод counter который будет из this брать i и увеличивать его на
 *      единицу. После возвращать i.
 * Используйте bind чтобы установить переменной i разные значения
 *
 * Выведите результат в консоль
 */

const counter = function () {
  return (this.i += 1);
};

const context = { i: 0 };

const counter1 = counter.bind(context);

console.log(counter1());
console.log(counter1());
context.i = 200;

console.log(counter1());
