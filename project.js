let a = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgdiv = document.querySelector(".win");
let msg = document.querySelector("#msg");
let turn0 = true;
const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const reboot = () => {
  turn0 = true;
  enableAll();
  msgdiv.classList.add("hide");
};

a.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

const disableAll = () => {
  //freezing boxes after winner gets announced
  for (let box of a) {
    box.disabled = true;
  }
};

const enableAll = () => {
  for (let box of a) {
    box.disabled = false;
    box.innerText = "";
  }
};

const show = (winner) => {
  //function for displaying winner on screen
  msg.innerText = `Hurrah! Winner is Player ${winner}`;
  msgdiv.classList.remove("hide");
  disableAll();
};

const checkWinner = () => {
  //function for checking the winner
  for (let i of win) {
    let p1 = a[i[0]].innerText;
    let p2 = a[i[1]].innerText;
    let p3 = a[i[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        console.log("winner!", p1);
        show(p1);
      }
    }
  }
};

newgame.addEventListener("click", reboot);
reset.addEventListener("click", reboot);
