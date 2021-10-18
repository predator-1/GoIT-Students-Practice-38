import { getDays, getHours, getMins, getSeconds } from './script-task-1.js'

const template = value => `
<div class="timer">
<span class="value">${value}</span>
</div>
`

const newYearDate = new Date('01/01/2022');

// someDate - currentDate 

export default function Timer({selector}) {
    document.querySelector(selector).insertAdjacentHTML('beforeend', template('0 days 0 hours 0 mins 0 seconds'));

    const valueRef = document.querySelector('.value');

    const changeValue = (value) => valueRef.textContent = value;


    let id = 0;

    this.start = () => {
        if(id) return; 

        id = setInterval(() => {
            changeValue(getTimeDiff());
        }, 100);
    }

    this.stop = () => {
        clearInterval(id);
        id = 0;
    }

}



const getTimeDiff = () => {
    const diff = newYearDate - new Date();

    const days = getDays(diff);
    const hours = getHours(diff);
    const mins = getMins(diff);
    const seconds = getSeconds(diff);

    return `${days} days ${hours} hours ${mins} mins ${seconds} seconds`
}