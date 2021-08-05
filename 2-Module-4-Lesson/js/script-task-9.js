// Find palindrome

const isPalindrome = text => {
  if (!text) return false;

  const oneWord = text.toLowerCase().split(' ').join('');
  for (let i = 0; i < oneWord.length / 2; i += 1) {
    if (oneWord[i] !== oneWord[oneWord.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome('Sore was I ere I saw Eros')); // true
console.log(isPalindrome('Sor1e was I ere I saw Eros')); // false
console.log(isPalindrome(''));
console.log(isPalindrome('a aa ab b ba aaa'));
console.log(isPalindrome('ab aa ab b ba aaa'));
console.log(isPalindrome('Murder for a jar of red rum'));
