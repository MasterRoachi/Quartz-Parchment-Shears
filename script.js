const options = ['quartz', 'parchment', 'shears'];

/* create a function to get the computer's choice */

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    return computerChoice;
}

/* create a function to get the human's choice*/

function getHumanChoice() {
    const humanChoice = prompt("What shall it be - Quartz, Parchment, or Shears?");
    return humanChoice.toLowerCase();
}

/* create a function to play the game for 5 rounds */

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    /* This function needs to be repeated 5 times to play 5 rounds of the game */

    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase();
        const computer = computerChoice.toLowerCase();

        if (human === computer) {
            console.log("Dang Flabbit, We Drew!");
        } else if ((human === "quartz" && computer === "shears") ||
            (human === "parchment" && computer === "quartz") ||
            (human === "shears" && computer === "parchment")) {
            humanScore++;
            console.log(`Jolly good show! ${human} triumphs over ${computer}!`);
        } else {
            computerScore++;
            console.log(`Alas! ${computer} truimphs over ${human}!`);
        }
    }

    /* Loop through 5 rounds of the game */

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`)

    /* Determine the winner after 5 rounds and announce the result */
    if (humanScore > computerScore) {
        alert("Huzzah! You are the victor!");
    } else if (humanScore < computerScore) {
        alert("Alas! The computer has bested you!");
    } else {
        alert("A draw! Well played!");
    }
}


playGame();