export { board, placeMark, reset, checkWinner };

// - - - - - Spelrelaterad kod - - - - -
let board = [[], [], []];
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
    for (let y = 0; y < 3; y++) {
      board[x][y] = "";
    }
  }
  playerOneTurn = true;
}

function checkWinner() {
  // prettier-ignore
  let triplets = [
      // rader
      [{x:0,y:0}, {x:1,y:0}, {x:2,y:0}],
      [{x:0,y:1}, {x:1,y:1}, {x:2,y:1}],
      [{x:0,y:2}, {x:1,y:2}, {x:2,y:2}],
      // kolumner
      [{x:0,y:0}, {x:0,y:1}, {x:0,y:2}],
      [{x:1,y:0}, {x:1,y:1}, {x:1,y:2}],
      [{x:2,y:0}, {x:2,y:1}, {x:2,y:2}],
      // tvärs
      [{x:0,y:0}, {x:1,y:1}, {x:2,y:2}],
      [{x:0,y:2}, {x:1,y:1}, {x:2,y:0}],
  ];

  for (const triplet of triplets) {
    const a = board[triplet[0].x][triplet[0].y];
    const b = board[triplet[1].x][triplet[1].y];
    const c = board[triplet[2].x][triplet[2].y];

    if (a === b && a === c && a !== "") {
      return { winner: true, player: a === "O" ? "one" : "two" };
    }
  }

  return { winner: false };
}
