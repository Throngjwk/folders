var c1 = new Decimal(1)
var c2 = new Decimal(1)
var c3 = new Decimal(1)
var c4 = new Decimal(1)
let version = "v1.0.0"
var rho = new Decimal(0)
let tau = new Decimal(0)

function Tick() {
    rho = rho.add(c1.times(c2))
}

setInterval(() => {
    document.getElementById("title").innerHTML = "Theory 1:" + rho + " &rho;"
}, 1000);

