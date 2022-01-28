import render from '../render.js';
import { closePopup } from './popup-control.js';
import { userTodoKey } from '../constants/base.js';

const todoAddFormM = document.querySelector('.sidebar #sidebarForm');
const todoAddFormD = document.querySelector('.todo-user #todoForm');
const todoTextAreaM = document.querySelector('.sidebar textarea');
const todoTextAreaD = document.querySelector('.todo-user textarea');

function todoSetData(obj) {
  const todoStr = JSON.stringify(obj);
  localStorage.setItem(userTodoKey, `${todoStr}`);
}

function todoInputDataSet(input) {
  const storageData = localStorage.getItem(userTodoKey);
  const inputData = input;
  const data = {
    id: Date.now(),
    desc: inputData,
    chk: ''
  };
  
  if (!storageData) {
    const todoObj = [];
    todoObj.push(data);
    todoSetData(todoObj);
  } else {
    const todoObj = JSON.parse(storageData);
    todoObj.push(data);
    todoSetData(todoObj);
  }
}

function onSubmitM(e) {
  e.preventDefault();
  const inputData = todoTextAreaM.value;
  todoInputDataSet(inputData);
  closePopup();
  render();
  todoTextAreaM.value = '';
}

function onSubmitD(e) {
  e.preventDefault();
  const inputData = todoTextAreaD.value;
  todoInputDataSet(inputData);
  render();
  todoTextAreaD.value = '';
}

export function todoAddSubmit() {
  todoAddFormM.addEventListener('submit', onSubmitM);
  todoAddFormD.addEventListener('submit', onSubmitD);
}

