// Вы пригласили гостей и хотите посчитать их на входе
// Гости иногда выходят из дома и возвращаются (предотвратить повторы)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

class TikTokHouse {
  #guests; // ['Vasya', 'Petia']

  constructor() {
    // this.#guests = [];
    this.#guests = new Set();
  }

  //   addGuest(guest) {
  //     if (this.#guests.indexOf(guest) === -1) {
  //       this.#guests.push(guest);
  //     }
  //   }

  addGuest(guest) {
    this.#guests.add(guest);
  }

  get guestsCount() {
    // return this.#guests.length;
    return this.#guests.size;
  }
}

const house = new TikTokHouse();

house.addGuest('Vasya');
house.addGuest('Petia');
house.addGuest('Vasya');

const guest3 = { name: 'Klara' };
house.addGuest(guest3);
house.addGuest(guest3);

console.log(house.guestsCount);
