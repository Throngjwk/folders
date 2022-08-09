// Of The content.
// Note: Than meter Than be now.

console.log("Note: Than meter be now.")

var meter = new Decimal(0)
var meterTools = {
  time:0,
  total:new Decimal(0),
  timeLength:0,
  upgrades:{
    1:{
      title:"Addition Meter by 1",
      level:new Decimal(0),
      cost:new Decimal(200),
      getEffect() {
        return meterTools.upgrades["1"].level.add(0.5)
      }
    },
    2:{
      title:"Mulitiply Meter by 1.2",
      level:new Decimal(0),
      cost:new Decimal(5000),
      getEffect() {
        return new Decimal.pow(2, meterTools.upgrades["2"].level)
      }
    }
  }
}

document.getElementById("upgrader1").onclick = () => {
   if (meter.gte(meterTools.upgrades["1"].cost)) {
     meter = meter.sub(meterTools.upgrades["1"].cost)
     meterTools.upgrades["1"].level = meterTools.upgrades["1"].level.add(1)
     meterTools.upgrades["1"].getEffect() = meterTools.upgrades["1"].getEffect().add(1)
     meterTools.upgrades["1"].cost = meterTools.upgrades["1"].cost.mul(1.8)
   }
}

function UpdateGameArea() {
    meter = meter.add(meterTools.upgrades["1"].getEffect().mul(meterTools.upgrades["2"].getEffect()))
    meterTools.time += 0.1
    meterTools.total = meterTools.total.add(meterTools.upgrades["1"].getEffect())
    meterTools.timeLength = meterTools.time.length
    document.getElementById("meter").innerText = meter;
}

function UpdateUpgradeArea() {
   document.getElementById("upgTitle1").innerText = meterTools.upgrades["1"].title
   document.getElementById("upgCost1").innerText = meterTools.upgrades["1"].cost
   document.getElementById("upgEffect1").innerText = meterTools.upgrades["1"].getEffect()
}

setInterval(() => {
  UpdateGameArea()
  UpdateUpgradeArea()
}, 123)

