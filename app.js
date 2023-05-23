var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');


var spiderManWidth = 100;
var backgroundWidth = 1000;

var player1Position = 10;
var player2Position = backgroundWidth - spiderManWidth - 10;

function move() {
  player1.style.left = player1Position + 'px';
  player2.style.left = player2Position + 'px';
}

document.addEventListener('keydown', function(event) {
  var key = event.key;
  if (key === 'a') {
    player1Position -= 10;

    if (player1Position < 0) {
      player1Position = 10;
    }
  } else if (key === 'd') {
    player1Position += 10;
    if (player1Position > backgroundWidth - spiderManWidth) {
      player1Position = backgroundWidth - spiderManWidth;
    }
  } else if (key === 'ArrowLeft') {
    player2Position -= 10;
    if (player2Position < 0) {
      player2Position = 0;
    }
  } else if (key === 'ArrowRight') {
    player2Position += 10;
    if (player2Position > backgroundWidth - spiderManWidth) {
      player2Position = backgroundWidth - spiderManWidth;
    }
  }


  
document.addEventListener("keyup",function(event){

  var key = event.key;
 

 if(key === "q"){
  // key = true
  var change = player1.src = "images/iron-shields.gif"
  change.style.height = "300px"
  change.style.width = "200px"
 }
 else{
  player1.src = "images/iron-walk.gif"
 }

})

document.addEventListener("keyup",function(event){

  var key = event.key;
 

 if(key === "e"){
  // key = true
  var change = player2.src = "images/ironman-shield.gif"
  change.style.height = "300px"
  change.style.width = "200px"
 }
 else{
  player2.src = "images/iron-man.gif"
 }

})

  move();
});

