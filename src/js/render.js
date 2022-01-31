import template from './render-template.js';
import { loginFormChange, loginFormSubmit } from './login.js';
import { todoOpenPopup, todoClosePopup } from './control/popup-control.js';
import { todoDeleteOnOff, todoDelete } from './control/delete-control.js';
import { todoAddSubmit } from './control/add-control.js';
import { todoCheckSubmit } from './control/check-control.js';
import { userNameKey, userTodoKey } from './constants/base.js';
import timerPlay from './util/clock.js';

const joinForm = document.querySelector('.todo-user .join');
const loginForm = document.querySelector('.todo-user .login');
const todoSection = document.querySelector('.todo');

function onUsername() {
  const username = localStorage.getItem(userNameKey);
  const userNameTag = loginForm.querySelector('.todo-user-name');
  userNameTag.innerText = `${username}`;
}

function onUserTodo() {
  const usertodo = localStorage.getItem(userTodoKey);
  if (!usertodo) {
    return;
  }

  const todolist = JSON.parse(usertodo);
  const ul = todoSection.querySelector('.todo-list');
  let li = '';
  todolist.forEach(item => {
    const id = item.id;
    const desc = item.desc;
    const chk = item.chk;
    li += template(id, desc, chk);
  });

  const newdiv = document.createElement('div');
  newdiv.innerHTML = li;
  ul.innerHTML = newdiv.innerHTML;
}

// function onUserForm() {

// }

function render() {
  const username = localStorage.getItem(userNameKey);
  if (username) {
    joinForm.classList.add('is-hidden');
    loginForm.classList.add('is-active');
    todoSection.classList.add('is-active');
    // [userInfo API]
    // LocalStorage
    onUsername();
    onUserTodo();
    // [popup]
    // Event(button)
    todoOpenPopup();
    todoClosePopup();

    // [delete]
    // Event(button)
    todoDeleteOnOff();
    todoDelete();

    // [add]
    // Event(button)
    todoAddSubmit();

    // [check]
    // Event(checkbox)
    todoCheckSubmit();

    // [any]
    timerPlay();
    setInterval(timerPlay, 500);
  
  } else {
    joinForm.classList.remove('is-hidden');
    loginForm.classList.remove('is-active');
    todoSection.classList.remove('is-active');
    // [start]
    // Event(input & form)
    loginFormChange();
    loginFormSubmit();
  }
}

export default render;
