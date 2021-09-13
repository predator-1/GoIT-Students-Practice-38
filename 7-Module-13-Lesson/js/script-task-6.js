const heading = document.createElement('h1');
console.log(heading); // <h1></h1>

heading.textContent = 'This is a heading';
console.log(heading); // <h1>This is a heading</h1>

document.body.appendChild(heading);

var t = 123;