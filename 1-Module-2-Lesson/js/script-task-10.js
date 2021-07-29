let serverResponse = null;
let defaultValue = 'server unavaliable';

//const response = serverResponse ?? defaultValue;

const response =
  serverResponse === null || serverResponse === undefined
    ? defaultValue
    : serverResponse;

console.log(response);

// 8.48
