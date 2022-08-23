var coins = 0
var cps = 0
var cpc = 1

// I be clicked.

const Add = (value) => {
  coins += value
}

document.getElementById("click").onclick = () => {
  Add(cpc)
}

// Get update.
let UpdateGameArea = () => {
  Add(cps)
  document.getElementById("coin").innerText = coins
}

setInterval(UpdateGameArea, 100)


