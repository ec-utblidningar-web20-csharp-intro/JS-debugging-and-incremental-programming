import * as game from "./js/tick-tack-toe.js";

// - - - - - DOM manipulering - - - - -
for (let y = 0; y < 3; y++) {
  for (let x = 0; x < 3; x++) {
    const box = document.querySelector("#c" + x + y);

    box.onclick = function (e) {
      game.placeMark(x, y);
      box.innerText = game.board[x][y];
    };
  }
}

document.querySelector("#reset").onclick = function (e) {
  game.reset();
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      const box = document.querySelector("#c" + x + y);
      box.innerText = game.board[x][y];
    }
  }
};
