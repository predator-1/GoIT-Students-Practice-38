/**
 * https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Object_prototypes
 * Создайте конструктор объекта page со свойствами links[] и photos[]
 * добавьте к прототипу объекта методы которые выведут количество
 * links и photos
 */
const Page = function (links, photos) {
  this.links = links;
  this.photos = photos;
  this.getPhotosCount = function () {
    return this.photos.length;
  };
};

Page.prototype.getLinksCount = function () {
  return this.links.length;
};

const page = new Page(['123', '345'], ['223', '334', '445']);
const page2 = new Page(['123'], ['223', '445']);

//console.log(page.getLinksCount());
//console.log(page.getPhotosCount());

page.__proto__.getAllCount = function () {
  return this.links.length + this.photos.length;
};
// console.log(page.getAllCount());

console.log(page2.getAllCount());
