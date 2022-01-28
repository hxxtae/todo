import template from './render-template.js';
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
    onUsername();
    onUserTodo();
    timerPlay();
  
  } else {
    joinForm.classList.remove('is-hidden');
    loginForm.classList.remove('is-active');
    todoSection.classList.remove('is-active');
  }
}

export default render;
