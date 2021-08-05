// Reference and value types
const mathMarks = [['1', '2', '3']];

const mathMarks2 = mathMarks.slice();

mathMarks2.push(2, 3);
mathMarks2[0] = mathMarks2[0].slice();
mathMarks2[0].push('new str');

console.log('mathMarks2', mathMarks2);
console.log('mathMarks', mathMarks);
