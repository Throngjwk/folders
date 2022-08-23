var money = 0
var mps = 0
var mpc = 1
var costs = [
    50,
    800,
    1.5e4,
    7.5e5,
    2e7,
    7.5e8,
]
var onTrancked = null

document.body.style.userSelect = "none"

document.getElementById("click").onclick = function() {
    money += mpc
}

document.getElementById("upgrade1").onclick = function() {
    if (money>=costs[0]) {
        money -= costs[0]
        mps += 6
        costs[0] *= 1.3
    }
}

document.getElementById("upgrade2").onclick = function() {
    if (money>=costs[1]) {
        money -= costs[1]
        mps += 72
        costs[1] *= 1.3
    }
}

document.getElementById("upgrade3").onclick = function() {
    if (money>=costs[2]) {
        money -= costs[2]
        mps += 920
        costs[2] *= 1.3
    }
}

document.getElementById("upgrade4").onclick = function() {
    if (money>=costs[3]) {
        money -= costs[3]
        mps += 1.5e4
        costs[3] *= 1.3
    }
}

document.getElementById("upgrade5").onclick = function() {
    if (money>=costs[4]) {
        money -= costs[4]
        mps += 9e5
        costs[4] *= 1.3
    }
}

document.getElementById("upgrade6").onclick = function() {
    if (money>=costs[5]) {
        money -= costs[5]
        mpc += 2e7
        costs[5] *= 1.3
    }
}

function UpdateGameArea() {
    money += mps
    document.getElementById("money").innerText = money
    document.getElementById("cost1").innerText = costs[0]
    document.getElementById("cost2").innerText = costs[1]
    document.getElementById("cost3").innerText = costs[2]
    document.getElementById("cost4").innerText = costs[3]
    document.getElementById("cost5").innerText = costs[4]
    document.getElementById("cost6").innerText = costs[5]
}

setInterval(() => {
    UpdateGameArea()
}, 100);

function TwoOfPowNumbericMoney(value) {
    money = Math.pow(2, value)
}