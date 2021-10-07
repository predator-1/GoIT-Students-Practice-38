'use strict';
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
/**
 * TODO list with
 * 1. Saving data in local storage
 * 2. Removing btn
 */

import './styles.css';
import template from './todos.hbs';
import Storage from './storage';

const todoList = Storage.load() || [];
const container = document.querySelector('.todo-list');

document.forms.todos.addEventListener('submit', e => {
  e.preventDefault();

  todoList.push({
    id: Date.now(),
    value: e.target.elements.text.value,
  });

  e.target.elements.text.value = '';

  render(todoList);
});

const render = list => {
  Storage.save(list);
  container.innerHTML = '';
  container.insertAdjacentHTML(
    'beforeend',
    template({
      todos: list,
    }),
  );
  addRemove(list);
};

const addRemove = list => {
  list.forEach(l => {
    document.querySelector(`#btn-${l.id}`).addEventListener('click', () => {
      const tdListIndex = list.findIndex(i => i.id === l.id);
      if (tdListIndex > -1) {
        list.splice(tdListIndex, 1);
        render(list);
      }
    });
  });
};

render(todoList);
