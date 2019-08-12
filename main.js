console.log("rashell did it");
let choicesArray = [];
let arraySize;
let randchoice;
let choice;
// console.log(choice);

let userInput;

// gets user input
function createList() {
  for (let i = 0; i < 4; i++) {
    userInput = window.prompt("what you want to watch");
    choicesArray.push(userInput);
  }
  console.log(choicesArray);
  return choicesArray;
}

function decision(array) {
  arraySize = array.length;
  randchoice = Math.floor(Math.random() * arraySize);

  choice = array[randchoice];
  console.log("choice " + choice);
  console.log("random num " + randchoice);
  console.log("array size " + arraySize);
}

let makelist = createList();
decision(makelist);
