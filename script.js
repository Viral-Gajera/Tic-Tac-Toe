// selecting elements
let selectOptions = document.querySelector(".select-option");
let playWithFriend = document.querySelector("#play-with-friend");
let playWithFriendContainer = document.querySelector(".play-with-friend-contaiener");
let trunSpan = document.querySelector(".turn");

let boxes = document.querySelectorAll(".custom-box");
let model = document.querySelector(".model");

let resetBtn = document.querySelector(".reset");
let quit = document.querySelector(".quit");

// variables
let audioTurn = new Audio("./music/ting.mp3");
let audioGameOver = new Audio("./music/gameover.mp3");

let initialTurn = "X"
let turn = initialTurn;
let remaining = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let counter = 9; // only 9 time different player can click
let matchResult;

// set turnSpan to trun
trunSpan.innerHTML = `${initialTurn}`;

// function to change turn
function changeTurn() {
    if (turn == "X") {
        turn = "O";
        trunSpan.innerHTML = "O";
    } else {
        turn = "X";
        trunSpan.innerHTML = "X";
    }
}

// function to check win
function checkWin() {
    let allWinCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    counter --;
    for (let i = 0; i < allWinCondition.length; i++) {
        if (
            remaining[allWinCondition[i][0]] === turn &&
            remaining[allWinCondition[i][1]] === turn &&
            remaining[allWinCondition[i][2]] === turn
        ) {
            matchResult = "win";
            return true;
        }
    }
    
    if( counter === 0 ){
        // true for match draw
        matchResult = "draw";
        return true;

    }

    // match neither draw nor won
    return false;
}

// function to run after won
function afterWon() {

    audioGameOver.play();
    model.classList.remove("display-none");
    
    let result = model.querySelector(".result");

    if( matchResult === "draw" ){
        // match draw
        result.innerHTML = `🏆 Match draw!`;    
    }
    else{
        // {turn} win
        if( ! playWithFriend.checked && turn !== initialTurn ){
            result.innerHTML = `🏆 Computer won!`;
        }
        else if (! playWithFriend.checked && turn === initialTurn ){
            result.innerHTML = `🏆 you won!`;
        }
        else{
            result.innerHTML = `Winner : ${turn} 🏆`;
        }
    }

    let playAgain = model.querySelector(".play-again");
    playAgain.addEventListener('click', function(){
        // hide model
        model.classList.add("display-none");

        // reset every thing
        reset();
    })
}

// function to reset
function reset(){
    remaining = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    turn = initialTurn;
    trunSpan.innerHTML = turn;
    counter = 9;
    for (let box of boxes) {
        box.innerHTML = "";
    }
}

// function to play with computer
function playComputer (){

    let number;
    do {
        number = Math.floor( Math.random() * 9 );
    }
    while( ! remaining.includes(number) );

    let box = document.getElementById(`${number}`);

    if (turn === "X" && number === remaining[number]) {
        box.innerHTML = `<img src="./Ref-image/rectangle.svg" />`;
        remaining[number] = "X";
        if (checkWin()) {
            afterWon();
        } else {
            changeTurn();
        }
    }
    if (turn === "O" && number === remaining[number]) {
        box.innerHTML = `<img src="./Ref-image/circle.svg" />`;
        remaining[number] = "O";
        if (checkWin()) {
            afterWon();
        } else {
            changeTurn();
        }
    }
    
}

// event listener for play-with-friend checkbox
playWithFriendContainer.addEventListener('click', function(event){

    reset();

    if( playWithFriend.checked ){
        playWithFriend.checked = false;
        selectOptions.disabled = false;
        
    }
    else{
        playWithFriend.checked = true;
        selectOptions.disabled = true;
    }

    event.preventDefault();
    event.stopPropagation();
})

// event listener for boxes
for (let box of boxes) {
    box.addEventListener("click", function () {
        let number = Number(box.getAttribute("id"));

        if (turn === "X" && number === remaining[number]) 
        {        
            audioTurn.play();
            box.innerHTML = `<img src="./Ref-image/rectangle.svg" />`;
            remaining[number] = "X";
    
            if (checkWin()) {
                afterWon();
            } else {
                changeTurn();
                if( ! playWithFriend.checked ){
                    playComputer();
                }
            }
        }
        if (turn === "O" && number === remaining[number]) 
        {
            audioTurn.play();
            box.innerHTML = `<img src="./Ref-image/circle.svg" />`;
            remaining[number] = "O";
    
            if (checkWin()) {
                afterWon();
            } else {
                changeTurn();
                if( ! playWithFriend.checked  ){
                    playComputer();
                }
            }
        }
    });
}

// event listener for reset button
resetBtn.addEventListener('click', function(){
    reset();
})

// event listener for quit button
quit.addEventListener('click', function(){})