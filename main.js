const answer = "WORLD"; // hardcoded answer for demonstration purposes
let currentRow = 0;

function checkGuess() {
  // get the user's guess from the input field and make it uppercase
  const guess = document.getElementById("guessInput").value.toUpperCase();

  // check if the guess is empty
  if (guess === "") {
    alert("Please enter a guess.");
    return;
  }

  // check if the guess is not a 5 letter word
  if (guess.length !== 5) {
    alert("Please enter a 5 letter word and try again.");
    return;
  }

  // get the current word row and elements
  const wordRow = document.getElementsByClassName("word-row")[currentRow];
  //at the current row. getting the elements by
  console.log("word-row",wordRow)
  console.log(currentRow)
  const letters = wordRow.getElementsByClassName("word");

  let correctLetters = 0; // setting a counter for correctly guessed letters

  // iterate through each letter of the user's guess
  for (let i = 0; i < 5; i++) {
    if (guess[i] === answer[i]) {
      // if the letter is in the correct position, it's correct
      letters[i].textContent = guess[i];
      letters[i].classList.add("correct");
      correctLetters++;
    } else if (answer.includes(guess[i])) {
      // if the letter is in answer but wrong position it's partially correct
      letters[i].textContent = guess[i];
      letters[i].classList.add("partial");
    } else {
      // if the letter is not in the answer it's incorrect
      letters[i].textContent = guess[i];
      letters[i].classList.add("incorrect");
    }
  }

  currentRow++; // move to the next row for the next guess
  document.getElementById("guessInput").value = ""; // clear the input field

  // Check if the guess is correct
  if (correctLetters === 5) {
    alert("Congratulations! You guessed the word correctly!");
    // disable the input field and button
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
  }

  // check if user has used all attempts to guess and haven't guessed correctly
  if (currentRow === 6 && correctLetters < 5) {
    alert(
      "Unlucky... you could not find today's word " +
        answer +
        " but you were so close, try again tomorrow!"
    );
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
  }
}
