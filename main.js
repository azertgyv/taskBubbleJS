// FIRST HTML ( HEADER ) PAGE GETS !!!
const header = document.querySelector('header');
const boxContainer = document.getElementById('box-container');
const textBubble = document.getElementById('text-bubble');
const inputEnter = document.querySelector('input');
const startGame = document.getElementById('start-game');

// SECOND HTML ( HEADER2(section) ) PAGE GETS !!!

const header2 = document.getElementById('header2');
const secondBoxContainer = document.getElementById('second-box-container');
const headerText = document.getElementById('header-text');
const playerName = document.getElementById('player-name');
const playerScore = document.getElementById('player-score');
const playerHighScore = document.getElementById('player-hscore');
const gameBox = document.getElementById('game-box');
const levelButtons = document.getElementById('level-buttons');
const easyButton = document.getElementById('easy');
const mediumButton = document.getElementById('medium');
const hardButton = document.getElementById('hard');
const startStopButtons = document.getElementById('start-stop-buttons');
const playGame = document.getElementById('play-game');
const stopGame = document.getElementById('stop-game');

startGame.onclick = () => {
    header.style.display = 'none';
}

easyButton.onclick = () => {
    easyButton.style.background = '#4c91bc';
  
    mediumButton.style.background = '';
    hardButton.style.background = '';
  };

mediumButton.onclick = () => {
    mediumButton.style.background = '#4c91bc';
  
    easyButton.style.background = '';
    hardButton.style.background = '';
  };
  
  hardButton.onclick = () => {
    hardButton.style.background = '#4c91bc';
  
    easyButton.style.background = '';
    mediumButton.style.background = '';
  };

  playGame.onclick = () => {
    playGame.style.background = '#4c91bc';
   
    stopGame.style.background = '';
  };
  stopGame.onclick = () => {
    stopGame.style.background = '#4c91bc';
   
    playGame.style.background = '';
  };

let input = document.querySelector('input[type="text"]');
let startButton = document.getElementById('start-game');

startButton.addEventListener('click', function () {
    let name = input.value;
    playerName.textContent = 'Player: ' + name;
});

let score = 0;
const maxScore = 50; // Maximum score required to end the game

easyButton.addEventListener('click', function () {
    gameBox.innerHTML = '';

    score = 0;
    updateScore();

    const interval = setInterval(function () {
        let button = document.createElement('button');
        button.classList.add('yellow-circle');
        gameBox.appendChild(button);

        let randomX = Math.floor(Math.random() * (gameBox.offsetWidth - button.offsetWidth));
        let randomY = Math.floor(Math.random() * (gameBox.offsetHeight - button.offsetHeight));
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';

        button.addEventListener('click', function () {
            score++;
            updateScore();
            gameBox.removeChild(button);

            if (score === maxScore) {
                clearInterval(interval);
                endGame();
            }
        });

        setTimeout(function () {
            gameBox.removeChild(button);
        }, 50000);
    }, 2000);

    setTimeout(function () {
        clearInterval(interval);
        endGame();
    }, 100000000000);
});

function updateScore() {
    playerScore.textContent = 'Score: ' + score;
}

function endGame() {
    console.log('Game ended');
}

mediumButton.addEventListener('click', function () {
    gameBox.innerHTML = '';

    score = 0;
    updateScore();

    const interval = setInterval(function () {
        let button = document.createElement('button');
        button.classList.add('yellow-circle');
        gameBox.appendChild(button);

        let randomX = Math.floor(Math.random() * (gameBox.offsetWidth - button.offsetWidth));
        let randomY = Math.floor(Math.random() * (gameBox.offsetHeight - button.offsetHeight));
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';

        button.addEventListener('click', function () {
            score += 2;
            updateScore();
            gameBox.removeChild(button);

            if (score === maxScore) {
                clearInterval(interval);
                endGame();
            }
        });

        setTimeout(function () {
            gameBox.removeChild(button);
        }, 50000);
    }, 1000);

    setTimeout(function () {
        clearInterval(interval);
        endGame();
    }, 100000000000);
});

hardButton.addEventListener('click', function () {
    gameBox.innerHTML = '';

    score = 0;
    updateScore();

    const interval = setInterval(function () {
        let button = document.createElement('button');
        button.classList.add('yellow-circle');
        gameBox.appendChild(button);

        let randomX = Math.floor(Math.random() * (gameBox.offsetWidth - button.offsetWidth));
        let randomY = Math.floor(Math.random() * (gameBox.offsetHeight - button.offsetHeight));
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';

        button.addEventListener('click', function () {
            score += 3;
            updateScore();
            gameBox.removeChild(button);

            if (score === maxScore) {
                clearInterval(interval);
                endGame();
            }
        });

        setTimeout(function () {
            gameBox.removeChild(button);
        }, 50000);

    }, 500);

    setTimeout(function () {
        clearInterval(interval);
        endGame();
    }, 100000000000);
});

