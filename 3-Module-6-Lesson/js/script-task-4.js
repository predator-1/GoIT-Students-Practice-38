/**
 * Object clone
 */

const cat = {
  paws: 4,
  color: 'blue',
  name: 'Murka',
};

const catCopy = {
  ...cat,
  name: 'Leon',
};

cat.color = 'red';

console.log(cat);
console.log(catCopy);
