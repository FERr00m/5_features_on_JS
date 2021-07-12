'use strict';

const startBtn = document.getElementById('start'),
  screens = document.querySelectorAll('.screen'),
  timeList = document.getElementById('time-list'),
  timeEl = document.getElementById('time'),
  board = document.getElementById('board'),
  letters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let time = 0,
  score = 0;

startBtn.addEventListener('click', e => {
  e.preventDefault();

  screens[0].classList.add('up')
});

timeList.addEventListener('click', e => {
  if (e.target.classList.contains('time-btn')) {
    time = +e.target.getAttribute('data-time');
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', e => {
  if (e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});


function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}


function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else if (time > 0) {
    let current = --time;
  if (current < 10) {
    current = `0${current}`;
  }
  setTime(current);
  }
}


function setTime(value) {
  return timeEl.innerHTML = `00:${value}`;
}


function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
}


function createRandomCircle() {
  const circle = document.createElement('div'),
    size = getRandomNumber(10, 60),
    { width, height } = board.getBoundingClientRect(),
    x = getRandomNumber(0, width - size),
    y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.backgroundColor = `${getRandomColor()}`;
  
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  
  board.append(circle);
}


function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}


function getRandomColor() {
  let result = '#';
  for (let i = 0; i < 6; i++) {
    result +=letters[getRandomNumber(0, 15)];
  }
  return result;
}