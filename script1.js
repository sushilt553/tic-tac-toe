let statusDisplay = document.querySelector(".game-status-display");

let gameActive = true;
let currentPlayer = "X";

const winningMessage = () => {
    return`Congrats, ${currentPlayer} won the game.`
}

const drawMessage = () => {
    return `The game is draw.`
}

const currentPlayerTurn = () => {
    return `It's ${currentPlayer}'s turn.`
}

statusDisplay.innerHTML = currentPlayerTurn();
let state = ["", "", "", "", "", "", "", "", ""]

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 5]
]

const switchPlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

const handleClickedCell = (e) => {
    let clickedCell = e.target;
    let clickedIndex = parseInt(clickedCell.getAttribute("data-cell-index"));

    if (state[clickedIndex] !== "" || !gameActive) return;

    state[clickedIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    checkResult();
}

const checkResult = () => {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        let winSlot = winningConditions[i];
        let a = state[winSlot[0]];
        let b = state[winSlot[1]];
        let c = state[winSlot[2]];

        if (a === "" || b === "" || c === "") continue;

        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    if (!state.includes("")) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    switchPlayer();
}

const restartGame = () => {
    gameActive = true;
    state = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll(".cell").forEach((cell) => cell.innerHTML = "");
}

document.querySelectorAll(".cell").forEach((cell) => cell.addEventListener("click", handleClickedCell));
document.querySelector(".restart-button").addEventListener("click", restartGame);