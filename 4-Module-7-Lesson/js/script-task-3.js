/**
 * - makeProduct(name, price, callback) - принимает имя и цену товара, а также колбек.
 *         Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство
 *         id и вызывает колбек передавая ему созданный обьект.
 * - showProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
 */

const makeProductFactory = () => {
  let counter = 0;
  return (name, price, callback) => {
    callback({
      name,
      price,
      id: counter++,
    });
  };
};

const showProduct = product => console.log(product);

const makeProduct = makeProductFactory();
const makeProduct2 = makeProductFactory();

makeProduct('apple', 100, showProduct);
makeProduct('pine', 200, showProduct);
makeProduct('orange', 80, showProduct);
makeProduct2('melon', 180, showProduct);
