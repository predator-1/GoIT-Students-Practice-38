/**
 * Напиши класс Storage который создаёт объекты для управления складом товаров.
 * При вызове будет получать один аргумент - начальный массив товаров,
 * и записывать его в свойство items.
 * Добавь методы класса:
 * getItems() - возвращает массив товаров.
 * addItem(item) - получает новый товар и добавляет его к текущим.
 * removeItem(item) - получет товар и, если он есть, удаляет его из текущих.
 */

class MyStorage {
  constructor(items) {
    this._items = items ?? [];
  }

  addItem(item) {
    this._items.push(item);
  }

  getItems() {
    return this._items;
  }

  removeItem(item) {
    const index = this._items.indexOf(item);
    if (index > -1) {
      this._items.splice(index, 1);
    }
  }
}

const myStorage = new MyStorage(null);
myStorage.addItem('laptop');
myStorage.addItem('pc');
myStorage.addItem('ps5');

console.log(myStorage.getItems());
myStorage.removeItem('ps5');
myStorage.removeItem('ps4');

console.log(myStorage.getItems());
