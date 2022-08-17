var level = 0
let levelItems = [
    document.getElementsByClassName("level-item")[0]
]
var buttonItem = []
var value = [
    ""
]

document.body.style.userSelect = "none"

for (let i = 0; i < document.getElementsByClassName("math-addiontial-button").length; i++) {
    buttonItem.push(document.getElementsByClassName("math-addiontial-button")[i])
}

buttonItem[0].onclick = function() {
    value[level] += "0"
}

buttonItem[1].onclick = function() {
    value[level] += "1"
}

buttonItem[2].onclick = function() {
    value[level] += "2"
}

buttonItem[3].onclick = function() {
    value[level] += "3"
}

buttonItem[4].onclick = function() {
    value[level] += "4"
}

buttonItem[5].onclick = function() {
    value[level] += "5"
}

buttonItem[6].onclick = function() {
    value[level] += "6"
}

buttonItem[7].onclick = function() {
    value[level] += "7"
}

buttonItem[8].onclick = function() {
    value[level] += "8"
}

buttonItem[9].onclick = function() {
    value[level] += "9"
}

buttonItem[10].onclick = function() {
    value[level] += "sqrt"
}

buttonItem[11].onclick = function() {
    value[level] += "("
}

buttonItem[12].onclick = function() {
    value[level] += ")"
}

buttonItem[13].onclick = function() {
    value[level] += "+"
}

buttonItem[14].onclick = function() {
    value[level] += "-"
}

buttonItem[15].onclick = function() {
    value[level] += "/"
}

buttonItem[16].onclick = function() {
    value[level] += "*"
}

setInterval(() => {
    document.getElementById("math-text1").innerText = value[0]
}, 100);