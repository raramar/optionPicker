console.log("rashell did it");
let addBtnElement = document.getElementById("add-btn");
let inputValue = document.getElementById("option-input");
let choicesArray = [];

function addOption() {
    let container = document.getElementById("allOptions");

    let newListItem = document.createElement("li");
    container.appendChild(newListItem);

    let itemBox = document.createElement("div");
    itemBox.className = "item";
    newListItem.appendChild(itemBox);

    let text = document.createElement("p");
    text.innerHTML = inputValue.value;


    let deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "DELETE";

    itemBox.appendChild(text);
    itemBox.appendChild(deleteBtn);


    deleteBtn.addEventListener("click", function() {
        deleteBtn.parentElement.parentElement.remove();
        console.log("did it delete?")

    });
}

addBtnElement.addEventListener("click", function() {
    choicesArray.push(inputValue.value);
    console.log(choicesArray);
    inputValue.value = "";
});