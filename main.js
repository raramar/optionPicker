console.log("rashell did it");
let addBtnElement = document.getElementById("add-btn");
let inputValue = document.getElementById("option-input");
let choicesArray = [];

addBtnElement.addEventListener("click", function() {
  choicesArray.push(inputValue.value);
  console.log(choicesArray);
  inputValue.value = "";
});

function addOption() {
  let item = inputValue.value;
  let text = document.createTextNode(item);
  let newitem = document.createElement("li");
  newitem.appendChild(text);
  document.getElementById("allOptions").appendChild(newitem);
}
