const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const PLAYER_WIDTH = 50;
const ARENA_WIDTH = 1000;

let player1Position = 10;
let player2Position = ARENA_WIDTH - PLAYER_WIDTH - 10;

function updatePlayers() {
  player1.style.left = player1Position + 'px';
  player2.style.left = player2Position + 'px';
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === 'a') {
    
    player1Position -= 10;
    if (player1Position < 0) {
      player1Position = 0;
    }
  } else if (key === 'd') {
    player1Position += 10;
    if (player1Position > ARENA_WIDTH - PLAYER_WIDTH) {
      player1Position = ARENA_WIDTH - PLAYER_WIDTH;
    }
  } else if (key === 'ArrowLeft') {
    player2Position -= 10;
    if (player2Position < 0) {
      player2Position = 0;
    }
  } else if (key === 'ArrowRight') {
    player2Position += 10;
    if (player2Position > ARENA_WIDTH - PLAYER_WIDTH) {
      player2Position = ARENA_WIDTH - PLAYER_WIDTH;
    }
  }

  updatePlayers();
});
