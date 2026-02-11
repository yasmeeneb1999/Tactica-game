// Randomly the button will choose for you if its risky or intelligence
function startGame() {
  // Array of possible game modes (pages)
  const pages = ["Risky.html", "Intelligence.html"]

  // Randomly select one
  const randomIndex = Math.floor(Math.random() * pages.length)
  const selectedPage = pages[randomIndex]

  if (selectedPage === "Risky.html") {
    window.location.href = "Risky.html"
  } else if (selectedPage === "Intelligence.html") {
    window.location.href = "Intelligence.html"
  }

  // Redirect to the selected page
}
