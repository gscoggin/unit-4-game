//###############################################
// Set global variables for crystal game 
//###############################################
var targetNumber;
var diamondNumber;
var emeraldNumber;
var topazNumber;
var sapphireNumber;
var userGuess;
var wins = 0;
var loses = 0;
var winAudio = new Audio('assets/audio/chaChing.mp3');
console.log(winAudio);
var loseAudio = new Audio('assets/audio/sadLose.mp3');
console.log(loseAudio);

//###############################################
// Functions for crystal game 
//###############################################

// gameStart randomly sets a targetNumber, crystal numbers and resets userGuess
function gameStart() {
    targetNumber = Math.floor((Math.random() * 120) + 19);
    console.log(targetNumber);
    diamondNumber = Math.floor((Math.random() * 12) + 1);
    console.log(diamondNumber);
    emeraldNumber = Math.floor((Math.random() * 12) + 1);
    console.log(emeraldNumber);
    topazNumber = Math.floor((Math.random() * 12) + 1);
    console.log(topazNumber);
    sapphireNumber = Math.floor((Math.random() * 12) + 1);
    console.log(sapphireNumber);
    userGuess = 0;
    $("#number-to-guess").text(targetNumber);
    $("#diamond").attr("value", diamondNumber);
    $("#emerald").attr("value", emeraldNumber);
    $("#topaz").attr("value", topazNumber);
    $("#sapphire").attr("value", sapphireNumber);
    $("#userGuess").empty();
    $("#gameStatus").empty();
}

// resetGame resets the gameStatus and userGuess
function resetGame() {
    $("#userGuess").empty();
    $("#gameStatus").empty();
}

// plays win audio 
function audioWin() {
    winAudio.play();
}

// plays loss audio 
function audioLose() {
    loseAudio.play();
}

// onclick event, and logic to check if the game is won or lost yet 
$(".crystal").on("click", function() {
    var number = ($(this).attr("value"));
    if (userGuess <= targetNumber) {
        userGuess += parseInt(number);
        console.log(userGuess);
        $("#userGuess").text(userGuess);
        if (userGuess === targetNumber) {
            $("#gameStatus").text("You win!");
            audioWin();
            wins++;
            $("#wins").text(parseInt(wins));
            setTimeout(gameStart, 1000 * 3);
        } else if (userGuess >= targetNumber) {
            $("#gameStatus").text("You lose!");
            audioLose();
            loses++;
            $("#loses").text(parseInt(loses));
            setTimeout(gameStart, 1000 * 5);
        }
    }
})

// Starts the game
gameStart();

// Restarts the game
resetGame();