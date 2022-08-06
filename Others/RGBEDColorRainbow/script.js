var color1 = ""
var color2 = ""
var color3 = ""
var color4 = ""
var color5 = ""
var color6 = ""
var letters = "0123456789ABCDEF"
var inputColor = document.getElementById("color")

function randomColor() {
   color1 = "#" + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1]
   color2 = "#" + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1]
   color3 = "#" + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1]
   color4 = "#" + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1]
   color5 = "#" + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1]
   color6 = "#" + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1] + letters[Math.floor(Math.random() * 16) - 1]
   document.getElementById("text").innerHTML =
   '<span style="color:' + color1 + '">' + inputColor.value[0] + '</span>' + '<span style="color:' + color2 + '">' + inputColor.value[1] + '</span>' + '<span style="color:' + color3 + '">' + inputColor.value[2] + '</span>' + '<span style="color:' + color4 + '">' + inputColor.value[3] + '</span>' + '<span style="color:' + color5 + '">' + inputColor.value[4] + '</span>' + '<span style="color:' + color6 + '">' + inputColor.value[5] + '</span>'
}
