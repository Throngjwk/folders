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
var beta = new Decimal(0)
var betaPower = new Decimal(0)
var betaPowerReq = new Decimal(2.5e8)
var betaPowerReqBase = new Decimal(1000)

document.getElementsByClassName("reset alpha")[0].onclick = () => {
    if (n.gte(alphaPowerReq)) {
    n = new Decimal(0)
    alphaPower = alphaPower.add(1)
    }
}

document.getElementsByClassName("reset beta")[0].onclick = () => {
    if (n.gte(betaPowerReq)) {
    n = new Decimal(0)
    betaPower = betaPower.add(1)
    }
}

setInterval(() => {
    n = n.add(t.pow(beta.add(1)).mul(alpha.add(1)))
    t =t.add(0.1)
    alphaPowerReq = new Decimal.pow(alphaReqBase, alphaPower).mul(45)
    betaPowerReq = new Decimal.pow(betaPowerReqBase, betaPower.pow(betaPower.div(36).add(1))).mul(2.5e8)
    if (alphaPower.gte(20)) {
        if (aloveLevel >= 1) {
            alpha = alphaPower.mul(4).mul(aloveLevel + 1)
        } else {
            alpha = alphaPower.mul(4)
        }
    } else {
        alpha = alphaPower
    }
    beta = betaPower
    if (alphaPower.gte(25)) {
        document.getElementById("alove").style.display = "block"
    } else {
        document.getElementById("alove").style.display = "none"
    }
    if (aloveLevel >= 3) {
        document.getElementById("beta").style.display = "block"
    } else {
        document.getElementById("beta").style.display = "none"
    }
    if (n.gte(aloveReq)) {
        aloveLevel += 1
        aloveReq = aloveReq.mul(5)
        document.getElementById("aloveNum").innerText = aloveLevel
        document.getElementsByClassName("alove")[0].innerHTML = "Req: n(t) &GreaterEqual; " + aloveReq
    }
    if (alphaPower.gte(25)) {
        document.getElementsByClassName("started")[0].style.display = "none"
    } else {
        document.getElementsByClassName("started")[0].style.display = "block"
    }
    if (alphaPower.gte(25)) {
        document.getElementById("guide1").style.display = "block"
    } else {
        document.getElementById("guide1").style.display = "none"
    }
    if (alphaPower.gte(25)) {
        document.getElementById("guide2").style.display = "block"
    } else {
        document.getElementById("guide2").style.display = "none"
    }
    if (alphaPower.gte(25)) {
        document.getElementById("guide3").style.display = "block"
    } else {
        document.getElementById("guide3").style.display = "none"
    }
   document.getElementById("t").innerText = t
   document.getElementById("nt").innerText = n;
   document.getElementById("number1").innerText = alphaPower
   document.getElementById("number2").innerText = alpha
   document.getElementById("req1").innerText = alphaPowerReq
   document.getElementsByClassName("alove")[0].innerHTML = "Req: n(t) &GreaterEqual; " + aloveReq
   document.getElementById("number3").innerText = betaPower
   document.getElementById("number4").innerText = beta
   document.getElementById("req2").innerText = betaPowerReq
}, 100);