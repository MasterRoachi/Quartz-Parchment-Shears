const options = ['quartz', 'parchment', 'shears'];

let humanScore = 0;
let computerScore = 0;

const quartzButton = document.querySelector(".quartz");
const parchmentButton = document.querySelector(".parchment");
const shearsButton = document.querySelector(".shears");

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const roundResult = document.querySelector("#round-result")

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
        return "Dang Flabbit, we Drew!"
    } else if (
        (human === "quartz" && computer === "shears") ||
        (human === "parchment" && computer === "quartz") ||
        (human === "shears" && computer === "parchment")
    ) {
        humanScore++;
        return `Jolly good show! ${human} triumphs over ${computer}!`;
    } else {
        computerScore++;
        return `Alas! ${computer} triumphs over ${human}!`;
    }
}

function handleChoiceClick(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = playRound(humanChoice, computerChoice)

    roundResult.textContent = resultMessage;

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
}


quartzButton.addEventListener("click", () => {
    handleChoiceClick("quartz");
})

parchmentButton.addEventListener("click", () => {
    handleChoiceClick("parchment");
})

shearsButton.addEventListener("click", () => {
    handleChoiceClick("shears");
})