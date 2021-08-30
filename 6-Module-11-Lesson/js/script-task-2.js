// Напишите функцию filterRange(arr, min, max),
// которая принимает массив arr,
// ищет в нём элементы между a и b
// и отдаёт массив этих элементов.
// Функция должна возвращать новый массив
// и не изменять исходный.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterRange = (arr, min, max) => {
//   const result = [];

//   for (const num of arr) {
//     if (num >= min && num <= max) result.push(num);
//   }

//   return result;
// };

// const filterRange = (arr, min, max) => {
//   const result = [];

//   arr.forEach(num => {
//     if (num >= min && num <= max) result.push(num);
//   });

//   return result;
// };

const isInRange = (min, max) => num => num >= min && num <= max;

const filterRange = (arr, min, max) => arr.filter(isInRange(min, max));

console.table(filterRange(numbers, 3, 7));
