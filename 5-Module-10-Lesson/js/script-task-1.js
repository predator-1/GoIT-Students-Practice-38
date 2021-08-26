class UserMain {
  get value() {
    return this._value;
  }
}

class User extends UserMain {
  constructor(val) {
    super();
    this._counter = 0;
    this._value = val;
  }

  get value() {
    this._counter++;
    return this._value * 2;
  }
}

const user = new User(123);
console.log(user.value);
