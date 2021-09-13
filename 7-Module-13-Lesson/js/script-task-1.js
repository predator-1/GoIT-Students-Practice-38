/**
 * We have a list of elements on html page
 * 1. Print a text content of elements
 * 2. Add element 'Coke'
 * 2. Color text in list in red
 */

const elements = document.querySelectorAll('li');
elements.forEach(el => console.log(el.textContent));

const li = document.createElement('li');

// li.innerText = 'Coke';
li.appendChild(document.createTextNode('Coke'));
const parent = document.querySelector('ul');

parent.append(li);
// parent.appendChild(li);
// parent.append('<li>Coke</li>');
// parent.insertAdjacentHTML('beforeend', '<li>Coke</li>');
// parent.insertAdjacentHTML('beforeend', li);

document.querySelectorAll('li').forEach(el => el.style.color = 'Red');

var t = 123;