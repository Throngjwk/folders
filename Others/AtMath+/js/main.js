//Elements
let minigames = [new Alove("alove"), new BrickClicker("brickClicker"), new Clock("clock")]

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
let betaUpgrades = [new BetaUpgrade(new Decimal(2), new Decimal(1)), new BetaUpgrade(new Decimal(4), new Decimal(1))]
var bricks = new Decimal(0)
var bpc = new Decimal(1)
var bps = new Decimal(0)
var beff = new Decimal(0)
let brickUpgrades = [new BrickUpgrade(new Decimal(20), new Decimal(1))]
var gamma = new Decimal(0)
var gammaPower = new Decimal(0)
var gammaPowerReq = new Decimal(1e35)
var gammaPowerReqBase = new Decimal(1e5)
const changelog = `
  <h3>v1.0.1 - Intergating number win Weep (Greek Generators, Automation)</h3>
  <h4>Imporved &int;<sub>1</sub></h4>
  <h4>Imporved &int;<sub>2</sub> & Automation</h4>
  <br>
  <h3>v1.0.1 - More Greek, More Fun.</h3>
  <h4>Imporved &gamma;-Power & The Clock</h4>
  <br>
  <h3>v1.0.0 - Learing Greeks</h3>
  <h4>Imporved &alpha;-Power & The Alove</h4>
  <h4>Imporved &beta;-Power & The Brick Clicker</h4>
  <h4>Imporved Layers.json</h4>
`
var seconds = new Decimal(0)
var days = new Decimal(0)
var daysEffect = new Decimal(1)
let UpdateClock = () => {
    seconds = seconds.add(new Decimal(36).mul(daysEffect).mul(gammaPower.sub(3)))
    document.getElementById("timer").innerText = seconds
    document.getElementById("days").innerText = days
    document.getElementById("de").innerText = daysEffect
}
var intergations = [{
    resource:new Decimal(0),
    int1req:new Decimal(1.25e5),
    int1reqBase:new Decimal(10),
    effectDescription:"Mulitiplying gamma power gain by 1",
    boostGain:new Decimal(1),
    upgrades:{
        first:{
            title:"Gain?",
            description:"Mulitiply timer speed by 2",
            cost:new Decimal(2)
        }
    }
}]

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

document.getElementsByClassName("reset gamma")[0].onclick = () => {
    if (n.gte(gammaPowerReq)) {
    n = new Decimal(0)
    gammaPower = gammaPower.add(1)
    }
}

document.getElementsByClassName("reset int")[0].onclick = () => {
    if (gammaPower.gte(intergations[0].int1req)) {
    n = new Decimal(0)
    intergations[0].resource = intergations[0].resource.add(1)
    }
}

document.getElementById("upgbeta1").onclick = () => {
    if (betaPower.gte(betaUpgrades[0].cost)) {
        betaPower = betaPower.sub(betaUpgrades[0].cost)
        betaUpgrades[0].cost = betaUpgrades[0].cost.add(3)
        betaUpgrades[0].effect = betaUpgrades[0].effect.add(0.1)
    }
}

document.getElementById("upgbeta2").onclick = () => {
    if (betaPower.gte(betaUpgrades[1].cost)) {
        betaPower = betaPower.sub(betaUpgrades[1].cost)
        betaUpgrades[1].cost = betaUpgrades[1].cost.add(3)
        betaUpgrades[1].effect = betaUpgrades[1].effect.mul(2.2)
    }
}

document.getElementById("click").onclick = () => {
    bricks = bricks.add(1)
}

document.getElementById("brickupg1").onclick = () => {
    if (bricks.gte(brickUpgrades[0].cost)) {
    bricks = bricks.sub(brickUpgrades[0].cost)
    brickUpgrades[0].cost = brickUpgrades[0].cost.mul(2.5)
    brickUpgrades[0].effect = brickUpgrades[0].effect.add(1)
    }
}

setInterval(() => {
    n = n.add(t.pow(beta.add(1)).mul(alpha.add(1)))
    t =t.add(new Decimal(0.1).mul(betaUpgrades[0].effect))
    alphaPowerReq = new Decimal.pow(alphaReqBase, alphaPower).mul(45)
    betaPowerReq = new Decimal.pow(betaPowerReqBase, betaPower.pow(betaPower.div(36).add(1))).mul(2.5e8)
    gammaPowerReq = new Decimal.pow(gammaPowerReqBase, gammaPower.pow(gammaPower.div(new Decimal(13).mul(daysEffect)).add(1))).mul(1e35)
    intergations[0].int1req = new Decimal.pow(intergations[0].int1reqBase, intergations[0].resource).mul(1.25e5)
    intergations[0].boostGain = new Decimal.pow(4, intergations[0].resource).sub(new Decimal(0).sub(1))
    intergations[0].effectDescription = 
    "Mulitiply Gamma-Power Gain by " + intergations[0].boostGain
    gammaPower = gammaPower.add(intergations[0].boostGain)
    if (alphaPower.gte(20)) {
        if (aloveLevel >= 1) {
            if (aloveLevel >= 5) {
                alpha = alphaPower.mul(4).mul(aloveLevel + 1).mul(n.log2().pow(gammaPower.add(1))).mul(beff)
            } else {
            alpha = alphaPower.mul(4).mul(aloveLevel + 1)
            }
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
    if (alphaPower.gte(175)) {
        document.getElementById("gamma").style.display = "block"
    } else {
        document.getElementById("gamma").style.display = "none"
    }
    if (gammaPower.gte(4)) {
        document.getElementById("clock").style.display = "block"
    } else {
        document.getElementById("clock").style.display = "none"
    }
    if (gammaPower.gte(1e5)) {
        document.getElementById("int1").style.display = "block"
    } else {
        document.getElementById("int1").style.display = "none"
    }
    if (betaUpgrades[1].effect.gte(2)) {
        document.getElementById("brickClicker").style.display = "block"
    } else {
        document.getElementById("brickClicker").style.display = "none"
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
    beff = bricks.sqrt().add(1)
    bpc = brickUpgrades[0].effect
   document.getElementById("t").innerText = t
   document.getElementById("nt").innerText = n;
   document.getElementById("number1").innerText = alphaPower
   document.getElementById("number2").innerText = alpha
   document.getElementById("req1").innerText = alphaPowerReq
   document.getElementsByClassName("alove")[0].innerHTML = "Req: n(t) &GreaterEqual; " + aloveReq
   document.getElementById("number3").innerText = betaPower
   document.getElementById("number4").innerText = beta
   document.getElementById("req2").innerText = betaPowerReq
   document.getElementById("cost1").innerText = betaUpgrades[0].cost
   document.getElementById("cost2").innerText = betaUpgrades[1].cost
   document.getElementById("bricks").innerText = bricks
   document.getElementById("number5").innerText = gammaPower
   document.getElementById("number6").innerText = gamma
   document.getElementById("req3").innerText = gammaPowerReq
   document.getElementById("req4").innerText = intergations[0].int1req
   document.getElementById("effectDesc1").innerText = intergations[0].effectDescription
   if (gammaPower.gte(4)) {
     UpdateClock();
   }
   days = seconds.div(86400)
   daysEffect = days.add(1).sqrt()
}, 100);
document.getElementById("changelog").innerHTML = changelog