// Randomly the button will choose for you if its risky or intelligence
function Risky() {
  // Array of possible game modes (pages)
  const pages = ["Riskyresult.html", "RiskyResult-2.html"]

  // Randomly select one
  const randomIndex = Math.floor(Math.random() * pages.length)
  const selectedPage = pages[randomIndex]

  if (selectedPage === "Riskyresult.html") {
    window.location.href = "Riskyresult.html"
  } else if (selectedPage === "RiskyResult-2.html") {
    window.location.href = "RiskyResult-2.html"
  }

  // Redirect to the selected page
}
