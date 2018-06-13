var targetNumber;
var diamondNumber;
var emeraldNumber;
var topazNumber;
var sapphireNumber;
var userGuess; 
var wins = 0;
var loses = 0;

//randomly sets a target number at the start of the game
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
  //Set a place holder variable for the user guess
  userGuess = 0;
  $("#number-to-guess").text(targetNumber);
  $("#diamond").attr("value", diamondNumber);
  $("#emerald").attr("value", emeraldNumber);
  $("#topaz").attr("value", topazNumber);
  $("#sapphire").attr("value", sapphireNumber);
  $("#userGuess").empty();
  $("#gameStatus").empty();
}

function resetGame () {
  $("#userGuess").empty();
  $("#gameStatus").empty();
}

$(".crystal").on("click",function () {
  var number = ($(this).attr("value"));
  if (userGuess <= targetNumber) {
  userGuess += parseInt(number);
  console.log(userGuess);
  $("#userGuess").text(userGuess);
  if (userGuess === targetNumber) {
    $("#gameStatus").text("You win!");
    wins++;
    $("#wins").text(parseInt(wins));
    setTimeout(gameStart, 1000 * 1);
  }
  else if (userGuess >= targetNumber) {
    $("#gameStatus").text("You lose!");
    loses++;
    $("#loses").text(parseInt(loses));
    setTimeout(gameStart, 1000 * 1);
  }  
}   
})

gameStart();

//game reset 
resetGame();



