const animal = { name: 'Tuzik' };
const dog = Object.create(animal);
animal.name = 'PalkanXXL';

console.log(dog.name);
