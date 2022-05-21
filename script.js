let platerCountRadio = document.querySelectorAll('.player-count input[name="radio"]');
let selectplayerRadio = document.querySelectorAll('.select-player input[type="radio"]');
let Comp_ply2 = document.querySelector('.select-player div p');

let playerCount = 1;
let player1;
let player2;

for( let x of platerCountRadio ){
    x.addEventListener('click', function(){
        if(x.checked){
            playerCount = x.value;
        }

        if( playerCount == 1 ){
            // Comp_ply2.innerHTML = "computer :"
        }
        else if (playerCount == 2){
            // Comp_ply2.innerHTML = "player 2 :"
        }
        

    })
}

for( let i=0; i<=1; i++ ){
    selectplayerRadio[i].addEventListener('click',function(){
        if( selectplayerRadio[i].checked ){
            if(i==0)
            {
                selectplayerRadio[3-i].checked = true;
                player1 = 'X'
                player2 = 'O'
            }
            else if (i==1)
            {
                selectplayerRadio[3-i].checked = true;
                player1 = 'O'
                player2 = 'X'
            }
        }
    })
}
for( let i=2; i<=3; i++ ){
    selectplayerRadio[i].addEventListener('click',function(){
        if( selectplayerRadio[i].checked ){
            if(i==2)
            {
                selectplayerRadio[3-i].checked = true;
                player1 = 'O'
                player2 = 'X'
            }
            else if (i==3)
            {
                selectplayerRadio[3-i].checked = true;
                player1 = 'X'
                player2 = 'O'
            }
        }
    })
}


addEventListener('click', function(){
    console.log(playerCount);
    console.log(player1);
    console.log(player2);
})