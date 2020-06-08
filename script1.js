let statusDisplay = document.querySelector(".game-status-display");

let currentPlayer = "X";

const winningMessage = () => {
    statusDisplay = `Congrats, ${currentPlayer} won the game.`
}

const drawMessage = () => {
    statusDisplay = `The game is draw.`
}

const currentPlayerTurn = () => {
    return `It's ${currentPlayer}'s turn.`
}

const state = ["", "", "", "", "", "", "", "", ""]

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

    if (state[clickedIndex] !== "") return;

    state[clickedIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
