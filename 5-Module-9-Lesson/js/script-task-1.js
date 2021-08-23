/**
 * http://fecore.net.ua/books/m5ph3r-javascript/module-02/scope.html
 * http://fecore.net.ua/books/m5ph3r-javascript/module-04/closures.html
 * Измените анонимную функцию которая присваивается к result[i]
 * так, чтобы в результате в консоли мы послучили числа от 0 до 4 включительно
 */

const result = [];

// for (var i = 0; i < 5; i++) {
//   result[i] = function (number) {
//     console.log(number);
//   }.bind(null, i);
// }

// console.log(i);

// for (var i = 0; i < 5; i++) {
//   result[i] = (
//     number => () =>
//       console.log(number)
//   )(i);
// }

// for (var i = 0; i < 5; i++) {
//   const callback = number => {
//     return () => console.log(number);
//   };

//   result[i] = callback(i);
// }

for (var i = 0; i < 5; i++) {
  const currentI = i;
  result[i] = function () {
    console.log(currentI);
  };
}

result[0](); // 5, ожидаем 0
result[1](); // 5, ожидаем 1
result[2](); // 5, ожидаем 2
result[3](); // 5, ожидаем 3
result[4](); // 5, ожидаем 4

/*
let instance = null;
console.log(typeof instance === 'object');
*/
