/* 1:
Hade velat skriva något vettigt, men jag har inte fått rätt på det.


*/
document.addEventListener("DOMContentLoaded", onPageload);

function onPageload() {
  let input_number = document.querySelector("#input-number");

  input_number.oninput = function () {
    resetSections();

    createSections(parseInt(input_number.value));
  };
}

// Försöker skapa bloginläggens olika delar här nere.
function createSections(count) {
  // Parent
  for (let i = 0; i < count; i++) {
    // let section = document.createElement("div");
    // section.setAttribute("id", "section")
    //let sectionParent = document.getElementById("sections");

    let parent = document.querySelector("main");
    let child = document.createElement("section");
    let title = document.createElement("h2");
    let picture = document.createElement("img");

    picture.src = "img/Blog_Bild.jpg";

    let blogtext = document.createElement("p2");

    title.innerHTML = "Title " + (i + 1);
    //picture.innerHTML = "<img src=\"img/Blog_Bild.jpg\">";
    blogtext.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
    title.contentEditable = true; // Gör så att title och blogtext går att ändra...
    blogtext.contentEditable = true;

    child.appendChild(title);
    child.appendChild(picture);
    child.appendChild(blogtext);

    sectionParent.appendChild(child);
  }
}

// HAr försökt få så att children och parents fungerar, men det har inte blivit bra...
function resetSections() {
  let sectionParent = document.getElementById("sections");

  let sectionChildren = sectionParent.childNodes;
  for (let i = sectionChildren.length - 1; i >= 0; i--) {
    let sectionChildren = sectionChildren[i];
    sectionChildren.remove();
  }
}
