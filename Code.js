let wins = 0;
let losses = 0;

function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1; /*This is setting up a function that rolls 2 dice and returns the sum of the 2 dice. It is basically randomly generating two numbers and returning their sum.*/
    const die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}

function guessLow() {
    const diceSum = rollDice();
    document.getElementById('diceResult').innerText = 'Dice Roll: ' + diceSum;

    if (diceSum <= 6) {
        document.getElementById('feedback').innerText = 'You guessed Low! Correct!'; /*This is saying IF the sum of the two numbers rolled is less than or equal to 6, text will appear stating that you won.*/
        wins++;
    } else {
        document.getElementById('feedback').innerText = 'You guessed Low! Incorrect.';/*This is basically saying that the sum of the two numbers is anything but less than or equal to 6, then text will pop up saying you lost.*/
        losses++;
    }
    updateScore();
}

function guessHigh() {
    const diceSum = rollDice();
    document.getElementById('diceResult').innerText = 'Dice Roll: ' + diceSum;

    if (diceSum > 6) {
        document.getElementById('feedback').innerText = 'You guessed High! Correct!'; /*If the sum of the dice is greater than 6, you win.*/
        wins++;
    } else {
        document.getElementById('feedback').innerText = 'You guessed High! Incorrect.'; /*If the sum of the dice is anyting other than greater than 6, you lose.*/
        losses++;
    }
    updateScore();
}

function updateScore() {
    document.getElementById('score').innerText = 'Wins: ' + wins + ' | Losses: ' + losses; /*This is just saying if you win, it will add 1 to your wins, same with losses.*/
}