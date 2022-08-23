var score = 0
var x = [240]
var y = [100]

document.body.style.userSelect = "none"

function GetDownArea() {
  y[0] += 15
}

function GetUp() {
  y[0] -= score > 2048 ? 60 : 75
}

function GetAddScore() {
  score += 1
}

function UpdateGameArea() {
  document.getElementById("score").innerText = score
document.getElementById("player").style.top = y[0] + "px"
}

setInterval(() => {
  GetDownArea()
  UpdateGameArea()
}, 100)