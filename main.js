const colors = ["blue", "green", "orange", "yellow", "red", "cyan"];
let color = "black";

function populateBoard(size) {
  let board = document.querySelector(".board");

  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
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
