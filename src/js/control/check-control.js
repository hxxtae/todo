import { userTodoKey } from '../constants/base.js'

const ul = document.querySelector('.todo ul');

function onChecked(e) {
  const todoObj = JSON.parse(localStorage.getItem(userTodoKey));
  const target = e.target;
  const targetId = parseInt(target.id);
  const targetChk = target.checked;
  const newTodo = todoObj.map(item => {
    if (targetId === parseInt(item.id)) {
      if (targetChk) {
        return { ...item, chk: 'checked' }
      } else {
        return { ...item, chk: '' }
      }
    } else {
      return item;
    }
  });
  const todoStr = JSON.stringify(newTodo);
  localStorage.setItem(userTodoKey, `${todoStr}`);  
}

export function todoCheckSubmit() {
  ul.addEventListener('change', onChecked);
}

