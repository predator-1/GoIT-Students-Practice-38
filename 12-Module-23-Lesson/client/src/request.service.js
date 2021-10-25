// import $ from 'jquery';

export const getNotes = () => {
  return fetch('api/notes').then(response => response.json());
  //   return new Promise((res, rej) => {
  //     $.get('api/notes', data => {
  //       res(data);
  //     }).fail(resp => rej(resp));
  //   });
};

export const getNote = id => {
  return fetch(`api/notes/${id}`).then(response => response.json());
};

export const addNote = text => {
  return fetch('api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({ text }),
  }).then(response => response.json());
};

export const updateNote = ({ id, text }) => {
  return fetch(`api/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({ text }), // "{"text": "...."}"
  }).then(response => response.json());
};

export const deleteNote = id => {
  return fetch(`api/notes/${id}`, {
    method: 'DELETE',
  }).then(response => response.ok);
};
