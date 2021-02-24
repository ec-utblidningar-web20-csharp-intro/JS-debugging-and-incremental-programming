export { set, get };

// om moduler https://javascript.info/modules-intro
// om cookies https://www.w3schools.com/js/js_cookies.asp
// om localStorage

function set(key, value) {
  document.cookie = `${key}=${value};`;
}

function get(myKey) {
  //console.log(document.cookie);

  console.time("Tid till att få min cookie");
  for (const pair of document.cookie.split(";")) {
    const index = pair.indexOf("=");
    const key = pair.slice(0, index).trim();
    const value = pair.slice(index + 1);

    //console.log(`key:${key} value:${value}`);

    if (myKey === key) {
      console.timeEnd("Tid till att få min cookie");
      return value;
    }
  }

  return undefined;
}

/*
let set = function (key, val) {
  localStorage.setItem(key, val);
};
let get = function (key) {
  return localStorage.getItem(key);
};
*/
