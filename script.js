'use strict';
// Declaring Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// Main Logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // If you don't put any value
  if (!guess) {
    document.querySelector('.message').textContent = '❌ Pls input a value';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎊 You guess the correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background =
      'linear-gradient(rgb(51, 255, 0), rgb(11, 134, 0))';
    document.querySelector('.reset').style.color = 'rgb(51, 255, 0)';
    document.querySelector('.check').style.color = 'rgb(51, 255, 0)';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    // If the inputed value is higher
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game';
    }
  } else if (guess < secretNumber) {
    // If the inputed value is lower
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game';
    }
  }
});

// Reset Logic
document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background =
    'linear-gradient(rgb(255, 0, 200), rgb(145, 6, 103))';
  document.querySelector('.reset').style.color = 'rgb(255, 0, 200)';
  document.querySelector('.check').style.color = 'rgb(255, 0, 200)';
});
