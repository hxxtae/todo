const todoDeleteButtonM = document.querySelector('.todo .todo-control .delete');
const todoDeleteButtonD = document.querySelector('.todo-user .todo-enter .delete-enter');

function onDeleteMode() {
  const todolist = document.querySelector('.todo .todo-box ul');
  const addName = 'is-delete';
  const color = ['#A4193D', 'transparent'];
  todolist.classList.toggle(addName);

  const nameChk = todolist.className.split(' ').indexOf(addName);
  if (nameChk !== -1) {
    todoDeleteButtonM.style.backgroundColor = color[0];
    todoDeleteButtonD.style.backgroundColor = color[0];
  } else {
    todoDeleteButtonM.style.backgroundColor = color[1];
    todoDeleteButtonD.style.backgroundColor = color[1];
  }
}

export function todoDeleteOnOff() {
  todoDeleteButtonM.addEventListener('click', onDeleteMode);
  todoDeleteButtonD.addEventListener('click', onDeleteMode);
}
