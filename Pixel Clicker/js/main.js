var pixel = new Decimal(0)
var pps = new Decimal(0)
var ppc = new Decimal(1)

document.getElementById("click").onclick = () => {
    pixel = pixel.add(ppc)
    document.getElementById("pixels").innerText = pixel
}

setInterval(() => {
    pixel = pixel.add(pps)
    document.getElementById("pixels").innerText = pixel
}, 1000);