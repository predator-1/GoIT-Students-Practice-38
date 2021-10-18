// for(let i =3; i>0; i--) {
//     setTimeout(() => console.log(i), i * 1000);
// }
// setTimeout 3 sec - 3
// setTimeout 2 sec - 2
// setTimeout 1 sec - 1

for(var i = 0; i<3; i++) {
    setTimeout(() => console.log(i), 0);
}

console.log('i', i);
// переделать не используя let и const оставив setTimeout чтобы выдало 0 1 2
// внутри цикла for

// https://learn.javascript.ru/event-loop