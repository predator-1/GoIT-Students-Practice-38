const key = 'bank-users';

export default class MyStorage {
  static save(users) {
    localStorage.setItem(key, JSON.stringify(users));
  }

  static load() {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (ex) {
      console.log(ex);
      return [];
    }
  }
}
