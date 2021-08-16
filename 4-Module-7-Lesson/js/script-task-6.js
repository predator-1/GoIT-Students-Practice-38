/**
 * Closure
 *
 * Сделайте так чтобы функция в последней
 * итерации отадала 3
 */

function addFactory() {
  let counter = 0;
  return () => ++counter;
}

const add = addFactory();

add();
add();
console.log(add()); // 3
