// add posts from form to db
import { registerUser, login, addPost, getPosts } from './db.service.js';

const email = 'user@gmail.com';
const password = 'pwd12345';
const key = 'token';

// (async () => {
//   const resp = await registerUser(email, password);
//   const respJson = await resp.json();
//   console.log(respJson);
// })();

const getAuthToken = async () => {
  const token = localStorage.getItem(key);
  if (token) return token;

  const authResp = await login(email, password);
  const { accessToken } = await authResp.json();

  localStorage.setItem(key, accessToken);
  return accessToken;
};

document.forms.addPost.addEventListener('submit', async e => {
  e.preventDefault();
  const textArea = e.target.postText;
  const token = await getAuthToken();
  const resp = await (await addPost({ value: textArea.value }, token)).json();
  textArea.value = '';
  console.log(resp);
  await update();
});
const getHtmlItem = text => `<li>${text}</li>`;
const list = document.querySelector('#list');

const update = async () => {
  const token = await getAuthToken();
  const posts = await getPosts(token);
  if (posts.ok) {
    const postsJson = await posts.json();
    list.innerHTML = '';
    list.insertAdjacentHTML(
      'beforeend',
      postsJson.map(p => getHtmlItem(p.value)).join(''),
    );
  }
};

update();
