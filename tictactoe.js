let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn1 = true;
let count = 0;
let winnerFound = false;

const winCondition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn1) {
      box.innerText = "O";
      turn1 = false;
    } else {
      box.innerText = "X";
      turn1 = true;
    }
    count++;
    box.disabled = true;
    checkWinner();

    if (count === 9 && !winnerFound) {
      draw();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winCondition) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 !== "" && position2 !== "" && position3 !== "") {
      if (position1 === position2 && position2 === position3) {
        winnerFound = true;
        console.log("Winner", position1);
        showWinner(position1);
        return;
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  allBoxDisabled();
};

const draw = () => {
  msg.innerText = `It's a draw`;
  msgContainer.classList.remove("hide");
  allBoxDisabled();
};

const allBoxDisabled = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};