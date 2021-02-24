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
  console.time("Tid att få katt bild");
  let resp = await fetch("https://api.thecatapi.com/v1/images/search");
  console.timeEnd("Tid att få katt bild");

  console.time("Tid att få json objeket");
  let obj = await resp.json();
  console.timeEnd("Tid att få json objeket");

  let url = obj[0].url;
  return url;
}
