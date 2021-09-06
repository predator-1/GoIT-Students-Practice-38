// Создайте записную книжку куда можно
// внести имя и номер телефона человека
// найти имя по номеру
// показать количество контактов
// удалить контакт по номеру
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// class Contacts {
//   #constacts = {};

//   add(phone, name) {
//     this.#constacts = {
//       [phone]: name,
//     };
//   }

//   get count() {
//     return Object.keys(this.#constacts).length;
//   }

//   findContact(phone) {
//     return this.#constacts[phone];
//   }
// }

class Contacts {
  #constacts = new Map();

  add(phone, name) {
    this.#constacts.set(phone, name);
  }

  get count() {
    return this.#constacts.size;
  }

  findContact(phone) {
    return this.#constacts.get(phone);
  }
}

const contacts = new Contacts();
contacts.add(38099, 'Alex');
console.log(contacts.count);
console.log(contacts.findContact(38099));
