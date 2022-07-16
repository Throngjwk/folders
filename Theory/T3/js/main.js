var currency1 = new Decimal(0)
var currency2 = new Decimal(0)
var currency3 = new Decimal(0)
var tau = new Decimal(0)
var b1 = new Decimal(1)
var b2 = new Decimal(0)
var b3 = new Decimal(0)
var cost1 = new Decimal(20)
var cost2 = new Decimal(10)
var cost3 = new Decimal(3e3)

document.getElementById("cost1").onclick = () => {
    if (currency1.gte(cost1)) {
        currency1 = currency1.sub(cost1)
        cost1 = cost1.times(new Decimal.pow(2, Math.log2(1.18099)))
        b1 = b1.add(1)
        document.getElementById("cn1").innerText = cost1;
    }
}

document.getElementById("cost2").onclick = () => {
    if (currency2.gte(cost2)) {
        currency2 = currency2.sub(cost2)
        cost2 = cost2.times(new Decimal.pow(2, Math.log2(1.308)))
        b2 = b2.add(1)
        document.getElementById("cn2").innerText = cost2;
    }
}

setInterval(() => {
    currency1 = currency1.add(b1.times(b2.add(1)).times(b3.add(1)))
    currency2 = currency2.add(b1.times(b2.add(1)).times(b3.add(1)))
    if (dimesionLevel >= 1) {
        currency3 = currency3.add(b1.times(b2.add(1)).times(b3.add(1)))
    }
    document.getElementById("currency1").innerText = currency1;
    document.getElementById("currency2").innerText = currency2;
    document.getElementById("currency3").innerText = currency3;
}, 1000);