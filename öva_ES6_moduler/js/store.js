// store.js ansvarar för att spara data mellan hemsidebesök
// en slags långvarighetsmodul

export { get, set };

// om moduler https://javascript.info/modules-intro
// om cookies https://www.w3schools.com/js/js_cookies.asp

// Steg 1: skriv ett snabbt demo på en testsida för att lista ut hur "cookies" fungerar
//document.cookie = "myScore=4;";
//document.cookie = "myUrl=https://cdn2.thecatapi.com/images/507.jpg;";

// Steg 2: skapa hjälpfunktioner (save, load) som kan exporteras bort från modulen
function set(key, value) {
  document.cookie = `${key}=${value};`;
}

function get(myKey) {
  let obj = {};
  //console.log(document.cookie);

  for (const pair of document.cookie.split(";")) {
    const index = pair.indexOf("=");
    const key = pair.slice(0, index).trim();
    const value = pair.slice(index + 1);

    //console.log(`key:${key} value:${value}`);

    if (myKey === key) return value;
  }

  return undefined;
}

// Fantisera lite om hur funktionerna hade kunnat användas, tex. som nedan
// save("myUrl", userCatUrl);
// userCatUrl = load("myUrl") ?? "https://cdn2.thecatapi.com/images/2oc.jpg";
