var randomNumber = Math.floor(Math.random() * 100) + 1;
    
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('#guessSubmit');
var guessField = document.querySelector('.guessField');
var guesses = document.querySelector('.guesses');
var resetButton = document.querySelector('#resetButton');

var guessCount = 1;

function checkGuess() {
    var userGuess = Number(guessField.value);
    
    if (userGuess === randomNumber) {
        lowOrHi.textContent = 'BOOM!';
    }  else if(isNaN(userGuess)) {
        alert("That is not a valid number")
        guessField.value = '';
        return;
    }  else if(userGuess > 100 || userGuess < 1) {
        alert(userGuess + " is not within the accepted range, please pick a number between 1 and 100");
        guessField.value = '';
        return;
    }  else if(userGuess < randomNumber) {
        lowOrHi.textContent = 'That is too low'
    }  else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'That is too high';
    }
    
    document.querySelector('#resetButton').disabled = false;

    guesses.innerHTML = "<p>Your last guess was</p><h3>" + userGuess + "</h3>";
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guesses.innerHTML = '';
    guessField.focus();


    randomNumber = Math.floor(Math.random() * 100) + 1;
}


function buttonEnabler() {
    document.querySelector('#clearButton').disabled = false;
}

resetButton.addEventListener('click', resetGame);
