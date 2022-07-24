//Elements
let minigames = [new Alove("alove")]

var n = new Decimal(0)
var t = new Decimal(0)
var alpha = new Decimal(0)
var alphaPower = new Decimal(0)
var alphaPowerReq = new Decimal(25)
var alphaReqBase = new Decimal(1.45)
var aloveLevel = 0;
var aloveReq = new Decimal(1e7)

document.getElementsByClassName("reset alpha")[0].onclick = () => {
    if (n.gte(alphaPowerReq)) {
    n = new Decimal(0)
    alphaPower = alphaPower.add(1)
    }
}

setInterval(() => {
    n = n.add(t.mul(alpha.add(1)))
    t =t.add(0.1)
    alphaPowerReq = new Decimal.pow(alphaReqBase, alphaPower).mul(45)
    if (alphaPower.gte(20)) {
        if (aloveLevel.gte(1)) {
            alpha = alphaPower.mul(4).mul(aloveLevel.add(1))
        } else {
            alpha = alphaPower.mul(4)
        }
    } else {
        alpha = alphaPower
    }
    if (alphaPower.gte(25)) {
        document.getElementById("alove").style.display = "block"
    } else {
        document.getElementById("alove").style.display = "none"
    }
    if (n.gte(aloveReq)) {
        aloveLevel += 1
        aloveReq = aloveReq.mul(5)
        document.getElementById("aloveNum").innerText = aloveLevel
        document.getElementsByClassName("alove")[0].innerHTML = "Req: n(t) &GreaterEqual; " + aloveReq
    }
   document.getElementById("t").innerText = t
   document.getElementById("nt").innerText = n;
   document.getElementById("number1").innerText = alphaPower
   document.getElementById("number2").innerText = alpha
   document.getElementById("req1").innerText = alphaPowerReq
   document.getElementsByClassName("alove")[0].innerHTML = "Req: n(t) &GreaterEqual; " + aloveReq
}, 100);