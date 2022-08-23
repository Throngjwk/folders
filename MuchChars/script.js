const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var inputId = document.getElementById("char")
var value = ""

for (let i = 0; i < 33333; i++) {
    value += letters[Math.floor(Math.random() * 51)]
}

setInterval(() => {
    inputId.value = value
}, 2);