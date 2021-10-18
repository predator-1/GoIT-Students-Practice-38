const id = setTimeout(() => console.log('event fired!'), 1000);
console.log(id);
clearTimeout(id);