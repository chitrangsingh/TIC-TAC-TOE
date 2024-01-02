// console.log("guess number game between 100");

// // let game_num = (Math.random() * 11)+1;
// let game_num = 9;
// let tries=1;
// let input1 = prompt("GUESS THE NUMBER !!!");

// while(game_num != input1) {
//     console.log(input1);
//     input1 = prompt("GUESS THE NUMBER again plzz !!!");
//     tries++;
// }
// console.log(input1);
// console.log("yes you guessed it rigth this time !!!");
// console.log(`You took ${tries} tries`);

// let Fname = prompt("ENTER YOUR FULL NAME ");
// let len = Fname.length;
// let CFname = Fname.toUpperCase();
// let username = `@${CFname}${len}`;
// console.log(`your Username is : ${username}`);

// let arr = [22,60,99,55,78,70,89,48,74,10];
// let sum = 0;
// for (const i of arr) {
//      sum+=i;
// }
// let avg = sum/arr.length;
// console.log(`average of whole class is ${avg}`);

// let prices = [250,645,300,900,50];
// let offPrice = 0;
// let idx = 0;
// for (let i of prices) {
//   offPrice = i / 10;
//   prices[idx] = i - offPrice;
//   console.log(prices[idx]);
//   idx++;
// }

// let arr = [2,3,6,8,10];

// arr.forEach((val) => {
//   console.log(`${val*val}`);
// });

let button = document.createElement("button");
button.innerText = "Play music";
button.style.backgroundColor = "black";
button.style.color = "white";
button.style.padding = "10px";
button.style.fontSize = "25px";
button.style.borderRadius = "15px";
button.style.cursor = "pointer";
// let div = document.querySelector("#container");
// div.style.border = "2px solid red";
let bodytag = document.querySelector("body");
// bodytag.append(button);
// console.log(button);

function playmusic(){
    let audio =new Audio("/One Piece Uk Drill Gomu Gomu No Feat Ydee G Ls.mp3");
    audio.play();
}
button.addEventListener("dblclick",playmusic);

let gamebox = document.querySelector("#game");
gamebox.after(button);

let boxes = document.querySelectorAll(".btns");
let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click",() =>{
    console.log("box clicked");
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
  })
});

let Winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let disable_Box = () => {
    for (let bts of boxes) {
        bts.disabled = true; 
    }
}
let Enable_Box = () => {
    for (let bts of boxes) {
        bts.disabled = false; 
        bts.innerText = "";
    }
}

let WIN = document.querySelector(".winner_container");
let msg = document.querySelector("#win_tag");
let showWinner = (winner) => {
    msg.innerText = `HOORAY !! WINNER IS ${winner}`;
    WIN.classList.remove("hide");
    disable_Box();
};

let checkWinner = () => {
    for(let patterns of Winpatterns){
        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText;
        let val3 = boxes[patterns[2]].innerText;
        
        if (val1!="" && val2!="" && val3!="") {
            if(val1===val2 && val2===val3){
                
                showWinner(val1);
            }
        }
    }
    checkTie();
};

let checkTie = () => {
    let allBoxesFilled = true;

for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    if (box.innerText === "") {
        allBoxesFilled = false;
        break;
    }
}
    if (allBoxesFilled) {
       
        handleTie();
    }
};

let handleTie = () => {
    console.log("It's a tie! No one wins.");
    msg.innerText = "It's a tie! No one wins.";
    WIN.classList.remove("hide");
};
let RESET = document.querySelector("#RENEW");
let NEW_GAME = document.querySelector("#RENEW2");

let reseting = () => {
    turnO = true;
    Enable_Box();
    WIN.classList.add("hide");
};
RESET.addEventListener("click",reseting);
NEW_GAME.addEventListener("click",reseting);
