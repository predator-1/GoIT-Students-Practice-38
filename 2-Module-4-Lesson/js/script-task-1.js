// Table task

const medalsReverse = [
  ['Country', 'Ukraine', 'Canada', 'USA', 'Germany'],
  ['Hokey', 1, 10, 6, 4],
  ['Football', 5, 2, 1, 3],
  ['Volleyball', 3, 4, 2, 8],
];

let counter = 0;

for (let i = 0; i < medalsReverse[0].length; i++) {
  let lineTxt = '';
  for (let y = 0; y < medalsReverse.length; y++) {
    lineTxt += String(medalsReverse[y][i]).padStart(12, ' ');
    counter++;
  }
  console.log(lineTxt);
}
console.log(counter);
