const timerBox = document.querySelector('.todo .timer');

function timerPlay() {
  const date = new Date();
  let minutes = date.getMinutes();
  let hour = date.getHours() % 12;
  minutes = minutes.toString().padStart(2, '0');
  hour = hour ? hour : 12;

  const time = `${hour} : ${minutes}`;
  timerBox.children[0].innerText = time;
}

export default timerPlay;
