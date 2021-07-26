// Опертор %
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

const total = 430;
const hours = Math.floor(total / 60);
const minutes = total % 60;

const digitHoursTotal = `${hours}`.padStart(2, 0);
const digitMinutesTotal = `${minutes}`.padStart(2, 0);

console.log(`${digitHoursTotal}:${digitMinutesTotal}`);
