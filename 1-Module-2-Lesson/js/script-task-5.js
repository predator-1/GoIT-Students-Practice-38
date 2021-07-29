// При помощи цикла for выведите чётные числа от 2 до 10.
// O(n/2)
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

//// O(n)
for (let i = 2; i <= 10; i += 1) {
  if (!(i % 2)) {
    console.log(i, 'четная');
    continue;
  }
  console.log(i, 'не четная');
}
