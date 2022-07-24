var n = new Decimal(0)
var t = new Decimal(0)
var alpha = new Decimal(0)
var alphaPower = new Decimal(0)
var alphaPowerReq = new Decimal(25)
var alphaReqBase = new Decimal(1.45)

document.getElementsByClassName("reset alpha")[0].onclick = () => {
    n = new Decimal(0)
    alphaPower = alphaPower.add(1)
}

setInterval(() => {
    n = n.add(t.mul(alpha.add(1)))
    t =t.add(0.1)
    alphaPowerReq = new Decimal.pow(alphaReqBase, alphaPower)
    alpha = alphaPower
   document.getElementById("t").innerText = t
   document.getElementById("nt").innerText = n;
   document.getElementById("number1").innerText = alphaPower
   document.getElementById("number2").innerText = alpha
}, 100);