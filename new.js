
const playerdisplay = document.getElementById('playerChoices')
const computerDisplay = document.getElementById('computerDisplay')
const resultDisplay = document.getElementById('resultDisplay')
const winnerDisplay = document.getElementById('winnerDisplay')
const loseDisplay = document.getElementById('loseDisplay')

let won = 0
let lost = 0

const choices = ["rock", "paper", "scissors"]

function playGame(playerchoice){

    const computerCHoice = choices[Math.floor(Math.random() * 3)]

    console.log(computerCHoice)
    let result = ""

    if(computerCHoice === playerchoice){

        result = "IT'S A TIE!!"
    }
    else{

        switch(playerchoice){
            case "rock":
                result = (computerCHoice === "scissors") ? "YOU WIN!" : "YOU LOST!"
                break
            case "paper":
                result = (computerCHoice === "rock") ? "YOU WIN!" : "YOU LOST!"
                break
            case "scissors":
                result = (computerCHoice === "paper") ? "YOU WIN!" : "YOU LOST!"
        }  
    }

    playerdisplay.textContent = `Player : ${playerchoice}`
    computerDisplay.textContent = `Computer : ${computerCHoice}`
    resultDisplay.textContent = `${result}`

    resultDisplay.classList.remove("greenText", "redText", "tie")

    switch(result){
        case "YOU WIN!":
           resultDisplay.classList.add("greenText");
           break;

       case "YOU LOST!":
           resultDisplay.classList.add("redText");
           break;
       
       case "IT'S A TIE!!":
           resultDisplay.classList.add("tie")
           break;
   }

    if(result === "YOU WIN!"){
        won += 1
        winnerDisplay.textContent = `Won : ${won}`
    }
    else if(result === "YOU LOST!"){

        lost += 1
        loseDisplay.textContent = `Lost : ${lost}`
    }

    
}
