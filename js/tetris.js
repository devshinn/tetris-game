const playground = document.querySelector(".playground > ul");

//setting
const GAME_ROWS = 20;
const GAME_COLS = 10

let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;
const movingItem ={
  type:"",
  direction:0,
  top:0,
  left:0,
}



init()
function init(){
  for(let i=0; i < GAME_ROWS; i++) {
    prependNewLine()
  }
}

// matrix
function prependNewLine(){
  const li = document.createElement("li")
  const ul = document.createElement("ul")
  for(let j=0; j<GAME_COLS; j++){
    const matrix = document.createElement("li")
    ul.prepend(matrix)
  }
  li.prepend(ul)
  playground.prepend(li)
}