// Get Player 1 score from localStorage
let player1Score = parseInt(localStorage.getItem("player1Score")) || 0

// Select the title element
const title = document.querySelector(".game-title")

// Update score dynamically
title.textContent = "Player 1 Score = " + player1Score

// Back Game function
function backGame() {
  // Reset scores
  localStorage.setItem("player1Score", -2)

  // Go back to start page
  window.location.href = "Startgame.html"
}
