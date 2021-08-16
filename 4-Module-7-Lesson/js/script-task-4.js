/**
 *
 * - Выполните рефакторинг функции makeDishWithShef(shefName, dish) так,
 *      чтобы не нужно было каждый раз передавать имя шефа.
 * - Напишите функцию makeShef(shefName), которая возвращает другую
 *      функцию makeDish(dish), помнящую имя шефа при её вызове.
 */
function makeDishWithShef(shefName, dish) {
  console.log(`Шеф ${shefName} готовит ${dish}`);
}

makeDishWithShef('Поли', 'пирожок');
makeDishWithShef('Поли', 'чай');
makeDishWithShef('Манго', 'тортик');
makeDishWithShef('Манго', 'кофе');
