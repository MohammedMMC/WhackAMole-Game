const buttons = document.querySelectorAll("button");
const pointsElement = document.querySelector("h2 span");

let points = 0;
let activeButtonIndex = -1;
let gameDuration = 30000;
let moleActiveTime = 800;
let gameInterval;
let gameTimeout;
let gameStarted = false;

function resetButtons() {
    buttons.forEach(button => {
        button.style.backgroundColor = "grey";
        button.style.backgroundImage = "none";
        button.disabled = false;
    });
}

function startMole() {
    if (activeButtonIndex !== -1) {
        buttons[activeButtonIndex].style.backgroundImage = "none";
        buttons[activeButtonIndex].style.backgroundColor = "grey";
        buttons[activeButtonIndex].disabled = true;
        activeButtonIndex = -1;
    }

    activeButtonIndex = Math.floor(Math.random() * buttons.length);
    buttons[activeButtonIndex].style.backgroundImage = "url('./mole.png')";
    buttons[activeButtonIndex].disabled = false;

    setTimeout(() => {
        if (activeButtonIndex !== -1) {
            buttons[activeButtonIndex].style.backgroundImage = "none";
            buttons[activeButtonIndex].style.backgroundColor = "grey";
            buttons[activeButtonIndex].disabled = true;
            activeButtonIndex = -1;
        }
    }, moleActiveTime);
}

function clickedButton(button) {
    const clickedIndex = [...buttons].indexOf(button);

    if (clickedIndex === activeButtonIndex) {
        points++;
        pointsElement.textContent = points;

        buttons[activeButtonIndex].style.backgroundImage = "none";
        buttons[activeButtonIndex].style.backgroundColor = "grey";
        buttons[activeButtonIndex].disabled = true;
        activeButtonIndex = -1;
    }
}

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        points = 0;
        pointsElement.textContent = points;
        resetButtons();

        gameInterval = setInterval(startMole, moleActiveTime + 200);

        gameTimeout = setTimeout(() => {
            clearInterval(gameInterval);
            alert(`Game Over! Your final score is ${points}`);
            resetGame();
        }, gameDuration);
    }
}

function resetGame() {
    resetButtons();
    clearInterval(gameInterval);
    clearTimeout(gameTimeout);
    points = 0;
    pointsElement.textContent = points;
    gameStarted = false;
    buttons[4].style.backgroundImage = "none";
    buttons[4].style.backgroundColor = "lime";
    buttons[4].innerText = "START!";
    buttons[4].disabled = false;
}

window.onload = () => {
    resetGame();
    buttons.forEach(button => {
        button.onclick = () => { clickedButton(button); };
    });

    buttons[4].onclick = () => {
        if (!gameStarted) {
            buttons[4].disabled = true;
            buttons[4].innerText = "";
            startGame();
        }
    };
};
