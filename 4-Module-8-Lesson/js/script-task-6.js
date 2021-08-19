/**
 * Создайе функцию hostGuests которая вернет имя дома и гостей в нем
 * вызовите ее с помощью call и apply задав контекст и гостей как аргумент
 */

const hostGuests = function (...currentGuests) {
  return `${this.house} with ${currentGuests.join(', ')}`;
};

const place = { house: 'Palace' };

const guests = ['Anna', 'Jack', 'Jimm'];

// console.log(hostGuests.call(place, ...guests, 'Tom'));
console.log(hostGuests.apply(place, [...guests, 'Tom']));
