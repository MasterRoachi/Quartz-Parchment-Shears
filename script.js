const options = ['quartz', 'parchment', 'shears'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    return computerChoice;
}

function getHumanChoice () {
    const humanChoice = prompt ("What shall it be - Quartz, Parchment, or Shears?");
    return humanChoice.toLowerCase();
}

function playRound (humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
        console.log("Dang Flabbit, We Drew!");
    } else if ((human === "quartz" && computer === "shears") ||
               (human === "parchment" && computer === "quartz") ||
               (human === "shears" && computer === "parchment")) {
        humanScore++;
        console.log(`Jolly good show ${human} triumphs over ${computer}`);
    } else {
        computerScore++;
        console.log(`Alas! ${computer} truimphs over ${human}`);
    }
}
