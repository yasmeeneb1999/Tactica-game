// Initialize scores
let player1Score = 0

// Track whose turn it is
let currentPlayer = localStorage.getItem("currentPlayer") || "player1"

// Correct answer (example: Asia)
const correctAnswer = "answer"

function checkAnswer(answer) {
  if (answer === correctAnswer) {
    if (currentPlayer === "player1") {
      player1Score += 2
      alert("Player 1 Correct! +2 points")
    }
  } else {
    alert("Wrong Answer! No points added")
  }

  // Save updated scores
  localStorage.setItem("player1Score", player1Score)
}
