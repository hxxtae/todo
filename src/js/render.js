const username = localStorage.getItem('userid');

const joinForm = document.querySelector('.todo-user .join');
const loginForm = document.querySelector('.todo-user .login');
const todoSection = document.querySelector('.todo');

function onUsername() {
  const userNameTag = loginForm.querySelector('.todo-user-name');
  userNameTag.innerText = `${username}`;
}

function onUserTodo() {
  
}

function render() {
  if (username) {
    joinForm.classList.add('is-hidden');
    loginForm.classList.add('is-active');
    todoSection.classList.add('is-active');
    onUsername();
  
  } else {
    joinForm.classList.remove('is-hidden');
    loginForm.classList.remove('is-active');
    todoSection.classList.remove('is-active');
  }
}

export default render;
