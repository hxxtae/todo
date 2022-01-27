const test = localStorage.getItem('userid');

const joinForm = document.querySelector('.todo-user .join');
const loginForm = document.querySelector('.todo-user .login');
const todoSection = document.querySelector('.todo');

if (test) {
  joinForm.classList.add('is-hidden');
  loginForm.classList.add('is-active');
  todoSection.classList.add('is-active');

} else {
  joinForm.classList.remove('is-hidden');
  loginForm.classList.remove('is-active');
  todoSection.classList.remove('is-active');
}
