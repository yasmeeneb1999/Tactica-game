// Correct answer index (Bahraini Dinar is the second button, index 1)
let score = 0

function checkAnswer(answer) {
  if (answer === "Middle East") {
    score += 2 // Add 2 points for correct answer
    alert("Correct! Score: " + score)
  } else if (answer === "Europe" || answer === "Africa" || answer === "Asia") {
    alert("Wrong Answer! Score: " + score)
  }
}
