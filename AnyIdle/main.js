var n_any = 0
var n_aps = 0
var n_apc = 1
var dtYear = 0
var dtYearOld = new Date().getFullYear()
var costs = [
    50
]

// Any
document.getElementById("upgrader1").onclick = function() {
    n_any -= costs[0]
    n_aps += 1
    costs[0] *= 1.4
}

document.getElementById('click').onclick = function() {
    n_any += n_apc
}


// Update
function updateTick(dt) {
    n_any += n_aps
    document.getElementById("any").innerText = n_any
    document.getElementById("upgrader1").innerText = "Cost:" + costs[0]
}

function updateGameArea() {
    updateTick()
    dtYear = new Date().getFullYear()
}

// Interval (be Request Animation Frame.)
setInterval(updateGameArea, 500)