/**
 * Objects
 * 1. Add field 'mood' with value 'happy'
 * 2. Change 'hobby' value to 'skydiving'
 * 3. Change 'premium' to opposite value
 * 4. Get all 'user' keys and values
 */

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = !user.premium;

user.doAction = () => {
  return '123';
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user);
