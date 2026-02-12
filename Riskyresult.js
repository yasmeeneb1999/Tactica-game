// Get Player 1 score from localStorage
let player1Score = parseInt(localStorage.getItem("player1Score")) || 0

// Select the title element
const title = document.querySelector(".game-title")

let points = 0

const random = Math.ceil(Math.random() * 2)
console.log(random)

if (random === 1) {
  points = 4
  player1Score += points
} else {
  points = -2
  player1Score += points
}

// Update score dynamically
title.textContent = `You got ${points} points! Player 1's score is ${player1Score}!`

// Back Game function
function backGame() {
  // Reset scores
  localStorage.setItem("player1Score", 0)

  // Go back to start page
  window.location.href = "Startgame.html"
}
