'use strict';
/**
 * Create bank manager panel
 * Manager can add user with fields 'Firstname' 'Lastname'. Field 'Status' will be init by default value
 * Status has values 'Pending', 'Approved', 'Blocked'. Status 'Pending' is default
 * Manager can change user status at any time
 * Save all data to a disk
 */

import './styles.css';
import template from './user.hbs';
import MyStorage from './storage';

const container = document.querySelector('#root');

document.forms.addUser.addEventListener('submit', e => {
  e.preventDefault();

  addUser(e.target.elements.firstname.value, e.target.elements.lastname.value);
  e.target.elements.firstname.value = '';
  e.target.elements.lastname.value = '';
  render();
});

const users = MyStorage.load() ?? [];

function addUser(firstname, lastname) {
  users.push({
    firstname,
    lastname,
    status: 'Pending',
    id: Date.now(),
  });
}

function render() {
  MyStorage.save(users);
  container.innerHTML = '';
  container.insertAdjacentHTML(
    'beforeend',
    template({
      users,
      options: ['Pending', 'Approved', 'Blocked'],
    }),
  );
  setEvents();
}

function setEvents() {
  users.forEach(u => {
    const select = document.querySelector(`#select-${u.id}`);
    select.value = u.status;
    select.addEventListener('change', e => {
      u.status = e.target.value;
      render();
    });
  });
}

render();
