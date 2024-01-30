let userScore = 0;
let computerScore = 0;

const winMsg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#computer-score");

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];

}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        winMsg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        winMsg.style.backgroundColor = "green";
        userScore++;
        userscorePara.innerText = userScore;

    }
    else {
        winMsg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        winMsg.style.backgroundColor = "red";
        computerScore++;
        compscorePara.innerText = computerScore;
    }
}
const drawGame = () => {
    winMsg.innerText = "Game was Draw, Play Again!";
    winMsg.style.backgroundColor = "#081b31";
}
const playGame = (userChoice) => {
    const compChoice = gencompChoice();
    if (userChoice === compChoice) {
        drawGame();//draw game
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //comp choice is paper , scissors
            userWin = compChoice === "paper" ? false : true;

        }
        else if (userChoice === "paper") {
            //comp choice is rock , scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            //user choice is scissors
            //comp choice is rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})