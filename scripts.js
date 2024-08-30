const buttons = document.querySelectorAll("button");
const pointsElement = document.querySelector("h2 span");

let points = 0;
let activeButtonIndex = -1;
let gameInterval;

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
    }, 800);
}

function startGame() {
    resetButtons();
    gameInterval = setIntarvel(startMole, moleActiveTime + );
    
}