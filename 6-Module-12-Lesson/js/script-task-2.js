// Выполнить сортировку массива названий мониторов
// в алфавитном и обратном алфавитном порядке.

const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];
const items2 = ['Huawei', 'Apple', 'ASUS', 'dell', 'BENQ'];

/**
В sql запросах используют ASC и DESC для сортировки результатов выборки из базы данных.
ASC
ASCending переводится, как: восходящий, поднимающийся возрастающий.

DESC
DESCending переводится, как: нисходящий, убывающий, падающий.
 */

function ascCompare(prev, next) {
  return prev.toLowerCase() > next.toLowerCase() ? 1 : -1;
}

function descCompare(prev, next) {
  return prev.toLowerCase() < next.toLowerCase() ? 1 : -1;
}

console.table(items.sort(ascCompare));
console.table(items2.sort(ascCompare));

console.table(items.sort(descCompare));
console.table(items2.sort(descCompare));
