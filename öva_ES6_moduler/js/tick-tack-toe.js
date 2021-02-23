export { board, placeMark, reset };

// - - - - - Spelrelaterad kod - - - - -
let board = [];
let playerOneTurn;

reset();

function placeMark(x, y) {
  if (board[x][y] === "") {
    // placera markör
    board[x][y] = playerOneTurn ? "O" : "X";
    // ändra vems tur det är
    playerOneTurn = !playerOneTurn;
  }
}

function reset() {
  for (let x = 0; x < 3; x++) {
    board[x] = [];
    for (let y = 0; y < 3; y++) {
      board[x][y] = "";
    }
  }
  playerOneTurn = true;
}
