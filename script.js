//DOM selection
const bato = document.querySelector("#btn_bato");
const papel = document.querySelector("#btn_papel");
const guniting = document.querySelector("#btn_gunting");
const info = document.querySelector("#round_status");
const score = document.querySelector("#game_score");
const winner = document.querySelector("#game_winner");

let playerScore = 0;
let computerScore = 0;

setScore();



bato.addEventListener('click', function(){
    info.textContent = round("rock");
    setScore();
    win();
});

papel.addEventListener('click', function(){
    info.textContent = round("paper");
    setScore();
    win();
});

guniting.addEventListener('click', function(){
    info.textContent = round("scissors");
    setScore();
    win();
});

function setScore(){
    score.textContent = `P1: ${playerScore}; P2: ${computerScore}`;
}

function getComputerChoice(){
    let result = Math.floor((Math.random() * 3));   
    
    if(result == 0){
        return "rock";
    } else if(result == 1){
        return "paper";
    } else if(result == 2){
        return "scissors";
    }

    return "IDK";
}

function win(){
    if(playerScore == 5){
        winner.textContent = "YOU WIN!";
        playerScore = 0;
        computerScore = 0;
        setScore();
    } else if(computerScore == 5){
        winner.textContent = "YOU LOSE!";
        playerScore = 0;
        computerScore = 0;
        setScore();
    }
}

function round(playerSelection){
    playerSelection = playerSelection.toLowerCase();

    let computer = getComputerChoice();

    if(playerSelection == computer){
        return `Both ${playerSelection}, Draw!`;
    }
    
    // case user is rock
    if(playerSelection == "rock"){
        if(computer == "paper"){
            computerScore++;
            return `You Lose! ${computer} beats ${playerSelection}`;
        }
        if(computer == "scissors"){
            playerScore++;
            return `You Win! ${playerSelection} beats ${computer}`;
        }
    }

    // case user is paper
    if(playerSelection == "paper"){
        if(computer == "scissors"){
            computerScore++;
            return `You Lose! ${computer} beats ${playerSelection}`;
        }
        if(computer == "rock"){
            playerScore++;
            return `You Win! ${playerSelection} beats ${computer}`;
        }
    }

    //case user is scissors
    if(playerSelection == "scissors"){
        if(computer == "rock"){
            computerScore++;
            return `You Lose! ${computer} beats ${playerSelection}`;
        }
        if(computer == "paper"){
            playerScore++;
            return `You Win! ${playerSelection} beats ${computer}`;
        }
    }
}

/*
function game(){
    for(let i = 0; i < 5; i++){
        alert(round(prompt("Rock, Paper, or Scissors?")));
    }
}
*/