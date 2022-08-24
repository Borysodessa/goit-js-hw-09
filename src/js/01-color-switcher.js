const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', onStart);

function onStart() {
  timerId = setInterval(() => {
    bodyEl.setAttribute('style', `background-color: ${getRandomHexColor()}`)
  }, 1000);
  startBtn.removeEventListener('click', onStart);
}

stopBtn.addEventListener('click', onStop);

function onStop() {
  clearTimeout(timerId);
}



