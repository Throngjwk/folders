var pixel = new Decimal(0)
var pps = new Decimal(0)
var ppc = new Decimal(1)
var cost1 = new Decimal(15)

document.getElementById("click").onclick = () => {
    pixel = pixel.add(ppc)
    document.getElementById("pixels").innerText = pixel
}

document.getElementById("cost1").onclick = () => {
    pixel = pixel.sub(cost1)
    cost1 = cost1.times(1.15)
    pps = pps.add(1)
}

setInterval(() => {
    pixel = pixel.add(pps)
    document.getElementById("pixels").innerText = pixel
}, 1000);