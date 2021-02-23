let response = await fetch("https://api.thecatapi.com/v1/images/search");
let objekt = await response.json();

document.querySelector("img").src = "";
