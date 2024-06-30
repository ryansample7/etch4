function populateBoard(input) {
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns =   `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
}

let amount = size * size;
for (let i = 0; i < 256; i++) {
let square = document.createElement("div");
square.addEventListener('mouseover' , () => {
square.style.backgroundColor = "black";
});
square.style.backgroundColor = "grey";
board.insertAdjacentElement("beforeend" , square)
}



populateBoard(16);

function changeSize(input) {
    populateBoard(input)
}

