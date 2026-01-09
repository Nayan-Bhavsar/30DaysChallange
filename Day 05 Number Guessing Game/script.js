const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (!userGuess) {
    message.innerText = "Please enter a number!";
    message.style.color = "red";
    return;
  }

  if (userGuess === randomNumber) {
    message.innerText = "🎉 Correct! You guessed it right!";
    message.style.color = "green";
  } else if (userGuess > randomNumber) {
    message.innerText = "📉 Too high! Try again.";
    message.style.color = "orange";
  } else {
    message.innerText = "📈 Too low! Try again.";
    message.style.color = "orange";
  }
}
