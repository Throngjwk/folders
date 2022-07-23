var n = new Decimal(0)
var t = new Decimal(0)
var alpha = new Decimal(0)
var alphaPower = new Decimal(0)
var alphaPowerReq = new Decimal(25)
var alphaReqBase = new Decimal(1.45)

setInterval(() => {
    n = n.add(t.mul(alpha.add(1)))
    t =t.add(0.1)
   document.getElementById("t").innerText = t
   document.getElementById("nt").innerText = n;
}, 100);