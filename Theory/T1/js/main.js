var c1 = new Decimal(1)
var c2 = new Decimal(1)
var c3 = new Decimal(1)
var c4 = new Decimal(1)
let version = "1.0.0"
var rho = new Decimal(0)
let tau = new Decimal(0)
var cost1 = new Decimal(15)

function Tick() {
    rho = rho.add(c1.times(c2))
    tau = rho;
}

document.getElementById("cost1").onclick = () => {
    if (rho.gte(cost1)) {
        cost1 = cost1.mul(2)
        c1 = c1.add(1)
    }
}

setInterval(() => {
    document.getElementById("title").innerHTML = "Theory 1:" + rho + " &rho;"
    Tick();
    document.getElementById("rhotau").innerHTML = rho + " &rho;, "  + tau + " &tau;"
}, 1000);

