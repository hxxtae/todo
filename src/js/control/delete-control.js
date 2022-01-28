import { userTodoKey } from '../constants/base.js';
import render from '../render.js';

const todoDeleteButtonM = document.querySelector('.todo .todo-control .delete');
const todoDeleteButtonD = document.querySelector('.todo-user .todo-enter .delete-enter');
const ul = document.querySelector('.todo ul');

function onDeleteMode() {
  const addName = 'is-delete';
  const color = ['#A4193D', 'transparent'];
  ul.classList.toggle(addName);

  const nameChk = ul.className.split(' ').indexOf(addName);
  if (nameChk !== -1) {
    todoDeleteButtonM.style.backgroundColor = color[0];
    todoDeleteButtonD.style.backgroundColor = color[0];
  } else {
    todoDeleteButtonM.style.backgroundColor = color[1];
    todoDeleteButtonD.style.backgroundColor = color[1];
  }
}

function onDelete(e) {
  const deleteBtn = ul.querySelector('li .ic-close');
  const thisNode = deleteBtn.tagName;
  const target = e.target;
  if (target.nodeName !== thisNode) {
    return;
  }
  
  const deleteId = target.parentElement.parentElement.id;
  const todolist = JSON.parse(localStorage.getItem(userTodoKey));
  const newTodolist = JSON.stringify(todolist.filter(item => item.id !== parseInt(deleteId)));
  localStorage.setItem(userTodoKey, `${newTodolist}`);
  render();
}

export function todoDeleteOnOff() {
  todoDeleteButtonM.addEventListener('click', onDeleteMode);
  todoDeleteButtonD.addEventListener('click', onDeleteMode);
}

export function todoDelete() {
  ul.addEventListener('click', onDelete);
}
