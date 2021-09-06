// Замыкания
// Напишите функцию для хранения скидки.
// Функция возвращает другую функцию,
// которая принимает сумму покупки
// и возвращает финальную сумму с сохранённой скидкой.

function applyDiscount(discount) {
  return function (price) {
    return (price * (100 - discount)) / 100;
  };
}

const withBaseDiscount = applyDiscount(5);
console.log(withBaseDiscount(100));
const withSilverDiscount = applyDiscount(15);
console.log(withSilverDiscount(100));
