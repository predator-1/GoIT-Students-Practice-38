/**
 * Создайте корабль который умеет стрелять и отнаследуйте от него
 * боевой корабль
 */

const Ship = function (country, captain, price) {
  this.country = country;
  this.captain = captain;
  this.price = price;
};

Ship.prototype.fire = function () {
  console.log(`Hi from ${this.country}`);
};

const WarShip = function (armor, ...args) {
  Ship.apply(this, args);
  this.armor = armor;
};

WarShip.prototype = Object.create(Ship.prototype);
WarShip.prototype.constructor = WarShip;

const ws = new WarShip(999, 'US', 'Jack Sparrow', '$9999999');
ws.fire();
