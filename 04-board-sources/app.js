'use strict';

const board = document.getElementById('board'),
  letters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  SQARES_NUMBER = 500;

for (let i = 0; i < SQARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}


function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}


function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function getRandomColor() {
  let result = '#';
  for (let i = 0; i < 6; i++) {
    result +=letters[getRandomInt(0, 16)];
  }
  return result;
}
