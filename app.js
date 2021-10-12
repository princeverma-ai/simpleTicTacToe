const boxes = document.querySelectorAll(".box");
let player1 = true;
//player1  =  X  , player2   = O;
const stateheading = document.querySelector(".state-heading");
const gamebox = document.querySelector(".game-box");
const statediv = document.querySelector(".state");
const gamestateX = [];
for (let i = 0; i <= 8; i++) {
  gamestateX.push(false);
}
const gamestateO = [];
for (let i = 0; i <= 8; i++) {
  gamestateO.push(false);
}
/*   0  1  2
     3  4  5 
     6  7  8      */
function checkwin(gamestate) {
  const winstatenum = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  console.log(gamestate);
  let check = 0;
  for (let state of winstatenum) {
    check = 0;
    for (let i = 0; i < state.length; i++) {
      if (gamestate[state[i]]) {
        check += 1;
      }
      if (check >= 3) {
        console.log("win");
        return true;
      }
    }
  }
}
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", (e) => {
    if (gamestateX[i] === false && gamestateO[i] == false) {
      if (player1) {
        stateheading.innerText = "Player 2 turn";
        player1 = false;
        const child = boxes[i].children[0];
        child.classList.toggle("none");
        gamestateX[i] = "true";
        if (checkwin(gamestateX)) {
          stateheading.innerText = "Player 1 Won !!!";
          gamebox.classList.toggle("won-state");
          statediv.classList.toggle("state-anim");
        }
      } else {
        stateheading.innerText = "Player 1 turn";
        const child = boxes[i].children[1];
        child.classList.toggle("none");
        gamestateO[i] = "true";
        player1 = true;
        if (checkwin(gamestateO)) {
          stateheading.innerText = "Player 2 Won !!!";
          gamebox.classList.toggle("won-state");
          statediv.classList.toggle("state-anim");
        }
      }
    } //game state if
  }); //event listener
} //for loop
