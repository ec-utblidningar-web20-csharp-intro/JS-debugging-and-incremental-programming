//index.js beskriver beteendet på min hemsida
//Vad kan jag klicka på?
//Vad händer när jag klickar?

import * as game from "./js/tick-tack-toe.js";
import { fetchCat } from "./js/fetch-cat.js";
import * as store from "./js/store.js";

// När sidan startar, kolla om användaren har en high-score och en redan vald kattbild
let winCount = Number(store.get("myScore") ?? 0);
let userCatUrl = store.get("myPicture") ?? "";

// Använd den laddade datan
document.querySelector("#user-img").src = userCatUrl;
document.querySelector("#win-count").innerText =
  "Du har vunnit " + winCount + " gånger";

document.querySelector("#pick").onclick = function (e) {
  fetchCat().then(function (url) {
    userCatUrl = url;
    document.querySelector("#user-img").src = url;

    store.set("myPicture", userCatUrl);
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

        store.set("myScore", winCount);
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
