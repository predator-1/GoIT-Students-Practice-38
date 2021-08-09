const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
  'name of this': 'value of this',
  thisIsUnd: undefined,
};

const print = hotel => {
  let name = hotel.name;
  name += ' top';
  console.log('name', hotel.name);
  console.log('stars', hotel.stars);
  console.log('capacity', hotel.capacity);
};

const printDestr = ({ name, stars, v1 }) => {
  name += ' top';
  console.log('name', name);
  console.log('stars', stars);
  console.log('v1', v1);
  // console.log('capacity', capacity);
};

// print(hotel);
//printDestr(hotel);
//console.log('hotel', hotel);

console.log(hotel.name);
console.log(hotel['name of this']);
console.log(hotel.thisIsUnd);
