
const title = document.querySelector("#title");
const changeTextBtn = document.querySelector("#clickMe");


changeTextBtn.addEventListener(
  "click", addText
);


function addText(){
 title.textContent = "GoodBye world!"
}
