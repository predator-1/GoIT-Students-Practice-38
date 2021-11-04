const url = 'http://localhost:3030';

const getFetchOptions = (method, body) => {
  return {
    method,
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify(body),
  };
};

const getFetchAuthOptions = (method, body, token) => {
  const options = getFetchOptions(method, body);
  options.headers.Authorization = `Bearer ${token}`;
  return options;
};

export const registerUser = (email, password) => {
  return fetch(`${url}/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export const login = (email, password) => {
  return fetch(
    `${url}/login`,
    getFetchOptions('POST', {
      email,
      password,
    }),
  );
};

export const addPost = (post, token) => {
  return fetch(`${url}/posts`, getFetchAuthOptions('POST', post, token));
};

export const getPosts = token => {
  return fetch(`${url}/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
