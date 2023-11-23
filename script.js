game();

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

function round(playerSelection){
    playerSelection = playerSelection.toLowerCase();

    let computer = getComputerChoice();

    if(playerSelection == computer){
        return `Both ${playerSelection}, Draw!`;
    }
    
    // case user is rock
    if(playerSelection == "rock"){
        if(computer == "paper"){
            return `You Lose! ${computer} beats ${playerSelection}`;
        }
        if(computer == "scissors"){
            return `You Win! ${playerSelection} beats ${computer}`;
        }
    }

    // case user is paper
    if(playerSelection == "paper"){
        if(computer == "scissors"){
            return `You Lose! ${computer} beats ${playerSelection}`;
        }
        if(computer == "rock"){
            return `You Win! ${playerSelection} beats ${computer}`;
        }
    }

    //case user is scissors
    if(playerSelection == "scissors"){
        if(computer == "rock"){
            return `You Lose! ${computer} beats ${playerSelection}`;
        }
        if(computer == "paper"){
            return `You Win! ${playerSelection} beats ${computer}`;
        }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        alert(round(prompt("Rock, Paper, or Scissors?")));
    }
}