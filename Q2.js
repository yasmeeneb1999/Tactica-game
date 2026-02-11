// Correct answer index (Bahraini Dinar is the second button, index 1)
let score = 0

function checkAnswer(answer) {
  if (answer === "Manama") {
    score += 2 // Add 2 points for correct answer
    alert("Correct! Score: " + score)
  } else if (
    answer === "Muharraq" ||
    answer === "Riffa" ||
    answer === "Isa Town"
  ) {
    alert("Wrong Answer! Score: " + score)
  }
}
