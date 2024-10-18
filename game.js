let boxes = document.querySelectorAll(".box");
let resetBtnn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let winnerMsg = document.querySelector(".winnerMsg"); 
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner = (winner) => { 
    msg.innerText = `Congratulation ${winner}, You win the match`; 
    winnerMsg.style.display = "block"; 
    disableboxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner is:", pos1Val);
                showWinner(pos1Val); 
            }
        }
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const reset=()=>{
    turnO=true;
    enableboxes();
}

resetBtnn.addEventListener("click",reset);