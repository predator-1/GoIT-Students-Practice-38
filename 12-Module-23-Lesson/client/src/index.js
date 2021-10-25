// create todo list

import './styles.scss';
import { getNotes, addNote, deleteNote, updateNote } from './request.service';
import todosItemTemplate from './todoItem.hbs';

const refs = {
  inputForm: document.querySelector('.input-form'),
  todoList: document.querySelector('.todo-list'),
  loader: document.querySelector('.loader'),
};

let todos = [];

const renderList = () => {
  refs.todoList.innerHTML = '';
  refs.todoList.insertAdjacentHTML(
    'beforeend',
    todos.map(todosItemTemplate).join(''),
  );
  refs.todoList.style.display = 'block';
};

const showLoader = () => {
  refs.loader.classList.add('show');
};

const hideLoader = () => {
  refs.loader.classList.remove('show');
};

const loadTodos = () => {
  return getNotes().then(resp => {
    todos = resp;
    renderList();
  });
};

const updateTodoList = () => {
  showLoader();
  return loadTodos().then(hideLoader);
};

refs.inputForm.addEventListener('submit', e => {
  e.preventDefault();
  const textInput = e.target.elements.text;
  const text = textInput.value;

  if (!text) return;

  addNote(text)
    .then(updateTodoList)
    .then(() => (textInput.value = ''));
});

refs.todoList.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    return;
  }

  const parent = e.target.closest('.todo-item');
  const id = parent.dataset.id;

  switch (e.target.nodeName) {
    case 'BUTTON':
      deleteNote(id).then(updateTodoList);
      break;
    case 'INPUT':
      updateNote({ id, text: 'Done!' }).then(updateTodoList);
      return;
  }
});

updateTodoList();
