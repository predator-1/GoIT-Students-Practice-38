// Определение типа значения, оператор typeof

// Примитивный (встроенный, базовый) тип — тип данных, предоставляемый языком программирования как базовая встроенная единица языка.
// Все используемые данные в javascript имеют определенный тип. В JavaScript имеется пять примитивных типов данных:
// String: представляет строку
// Number: представляет числовое значение
// Boolean: представляет логическое значение true или false
// undefined: указывает, что значение не установлено
// null: указывает на неопределенное значение
// Все данные, которые не попадают под вышеперечисленные пять типов, относятся к типу object

// const productName = 'Mango';
// console.log("const productName = 'Mango';");
// console.log(typeof productName);

// const pricePerItem = 150;
// console.log('const pricePerItem = 150;');
// console.log(typeof pricePerItem);

// const isOnSale = false;
// console.log('const isOnSale = false;');
// console.log(typeof isOnSale);

// const error = null;
// console.log('const error = null;');
// console.log(typeof error);

// let quantity;
// console.log('let quantity;');
// console.log(typeof quantity);

function getPI() {
  return Math.PI;
}
console.log(`function getPI() {
    return Math.PI;
}`);
console.log(typeof getPI);
