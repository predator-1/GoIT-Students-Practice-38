/**
 * Найдите елемент с самой большой ценой price
 * Найдите самый минимальный price
 */

const phones = [
  { name: 'Huawei', price: 800 },
  { name: 'Apple', price: 1000 },
  { name: 'Samsung', price: 900 },
  { name: 'Apple', price: 1100 },
  { name: 'Samsung', price: 700 },
  { name: 'Apple', price: 800 },
  { name: 'Huawei', price: 950 },
  { name: 'Samsung', price: 1000 },
  { name: 'Huawei', price: 650 },
];

console.log('min', [...phones].sort((a, b) => a.price - b.price)[0]);
console.log('max', [...phones].sort((a, b) => b.price - a.price)[0]);

console.log(
  'min',
  phones.reduce((acc, item) => {
    return acc.price > item.price ? item : acc;
  }),
);

console.log(
  'max',
  phones.reduce((acc, item) => {
    return acc.price < item.price ? item : acc;
  }),
);
