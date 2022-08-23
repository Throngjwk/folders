var layout = 0
var lps = 0
var lpc = 1
var hexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
var color = "#"

var RandomColor = () => {
  if (!color.length >= 6) {
  for (let i = 0;i < 6; i++) {
    color += hexadecimals[Math.floor(Math.random() * 16)]
  }
  }
  color = "#" + hexadecimals[Math.floor(Math.random() * 16)] + hexadecimals[Math.floor(Math.random() * 16)] + hexadecimals[Math.floor(Math.random() * 16)] + hexadecimals[Math.floor(Math.random() * 16)] + hexadecimals[Math.floor(Math.random() * 16)] + hexadecimals[Math.floor(Math.random() * 16)]
  document.body.style.backgroundColor = color
}

document.getElementById("random").onclick = () => {
  RandomColor()
}

document.getElementById("click").onclick = () => {
  layout += 1
}

const UpdateGameArea = () => {
  layout += lps
  
  document.getElementById("layout").innerText = layout
}

setInterval(UpdateGameArea, 400)