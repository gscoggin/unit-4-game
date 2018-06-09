
var targetNumber = Math.floor((Math.random() * 100) + 1);
console.log(targetNumber);

function gameReset() {
  document.getElementById("number-to-guess").innerHTML = targetNumber;
}

//document.getElementById("crystals").addEventListener("click", function(){
//  alert("Hello World!");
//});

$( "#crystals1 #crystals2" ).on( "click", function() {
  alert("Hello World!");
});


gameReset();

