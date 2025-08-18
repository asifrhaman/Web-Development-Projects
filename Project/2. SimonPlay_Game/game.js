let gameSeq = [];
let userSeq = [];
let btns = ['yellow', 'green', 'red', 'purple'];
let started = false;
let level = 0;

let h2 = document.querySelector('h2');

// Start game on key press
document.addEventListener('keypress', function () {
    if (!started) {
        console.log('Game started');
        started = true;
        levelUp();
    }
});

// Function to flash the game button
function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(() => btn.classList.remove('flash'), 250);
}

// Function to flash when user clicks
function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(() => btn.classList.remove('userFlash'), 250);
}

// Increase level and add new button to sequence
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.getElementById(randColor);
    gameSeq.push(randColor);

    console.log('Game sequence:', gameSeq);
    gameFlash(randBtn);
}

// Check if user input is correct
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score: ${level}<br>Press any key to restart.`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "white", 200);
        resetGame();
    }
}

// When user clicks a button
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

// Add click event to all buttons
let allBtns = document.querySelectorAll('.btn');
allBtns.forEach(btn => btn.addEventListener('click', btnPress));

// Reset game
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}