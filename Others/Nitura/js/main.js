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
