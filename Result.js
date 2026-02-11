// Get score from localStorage
let finalScore = parseInt(localStorage.getItem("player1Score")) || 0

// Show score
document.getElementById("finalScore").textContent = "Your Score: " + finalScore

// Show result message
if (finalScore === "Score") {
  document.getElementById("resultMessage").textContent =
    "🏆 Excellent! You won!"
} else {
  document.getElementById("resultMessage").textContent = "💡 Good try!"
}
