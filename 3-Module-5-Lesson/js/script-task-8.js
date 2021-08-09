const alisa = {
  sayPassword() {
    return '123';
  },
};

const sunduk = {
  [alisa.sayPassword()]: 'treasure',
};

console.log(sunduk[alisa.sayPassword()]);
