import { getOptions } from './auth.service.js';

const baseUrl = 'http://localhost:3030';
const pplBaseUrl = `${baseUrl}/ppl`;
// POST

// const postBody = {
//   name: 'Ann',
//   age: 25,
// };

// fetch(`${baseUrl}/ppl`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'Application/json',
//   },
//   body: JSON.stringify(postBody),
// })
//   .then(response => response.text())
//   .then(console.log)
//   .catch(console.log);

// GET

// fetch(`${pplBaseUrl}/2`)
//   .then(response => response.text())
//   .then(console.log)
//   .catch(console.log);

// PATCH

// fetch(
//   `${pplBaseUrl}/2`,
//   getOptions('PATCH', {
//     age: 29,
//   }),
// )
//   .then(response => response.text())
//   .then(console.log)
//   .catch(console.log);

// PUT

// fetch(
//   `${pplBaseUrl}/2`,
//   getOptions('PUT', {
//     age: 31,
//     name: 'Alex',
//   }),
// )
//   .then(response => response.text())
//   .then(console.log)
//   .catch(console.log);

// DELETE

// fetch(`${pplBaseUrl}/2`, {
//   method: 'DELETE',
// })
//   .then(response => response.text())
//   .then(console.log)
//   .catch(console.log);
