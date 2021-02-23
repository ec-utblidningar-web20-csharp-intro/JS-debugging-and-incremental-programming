import * as game from "./js/tick-tack-toe.js";

let winCount = 0;

// - - - - - DOM manipulering - - - - -
for (let y = 0; y < 3; y++) {
  for (let x = 0; x < 3; x++) {
    const box = document.querySelector("#c" + x + y);

    box.onclick = function (e) {
      game.placeMark(x, y);
      box.innerText = game.board[x][y];

      const check = game.checkWinner();
      if (check.winner && check.player === "one") {
        winCount += 1;

        const heading = document.querySelector("#win-count");
        heading.innerText = "Du har vunnit " + winCount + " gånger";
      }
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
