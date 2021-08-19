/**
 * Исправь ошибки и модифицируй
 */

const myself = {
  myName: 'Anna',
  myNickNames: ['Kitty', 'Dorsy'],
  printMyNickNames() {
    for (const nickName of this.myNickNames) {
      const print = nick => {
        console.log(this.myName + ' is also known as ' + nick);
      };
      print(nickName);
    }
  },
};

myself.printMyNickNames();
