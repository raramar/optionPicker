console.log("rashell did it");
let addBtnElement = document.getElementById("add-btn");
let inputValue = document.getElementById("option-input");
let choicesArray = [];

function addOption() {
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = "DELETE";

  let item = inputValue.value;
  let text = document.createTextNode(item);
  let newitem = document.createElement("li");
  newitem.appendChild(text);

  document.getElementById("allOptions").appendChild(newitem);
  document.getElementById("allOptions").appendChild(deleteBtn);
}

// function deleteList() {
//   for (let i = 0; i<optionList.length;i++){

//   }
// }
addBtnElement.addEventListener("click", function() {
  choicesArray.push(inputValue.value);
  console.log(choicesArray);
  inputValue.value = "";
});
