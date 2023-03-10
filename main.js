const colors = ["blue", "green", "orange", "yellow", "red", "cyan"];
let color = "black";

function populateBoard(size) {
  //Design the sketch board
  const board = document.querySelector(".board");
  board.querySelectorAll("div").forEach((div) => div.remove()); 
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  // Logic to fill up the sketch board
  const amount = size * size;
  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseover", colorMaker);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeEnd", square);
  }
}

function changeSize(size) {
  if (size >= 2 && size <= 100) {
    populateBoard(size);
  } else {
    console.log("Square limit reached");
  }
}

function colorMaker() {
  this.style.backgroundColor = color;
}

function generateRandom() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(choice) {
  color = choice;
}

populateBoard(16);
