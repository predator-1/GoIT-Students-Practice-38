/**
 * Создайте конструтор объекта User который будет принимать
 * access и отнаследуйте от него Manager который будет принимать еще
 * documents.
 * Создайте 2 экзепляра и найдите среди них User.
 */
const User = function (access) {
  this.access = access;
};

User.prototype.work = () => {};

const Manager = function (access, documents) {
  User.call(this, access);
  this.documents = documents;
};

const user1 = new User(10);
const user2 = new User(15);
const user3 = new User(20);

const manager1 = new Manager(15, 3);
const manager2 = new Manager(20, 4);

const array = [user1, manager1, user2, manager2, user3];

for (const item of array) {
  if (!item.hasOwnProperty('documents')) {
    console.log(item, 'this is user');
  }
}
