let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let container = document.querySelector(".msg-container");
let newbtn = document.querySelector(".new-btn");
let resetbtn = document.querySelector(".reset-btn");
let turnO = true;
let count = 0; //To Track Draw

const winPat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true; //To prevent selection of already clicked box
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        container.classList.add("hide")
        box.innerText = "";
    }
}

const winnerMsg = (winner) =>{
    msg.innerText = `Winner is ${winner}🎉`;
    container.classList.remove("hide");
};

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    container.classList.remove("hide");
};

const checkWinner = () =>{
    for(let pattern of winPat){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" &&pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner" , pos1);
                winnerMsg(pos1);
                disableBoxes();
                return true;
            }
        }
    }
    return false;
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);
