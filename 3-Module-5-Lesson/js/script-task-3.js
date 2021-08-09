/**
 * Func that returns total price from array by name
 */

const stones = [
  { name: 'Emerald', price: 1300, quantity: 4 }, // Изумруд
  { name: 'Diamond', price: 2700, quantity: 3 }, // Бриллиант
  { name: 'Sapphire', price: 400, quantity: 7 }, // Сапфир
  { name: 'Crushed stone', price: 200, quantity: 2 }, // Щебень
];

const calcTotalPrice = (stones, stoneName) => {
  if (!stones || (stones && !stones.length)) return 0;

  if (!stoneName) return 0;

  for (let stone of stones) {
    if (stone.name === stoneName) {
      return stone.quantity * stone.price;
    }
  }

  return 0;
};

console.log(calcTotalPrice(stones, 'Diamond'));
console.log(calcTotalPrice(stones, 'Crushed stone'));
console.log(calcTotalPrice(stones, 'Emerald'));
console.log(calcTotalPrice(stones, 'Sapphire'));
console.log(calcTotalPrice(null, 'Sapphire'));
console.log(calcTotalPrice([], 'Sapphire'));
console.log(calcTotalPrice(stones, ''));
console.log(calcTotalPrice(stones, 'www'));
/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
Создать функцию которая будет выводить общую цену за все камни по названию камня
например calcTotalPrice(stonesObject, 'emerald') выведет в консоль 5200.
Подумайте что может пойти не так во время выполнения вашей функции и выведите
в консоль ошибки.

const calcTotalPrice = (stones, stoneName) => {
  console.log('not implemented');
};

const stonesObject = {
  emerald: { price: 1300, quantity: 4 },
  diamond: { price: 2700, quantity: 3 },
  sapphire: { price: 400, quantity: 7 },
  crushedStone: { price: 200, quantity: 2 },
};

console.log(stonesObject, 'emerald'); // 5200
*/
