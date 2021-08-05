// Find longest word

const findLongestWord = text => {
  if (!text) return 'Error!!!!111';

  const words = text.split(' ');
  let biggest = words[0];

  for (let i = 1; i < words.length; i += 1) {
    if (biggest.length < words[i].length) {
      biggest = words[i];
    }
  }

  return biggest;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
console.log(findLongestWord(''));
