const todoAddButton = document.querySelector('.todo .todo-control .add');
const popup = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function onPopup() {
  overlay.classList.add('is-active');
  popup.classList.add('is-active');
}

function onClose() {
  overlay.classList.remove('is-active');
  popup.classList.remove('is-active');
}

export function todoOpenPopup() {
  todoAddButton.addEventListener('click', onPopup);
}

export function todoClosePopup() {
  const closeButton = document.querySelector('.sidebar .add-close i');
  closeButton.addEventListener('click', onClose);
}

export function closePopup() {
  onClose();
}
