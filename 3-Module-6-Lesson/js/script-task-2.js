// Spread
// Right order

const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true, legs: 2 };

const chimera = {
  ...eagle,
  ...lion,
};

console.log(chimera);
