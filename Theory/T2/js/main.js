var rho = new Decimal(0);
var tau = new Decimal(0)
var dotq1 = new Decimal(1)
var dotq2 = new Decimal(1)
var dotq3 = new Decimal(1)
var dotq4 = new Decimal(1)
var dotr1 = new Decimal(1)
var dotr2 = new Decimal(1)
var dotr3 = new Decimal(1)
var dotr4 = new Decimal(1)
var cost1 = new Decimal(10)
var cost2 = new Decimal(5e3)
var cost3 = new Decimal(3e25)
var cost4 = new Decimal(8e50)
var cost5 = new Decimal(2e6)
var cost6 = new Decimal(3e9)
var cost7 = new Decimal(4e25)
var cost8 = new Decimal(5e50)

document.getElementById("cost1").onclick = () => {
    if (rho.gte(cost1)) {
        rho = rho.sub(cost1)
        dotq1 = dotq1.add(1)
        document.getElementById("cn1").innerText = cost1;
    }
}

setInterval(() => {
    rho = rho.add(dotq1)
    dotq1 = dotq1.add(dotq2)
    document.getElementById("rhotau").innerHTML = rho + " &rho;, "  + tau + " &tau;"
}, 1000);