// Destruction objects

const account = {
  balance: 100,
  credit: 50,
  bonus: 75,
};

const { balance } = account;
const balance = account.balance;

const salaries = [90, 100, 110];
const [low, mid, hight] = salaries;

console.log(low, mid, hight);
