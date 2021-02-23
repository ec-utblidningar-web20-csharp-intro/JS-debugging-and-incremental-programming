import * as game from "./js/tick-tack-toe.js";
import { fetchCat } from "./js/fetch-cat.js";

// Ambition:
// När sidan startar, kolla om användaren har en high-score och en redan vald kattbild
let winCount = 0;
let userCatUrl = "";
//TODO ladda användar data från tidigare session

if (userCatUrl === "") {
  fetchCat().then(function (url) {
    userCatUrl = url;
    document.querySelector("#user-img").src = url;
    //TODO spara ner katt url
  });
}

document.querySelector("#pick").onclick = function (e) {
  fetchCat().then(function (url) {
    userCatUrl = url;
    document.querySelector("#user-img").src = url;
    //TODO spara ner katt url
  });
};

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
        //TODO spara ner score
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
