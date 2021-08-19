/**
 * Области применения 'use strict'
 * Поробовать использовать глобально и внутри функции.
 * Вывести все возможные this в консоль
 */

function test() {
  console.log(this);
  return () => {
    console.log(this);
  };
}

console.log(this);

test()();
