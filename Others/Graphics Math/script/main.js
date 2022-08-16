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