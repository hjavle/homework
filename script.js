// cashing the DOM 
// declare user and computer score variables 
let userScore = 0; 
let computerScore = 0;
let noOfPlays = 0;
// get referenced to the frequently accessed DOM elements

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// get computer choices 
function getComputerChoice(){
    const choices =['r','p','s'];
    const randomNumber = (Math.floor(Math.random()* 3 ));
    return choices[randomNumber];
}
// for particular  choice r, p,s assign Rock, Paper, Scissors 
function convertToWord(letter){
    if (letter ==="r") return "Rock";
    if (letter ==="p") return "Paper";
    return "Scissors";
}

// define function 'win'' which accepts user and computer choices as arguments
// Increases computer score (because user lost and computer won)
// Displays the user and computer store
// Displays user lost message
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! `;
}
// define function 'lose' which accepts user and computer choices as arguments
// Increases computer score (because user lost and computer won)
// Displays the user and computer store
// Displays user lost message
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose! `;
}
// define function 'draw' which accepts user and computer choices as arguments
// Displays the user and computer store
// Displays user and computer has draw  message
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)}  equals ${convertToWord(userChoice)}. It's a draw! `;
}

function main(){

    rock_div.addEventListener('click', function(){
        game(rock_div.id)
    })
    
    paper_div.addEventListener('click', function(){
        game(paper_div.id)
    })
    
    scissors_div.addEventListener('click', function(){
        game(scissors_div.id)
    })    
    
}

function game(userChoice){
    noOfPlays++;
    if(noOfPlays < 10)
    {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case"rs":
        case"pr":
        case"sp":
            win(userChoice, computerChoice);
        break;
        case"rp":
        case"ps":
        case"sr":
            lose(userChoice, computerChoice);
        break;
        case"rr":
        case"pp":
        case"ss":
            draw(userChoice, computerChoice);
        break;
    }
}
else if(userScore > computerScore){
    result_p.innerHTML= "You Win Game over";
}else if(userScore < computerScore){
result_p.innerHTML= "You lost Game over";
} else
result_p.innerHTML= "You both draw Game over";

}

main();