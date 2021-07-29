// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
// If expr1 can be converted to true, returns expr1; else, returns expr2.

let serverResponse = '';
let defaultValue = 'number of users';

const response = serverResponse ?? defaultValue;

console.log(response);
