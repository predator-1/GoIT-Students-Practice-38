const baseUrl = 'http://localhost:3030';
const pplBaseUrl = `${baseUrl}/ppl`;
const tokenKey = 'token';

export const getOptions = (method, postBody) => ({
  method,
  headers: {
    'Content-Type': 'Application/json',
  },
  body: JSON.stringify(postBody),
});

const getAuthOptions = (method, postBody) => {
  const options = getOptions(method, postBody);
  options.headers.Authorization = `Bearer ${localStorage.getItem(tokenKey)}`;
  return options;
};

// fetch(
//   `${baseUrl}/signin`,
//   getOptions('POST', {
//     email: 'abc@gmail.com',
//     password: '12345',
//   }),
// )
//   .then(r => {
//     if (r.ok) {
//       return r.json();
//     }

//     throw new Error('Auth error');
//   })
//   .then(({ accessToken }) => localStorage.setItem(tokenKey, accessToken));

// fetch(`${baseUrl}/register`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'Application/json',
//   },
//   body: JSON.stringify({
//     email: 'abc@gmail.com',
//     password: '12345',
//   }),
// })
//   .then(response => response.text())
//   .then(console.log)
//   .catch(console.log);

fetch(
  `${pplBaseUrl}`,
  getAuthOptions('POST', {
    name: 'Alis',
    age: 22,
  }),
)
  .then(response => response.text())
  .then(console.log)
  .catch(console.log);

fetch(`${pplBaseUrl}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
  },
})
  .then(response => response.text())
  .then(console.log)
  .catch(console.log);
