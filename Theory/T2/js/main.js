var rho = new Decimal(0);
var tau = new Decimal(0)
var dotq1 = new Decimal(1)
var dotq2 = new Decimal(0)
var dotq3 = new Decimal(0)
var dotq4 = new Decimal(0)
var dotr1 = new Decimal(1)
var dotr2 = new Decimal(0)
var dotr3 = new Decimal(0)
var dotr4 = new Decimal(0)
var cost1 = new Decimal(10)
var cost2 = new Decimal(5e3)
var cost3 = new Decimal(3e25)
var cost4 = new Decimal(8e50)
var cost5 = new Decimal(2e6)
var cost6 = new Decimal(3e9)
var cost7 = new Decimal(4e25)
var cost8 = new Decimal(5e50)
let expo1 = new Decimal(1)
let expo2 = new Decimal(1)

document.getElementById("cost1").onclick = () => {
    if (rho.gte(cost1)) {
        rho = rho.sub(cost1)
        cost1 = cost1.times(new Decimal.pow(2, Math.log2(2)))
        dotq1 = dotq1.add(1)
        document.getElementById("cn1").innerText = cost1;
    }
}

document.getElementById("cost2").onclick = () => {
    if (rho.gte(cost2)) {
        rho = rho.sub(cost2)
        cost2 = cost2.times(new Decimal.pow(2, Math.log2(2)))
        dotq2 = dotq2.add(1)
        document.getElementById("cn2").innerText = cost2;
    }
}

document.getElementById("cost3").onclick = () => {
    if (rho.gte(cost3)) {
        rho = rho.sub(cost3)
        cost3 = cost3.times(new Decimal.pow(2, Math.log2(3)))
        dotq3 = dotq3.add(1)
        document.getElementById("cn3").innerText = cost3;
    }
}

document.getElementById("cost4").onclick = () => {
    if (rho.gte(cost4)) {
        rho = rho.sub(cost4)
        cost4 = cost4.times(new Decimal.pow(2, Math.log2(4)))
        dotq4 = dotq4.add(1)
        document.getElementById("cn4").innerText = cost4;
    }
}

document.getElementById("cost5").onclick = () => {
    if (rho.gte(cost5)) {
        rho = rho.sub(cost5)
        cost5 = cost5.times(new Decimal.pow(2, Math.log2(2)))
        dotr1 = dotr1.add(1)
        document.getElementById("cn5").innerText = cost5;
    }
}

document.getElementById("cost6").onclick = () => {
    if (rho.gte(cost6)) {
        rho = rho.sub(cost6)
        cost6 = cost6.times(new Decimal.pow(2, Math.log2(2)))
        dotr2 = dotr2.add(1)
        document.getElementById("cn6").innerText = cost6;
    }
}

document.getElementById("cost7").onclick = () => {
    if (rho.gte(cost7)) {
        rho = rho.sub(cost7)
        cost7 = cost7.times(new Decimal.pow(2, Math.log2(3)))
        dotr3 = dotr3.add(1)
        document.getElementById("cn7").innerText = cost7;
    }
}

document.getElementById("cost8").onclick = () => {
    if (rho.gte(cost8)) {
        rho = rho.sub(cost8)
        cost8 = cost8.times(new Decimal.pow(2, Math.log2(4)))
        dotr4 = dotr4.add(1)
        document.getElementById("cn8").innerText = cost8;
    }
}

document.getElementById("mc1").onclick = () =>{
    if (rho.gte(1e25)) {
        rho = rho.sub(1e25)
        expo1 = new Decimal(1.05)
        document.getElementById("q1expo").style.display = "block";
        document.getElementById("q1expo").innerHTML = expo1;
    }
}

document.getElementById("mc2").onclick = () =>{
    if (rho.gte(1e50)) {
        rho = rho.sub(1e50)
        expo1 = new Decimal(1.1)
        document.getElementById("q1expo").style.display = "block";
        document.getElementById("q1expo").innerHTML = expo1;
    }
}

document.getElementById("mc3").onclick = () =>{
    if (rho.gte(1e75)) {
        rho = rho.sub(1e75)
        expo1 = new Decimal(1.15)
        document.getElementById("q1expo").style.display = "block";
        document.getElementById("q1expo").innerHTML = expo1;
    }
}

document.getElementById("mc4").onclick = () =>{
    if (rho.gte(1e25)) {
        rho = rho.sub(1e25)
        expo2 = new Decimal(1.05)
        document.getElementById("r1expo").style.display = "block";
        document.getElementById("r1expo").innerHTML = expo2;
    }
}

document.getElementById("mc5").onclick = () =>{
    if (rho.gte(1e50)) {
        rho = rho.sub(1e50)
        expo2 = new Decimal(1.1)
        document.getElementById("r1expo").style.display = "block";
        document.getElementById("r1expo").innerHTML = expo2;
    }
}

document.getElementById("mc3").onclick = () =>{
    if (rho.gte(1e75)) {
        rho = rho.sub(1e75)
        expo2 = new Decimal(1.15)
        document.getElementById("r1expo").style.display = "block";
        document.getElementById("r1expo").innerHTML = expo2;
    }
}

setInterval(() => {
    document.getElementById("title").innerHTML = "Theory 2:" + rho + " &rho;"
    rho = rho.add(dotq1.pow(expo1).times(dotr1.pow(expo2)))
    dotq1 = dotq1.add(dotq2)
    dotq2 = dotq2.add(dotq3)
    dotq3 = dotq3.add(dotq4)
    dotr1 = dotr1.add(dotr2)
    dotr2 = dotr2.add(dotr3)
    dotr3 = dotr3.add(dotr4)
    document.getElementById("rhotau").innerHTML = rho + " &rho;, "  + tau + " &tau;"
    document.getElementById("q1").innerHTML = dotq1
    document.getElementById("q2").innerHTML = dotq2
    document.getElementById("q3").innerHTML = dotq3
    document.getElementById("q4").innerHTML = dotq4
    document.getElementById("r1").innerHTML = dotr1
    document.getElementById("r2").innerHTML = dotr2
    document.getElementById("r3").innerHTML = dotr3
    document.getElementById("r4").innerHTML = dotr4
}, 1000);