let boxes = document.querySelectorAll(".custom-box");
let trunSpan = document.querySelector(".turn");

let turn = "X";
let audio = new Audio("./music/ting.mp3");

function changeTurn() {
    if (turn == "X"){
        turn = "O";
        trunSpan.innerHTML = "O";
    } else {    
        turn = "X";
        trunSpan.innerHTML = "X";   
    }
}

for( let box of boxes ){
    box.addEventListener('click', function(){
        audio.play();

        if(turn === "X"){
            box.innerHTML = `<img src="./Ref-image/rectangle.svg" />`;
            changeTurn();
        }
        else{
            box.innerHTML = `<img src="./Ref-image/circle.svg" />`;
            changeTurn();
        }

    })
}