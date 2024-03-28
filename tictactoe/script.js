let player = document.getElementById("player");
let board = document.getElementById("board");
let currentPlayer = "X";
let arr = Array(9).fill(null)

function restart() {
  for (let index = 0; index < arr.length; index++) {
    arr[index] = null;
  }

  board.innerHTML = `
  <div class="row">
  <div onclick="handleClick(this)" id="0" class="col"></div>
  <div onclick="handleClick(this)" id="1" class="col"></div>
  <div onclick="handleClick(this)" id="2" class="col"></div>
</div>
<div class="row">
  <div onclick="handleClick(this)" id="3" class="col"></div>
  <div onclick="handleClick(this)" id="4" class="col"></div>
  <div onclick="handleClick(this)" id="5" class="col"></div>
</div>
<div class="row">
  <div onclick="handleClick(this)" id="6" class="col"></div>
  <div onclick="handleClick(this)" id="7" class="col"></div>
  <div onclick="handleClick(this)" id="8" class="col"></div>
</div>
  `
}

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
    (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
  ) {
    board.innerHTML = `<div class="game-over">
    <h2>Winner is ${currentPlayer}</h2>
    <button class="btn" onclick="restart()">Play Again</button>
  </div>`;
    return;
  }

  if (!arr.some((e) => e === null)) {
    board.innerHTML = `<div class="game-over">
    <h2>Game Over! Match is draw</h2>
    <button class="btn" onclick="restart()">Play Again</button>
  </div>`;
  }
}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null) {
    return;
  }
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner()
  currentPlayer = currentPlayer === "X" ? "0" : "X"
  player.innerText = `Player: ${currentPlayer}`;
}