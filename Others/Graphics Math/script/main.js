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

buttonItem[17].onclick = function() {
    value[level] += "cos"
}

buttonItem[18].onclick = function() {
    value[level] += "tan"
}

buttonItem[19].onclick = function() {
    value[level] += "abs"
}

buttonItem[20].onclick = function() {
    value[level] += "a"
}

buttonItem[21].onclick = function() {
    value[level] += "b"
}

buttonItem[22].onclick = function() {
    value[level] += "c"
}

buttonItem[23].onclick = function() {
    value[level] += "d"
}

buttonItem[24].onclick = function() {
    value[level] += "e"
}

buttonItem[25].onclick = function() {
    value[level] += "f"
}

buttonItem[26].onclick = function() {
    value[level] += "g"
}

buttonItem[27].onclick = function() {
    value[level] += "h"
}

buttonItem[28].onclick = function() {
    value[level] += "i"
}

buttonItem[29].onclick = function() {
    value[level] += "j"
}

buttonItem[30].onclick = function() {
    value[level] += "k"
}

buttonItem[31].onclick = function() {
    value[level] += "l"
}

buttonItem[32].onclick = function() {
    value[level] += "m"
}

buttonItem[33].onclick = function() {
    value[level] += "n"
}

buttonItem[34].onclick = function() {
    value[level] += "o"
}

buttonItem[35].onclick = function() {
    value[level] += "p"
}

buttonItem[36].onclick = function() {
    value[level] += "q"
}

buttonItem[37].onclick = function() {
    value[level] += "r"
}

buttonItem[38].onclick = function() {
    value[level] += "s"
}

buttonItem[39].onclick = function() {
    value[level] += "t"
}

buttonItem[40].onclick = function() {
    value[level] += "u"
}

buttonItem[41].onclick = function() {
    value[level] += "v"
}

buttonItem[42].onclick = function() {
    value[level] += "w"
}

buttonItem[43].onclick = function() {
    value[level] += "x"
}

buttonItem[44].onclick = function() {
    value[level] += "y"
}

buttonItem[45].onclick = function() {
    value[level] += "z"
}

buttonItem[46].onclick = function() {
    value[level] += "A"
}

buttonItem[47].onclick = function() {
    value[level] += "B"
}

buttonItem[48].onclick = function() {
    value[level] += "C"
}

buttonItem[49].onclick = function() {
    value[level] += "D"
}

buttonItem[50].onclick = function() {
    value[level] += "E"
}

buttonItem[51].onclick = function() {
    value[level] += "F"
}

buttonItem[52].onclick = function() {
    value[level] += "G"
}

buttonItem[53].onclick = function() {
    value[level] += "H"
}

buttonItem[54].onclick = function() {
    value[level] += "I"
}

buttonItem[55].onclick = function() {
    value[level] += "J"
}

buttonItem[56].onclick = function() {
    value[level] += "K"
}

buttonItem[57].onclick = function() {
    value[level] += "L"
}

buttonItem[58].onclick = function() {
    value[level] += "M"
}

buttonItem[59].onclick = function() {
    value[level] += "N"
}

buttonItem[60].onclick = function() {
    value[level] += "O"
}

buttonItem[61].onclick = function() {
    value[level] += "P"
}

buttonItem[62].onclick = function() {
    value[level] += "Q"
}

buttonItem[63].onclick = function() {
    value[level] += "R"
}

buttonItem[64].onclick = function() {
    value[level] += "S"
}

buttonItem[65].onclick = function() {
    value[level] += "T"
}

buttonItem[66].onclick = function() {
    value[level] += "U"
}

buttonItem[67].onclick = function() {
    value[level] += "V"
}

buttonItem[68].onclick = function() {
    value[level] += "W"
}

buttonItem[69].onclick = function() {
    value[level] += "X"
}

buttonItem[70].onclick = function() {
    value[level] += "Y"
}

buttonItem[71].onclick = function() {
    value[level] += "Z"
}

setInterval(() => {
    document.getElementById("math-text1").innerText = value[0]
}, 100);