// Generate a random number from 1-100
var randomNumber = Math.floor(Math.random() * 100) + 1;
/* Set's variables that return the first
    element that matches the CSS class that's set as an argument
*/
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('#guessSubmit');
var guessField = document.querySelector('.guessField');
var guesses = document.querySelector('.guesses');
var resetButton = document.querySelector('#resetButton');
var clearButton = document.querySelector('#clearButton');
var minField = document.querySelector('#minField');
var maxField = document.querySelector('#maxField');
var rangeButton = document.querySelector('#rangeSubmit');
// Set a variable called "result" to false for logic in resetGame function
var result = false;
//creates memory for variables that will later be defined
var min; 
var max;

// Sets event listeners for buttons so when they are clicked, the specified function will be performed.
rangeButton.addEventListener('click', setRange);
guessSubmit.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', buttonDisabler);

// Declares a function called "setRange"
function setRange() {
    // Sets variables from the input of the min and max forms
    min = Number(minField.value);
    max = Number(maxField.value);
    // Generates a random number based on the  min and max variables
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // Displays an alert notifying the user of the range
    alert("The new range is between " + min + " and " + max + "." + " Please submit your guess:");
}

// Declares a function called "checkGuess"
function checkGuess() {
    // Sets variable from user input in the guessField form
    var userGuess = Number(guessField.value);
    // Checks to see if the user guessed the correct number
    if (userGuess === randomNumber) {
        // Returns text telling the user they chose the right number
        lowOrHi.textContent = 'BOOM!';
        // Runs "setGameOver" function
        setGameOver();
        // Checks if user's guess is a number
    }  else if(isNaN(userGuess)) {
        // alerts the user that they didn't enter a number
        alert("That is not a valid number");
        // resets the guess field
        guessField.value = '';
        return;
        // checks if the user's guess is out of range
    }  else if(userGuess > max || userGuess < min) {
        // alerts user what the valid range is
        alert(userGuess + " is not within the accepted range, please pick a number between " + min + " and " + max);
        // resets the guess field
        guessField.value = '';
        return;
        // Checks user's guess to see if is lower or higher than the random number and displays text to let user know
    }  else if(userGuess < randomNumber) {
        lowOrHi.textContent = 'That is too low';
    }  else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'That is too high';
    }
    //  disables reset button
    document.querySelector('#resetButton').disabled = false;
    // changes HTML to report user's last guess
    guesses.innerHTML = "<p>Your last guess was</p><h3>" + userGuess + "</h3>";
    // clears guess field
    guessField.value = '';
    // puts the focus on the guess field
    guessField.focus();
}

// Declares a function
function setGameOver() {
    // disables buttons
    guessField.disabled = true;
    guessSubmit.disabled = true;
    clearButton.disabled = true;
    // Changes button text
    resetButton.value = "Next Level";
    // sets result to true for resetGame function logic
    result = true;
  }

  // Declares a function
function resetGame() {
    // Clears all the information from the resultParas div
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    // disables buttons
    guessField.disabled = false;
    guessSubmit.disabled = false;
    rangeButton.disabled = false;
    // clears fields and puts guess field in focus
    guessField.value = '';
    guesses.innerHTML = '';
    guessField.focus();
    // If the user guesses correctly the next round will increase the range
    if (result === true) {
        min = min - 10;
        max = max + 10;
        // Sets the value of the fields to the new min and max
        minField.value = min;
        maxField.value = max;
        // Calls setRange function
        setRange();
        // Sets result to false
        result = false;
    // If user clicks reset without guessing the right number
    } else {
        // reset the fields to the default values
        minField.value = 0;
        maxField.value = 100;
        // Call "setRange Function"
        setRange();
    }
    // Change button text back to Reset
    resetButton.value = "Reset";
}
// function that disables buttons
function buttonEnabler() {
    clearButton.disabled = false;
}
// function that enables buttons
function buttonDisabler() {
    resetButton.disabled = true;
    clearButton.disabled = true;
}