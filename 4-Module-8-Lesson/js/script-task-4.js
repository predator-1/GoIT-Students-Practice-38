/**
 * Исправь ошибки и модифицируй
 */

const myself = {
  myName: 'Anna',
  myNickNames: ['Kitty', 'Dorsy'],
  printMyNickNames: () => {
    'use strict';
    for (const nickName of this.myNickNames) {
      const print = function (nick) {
        console.log(this.myName + ' is also known as ' + nick);
      };
      print(nickName);
    }
  },
};

myself.printMyNickNames();
