let randomNumber;
let attempts;

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;   
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  attempts++;

  if (!userGuess) {
    document.getElementById("message").textContent = "⚠️ Please enter a number!";
    return;
  }

  if (userGuess === randomNumber) {
    document.getElementById("message").textContent = `🎉 Correct! The number was ${randomNumber}`;
  } else if (userGuess < randomNumber) {
    document.getElementById("message").textContent = "⬆️ Too Low! Try again.";
  } else {
    document.getElementById("message").textContent = "⬇️ Too High! Try again.";
  }

  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
}

function resetGame() {
  startGame();
}

startGame();
