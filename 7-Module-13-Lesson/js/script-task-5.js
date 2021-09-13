/**
 * Set class 'red-score' to score under 10
 * Set class 'green-score' to other score
 */

const table = document.querySelector('table');

const lines = table.querySelectorAll('td');
lines.forEach(el => {
    const innerNumber = parseInt(el.innerText);
    console.log(innerNumber, el.innerText);
    if(!Number.isNaN(innerNumber)) {
        if(innerNumber < 10) {
            el.classList.add('red-score');
        } else {
            el.classList.add('green-score');
        }
    }
});


// покрасить в цвет еще и название страны. цвет такой же как и число.