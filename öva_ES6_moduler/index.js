for (let y = 0; y < 3; y++) {
  for (let x = 0; x < 3; x++) {
    const box = document.querySelector("#c" + x + y);
    box.innerText = (x + y) % 2 === 0 ? "X" : "O";
  }
}
