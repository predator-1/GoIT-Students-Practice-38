/**
 * Пример 2 - перепишите классы  Worker, Boss 
    с использованием классов

class A {
  constructor() {
    console.log('A created');
  }
}

class B extends A {
  constructor() {
    super();
    console.log('B created');
  }
}

const a1 = new A();
const b1 = new B();
*/

class Worker {
  constructor({ rate, days }) {
    this._rate = rate;
    this._days = days;
  }

  getSalary() {
    return this._rate * this._days;
  }
}

class Boss extends Worker {
  constructor({ rate, days, workersCount }) {
    super({ rate, days });
    this._workersCount = workersCount;
  }

  getSalary() {
    return super.getSalary() * this._workersCount;
  }
}

const worker = new Worker({
  rate: 10,
  days: 20,
});

const boss = new Boss({
  rate: 10,
  days: 20,
  workersCount: 5,
});

console.log('Boss', boss.getSalary());
console.log('worker', worker.getSalary());
