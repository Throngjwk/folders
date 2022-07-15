var currency1 = new Decimal(0)
var currency2 = new Decimal(0)
var currency3 = new Decimal(0)
var tau = new Decimal(0)
var b1 = new Decimal(1)
var b2 = new Decimal(0)
var b3 = new Decimal(0)

document.getElementById("cost1").onclick = () => {
    if (currency1.gte(cost1)) {
        currency1 = currency1.sub(cost1)
        currency1 = cost1.times(new Decimal.pow(2, Math.log2(1.18099)))
        b1 = b1.add(1)
        document.getElementById("cn1").innerText = cost1;
    }
}

setInterval(() => {
    currnecy1 = currency1.add(b1.times(b2.add(1)).times(b3.add(1)))
    document.getElementById("currency1").innerText = currency1;
    document.getElementById("currency2").innerText = currency2;
    document.getElementById("currency3").innerText = currency3;
}, 1000);