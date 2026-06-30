const options = ['quartz', 'parchment', 'shears'];


function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    return computerChoice;
}