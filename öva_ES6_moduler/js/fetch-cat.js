export { fetchCat };

// document.querySelector("button").onclick = async function (e) {
//   // Skrev dessa rader för att lista ut vad som kom som svar från thecatapi.com
//   let resp = await fetch("https://api.thecatapi.com/v1/images/search");
//   let obj = await resp.json();

//   // Här testar jag urln jag fick tag på
//   let url = obj[0].url;
//   document.querySelector("img").src = url;
// };

async function fetchCat() {
  let resp = await fetch("https://api.thecatapi.com/v1/images/search");
  let obj = await resp.json();

  let url = obj[0].url;
  return url;
}
