// om moduler https://javascript.info/modules-intro
// om cookies https://www.w3schools.com/js/js_cookies.asp

// Steg 1: skriv ett snabbt demo på en testsida för att lista ut hur "cookies" fungerar
//document.cookie = "myScore=4;";
//document.cookie = "myUrl=https://cdn2.thecatapi.com/images/507.jpg;";

setCookie("test", "fem");
console.log(getCookie());

// Steg 2: skapa hjälpfunktioner (save, load) som kan exporteras bort från modulen
function setCookie(key, value) {
  document.cookie = `${key}=${value};`;
}

function getCookie() {
  let obj = {};
  //console.log(document.cookie);

  for (const pair of document.cookie.split(";")) {
    const index = pair.indexOf("=");
    const key = pair.slice(0, index).trim();
    const value = pair.slice(index + 1);

    //console.log(`key:${key} value:${value}`);

    obj[key] = value;
  }

  return obj;
}

debugger;

// Fantisera lite om hur funktionerna hade kunnat användas, tex. som nedan
// save("myUrl", userCatUrl);
// userCatUrl = load("myUrl") ?? "https://cdn2.thecatapi.com/images/2oc.jpg";
