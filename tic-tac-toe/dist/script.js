var player1name;
var player2name;
var firstPlayer = player1name;
var player1 = 0; 
var player2 = 0;
var scoreX = 0;
var scoreO = 0;
var value = 0;
var player = "X";
var winner = "";
var winsArray = [7, 56, 448, 73, 146, 292, 273, 84];
var clickedArray = [];
var clicksCount = 0;
var currentPlayer;
var player1score = 0;
var player2score = 0;
var tieGameScore = 0;

function start() {
    player1name = prompt("Player One, Enter your Name: ");
    player2name = prompt("Player Two, Enter your Name: ");
    currentPlayer = player1name;
    document.getElementById("playerOneScoreHead").innerHTML = player1name + "'s Score";
    document.getElementById("playerTwoScoreHead").innerHTML = player2name + "'s Score";
    document.getElementById("player").innerHTML = currentPlayer + " choose a square";

}

function playerMoved(id, value) {
    if (id.innerHTML === "") {
        changeText(id);
        updateScore(value);
        if (player === "X") {
            check4winner(scoreX);
        } else
        {
            check4winner(scoreO);
        }
        if (winner !== "") {
            document.getElementById("winner").innerHTML = currentPlayer + " Won!";
            startNewGame();
        } else
        {
            changePlayer();
        }
        switchPlayer();
    }
}

function changeText(id) {

    if (id.innerHTML === "") {
        clickedArray[clicksCount] = id;
        clicksCount = clicksCount + 1;
        if (player === "X") {
            id.innerHTML = '<span style="font-size:65px;">X</span>';
        } else
        {
            id.innerHTML = '<span style="font-size:65px;">O</span>';
        }
    }
}
function switchPlayer() {

    if (currentPlayer === player1name) {
        currentPlayer = player2name;
    } else
    {
        currentPlayer = player1name;
    }
    document.getElementById("player").innerHTML = currentPlayer + " choose a square ";
}
function updateScore(value) {

    if (player === "X") {
        scoreX = scoreX + value;
    } else
    {
        scoreO = scoreO + value;
    }

}
function check4winner(score) {
    for (var i = 0; i < winsArray.length; i++) {
        if ((winsArray[i] & score) === winsArray[i]) {
            if (player === "X") {
                winner = "X";
                player1score++;
       document.getElementById('playerOneScore').innerHTML = player1score;

            } else
            {
                winner = "O";
                player2score++;
                           document.getElementById('playerTwoScore').innerHTML = player2score;
            }
            

        }
    }
    if (scoreX + scoreO >= 511 && winner!=="X" && winner!=="O") {
        document.getElementById('winner').innerHTML = "Tie Game!";
        tieGameScore ++;
        document.getElementById('tieGameScore').innerHTML = tieGameScore;
        startNewGame();
    }
}
function changePlayer() {
    if (player === "X") player = "O";
    else player = "X";
    document.getElementById("player").innerHTML = currentPlayer + " choose a square.";

}
function startNewGame() {
    winner = "";
    scoreO = 0;
    scoreX = 0;
    clicksCount = 0;
    for (i = 0; i < clickedArray.length; i++) {
        clickedArray[i].innerHTML = "";
    }
    if (firstPlayer === player1name) {
        firstPlayer = player2name;
    } else
    {
        firstPlayer = player1name;
    }
    currentPlayer = firstPlayer;
    document.getElementById("player").innerHTML = currentPlayer + " choose a square.";

}