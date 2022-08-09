// Of The content.
// Note: Than meter Than be now.

console.log("Note: Than meter be now.")

var meter = new Decimal(0)
var meterTools = {
  time:0,
  total:new Decimal(0),
  allecrate:10
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
        return new Decimal.pow(1.2, meterTools.upgrades["2"].level)
      }
    },
    3:{
      title:"Mulitiply Meter by 1.5",
      level:new Decimal(0),
      cost:new Decimal(50000000),
      getEffect() {
        return new Decimal.pow(1.5, meterTools.upgrades["3"].level)
      }
    }
  }
}

document.getElementById("upgrader1").onclick = () => {
   if (meter.gte(meterTools.upgrades["1"].cost)) {
     meter = meter.sub(meterTools.upgrades["1"].cost)
     meterTools.upgrades["1"].level = meterTools.upgrades["1"].level.add(1)
     meterTools.upgrades["1"].cost = meterTools.upgrades["1"].cost.mul(1.8)
   }
}

document.getElementById("upgrader2").onclick = () => {
   if (meter.gte(meterTools.upgrades["2"].cost)) {
     meter = meter.sub(meterTools.upgrades["2"].cost)
     meterTools.upgrades["2"].level = meterTools.upgrades["2"].level.add(1)
     meterTools.upgrades["2"].cost = meterTools.upgrades["2"].cost.mul(32)
   }
}

document.getElementById("upgrader3").onclick = () => {
   if (meter.gte(meterTools.upgrades["3"].cost)) {
     meter = meter.sub(meterTools.upgrades["3"].cost)
     meterTools.upgrades["3"].level = meterTools.upgrades["3"].level.add(1)
     meterTools.upgrades["3"].cost = meterTools.upgrades["3"].cost.mul(4096)
   }
}

function UpdateGameArea() {
    meter = meter.add(meterTools.upgrades["1"].getEffect().mul(meterTools.upgrades["2"].getEffect().mul(meterTools.upgrades["3"].getEffect())))
    meterTools.time += 0.1
    meterTools.total = meterTools.total.add(meterTools.upgrades["1"].getEffect())
    meterTools.timeLength = meterTools.time.length
    document.getElementById("meter").innerText = meter;
}

function UpdateUpgradeArea() {
   document.getElementById("upgTitle1").innerText = meterTools.upgrades["1"].title
   document.getElementById("upgCost1").innerText = meterTools.upgrades["1"].cost
   document.getElementById("upgEffect1").innerText = meterTools.upgrades["1"].getEffect()
   if (meter.gte(meterTools.upgrades["1"].cost)) {
      document.getElementById("upgrader1").className = "upgrade-unlocked"
   } else {
      document.getElementById("upgrader1").className = "upgrade-locked"
   }
   document.getElementById("upgTitle2").innerText = meterTools.upgrades["2"].title
   document.getElementById("upgCost2").innerText = meterTools.upgrades["2"].cost
   document.getElementById("upgEffect2").innerText = meterTools.upgrades["2"].getEffect()
   if (meter.gte(meterTools.upgrades["2"].cost)) {
      document.getElementById("upgrader2").className = "upgrade-unlocked"
   } else {
      document.getElementById("upgrader2").className = "upgrade-locked"
   }
   document.getElementById("upgTitle3").innerText = meterTools.upgrades["3"].title
   document.getElementById("upgCost3").innerText = meterTools.upgrades["3"].cost
   document.getElementById("upgEffect3").innerText = meterTools.upgrades["3"].getEffect()
   if (meter.gte(meterTools.upgrades["3"].cost)) {
      document.getElementById("upgrader3").className = "upgrade-unlocked"
   } else {
      document.getElementById("upgrader3").className = "upgrade-locked"
   }
}

setInterval(() => {
  UpdateGameArea()
  UpdateUpgradeArea()
}, 123)

// ALSOS ALLECRATE.

function UpdateAllecrateArea() {
  meterTools.allecrate /= 1.5
}

var mod = {
  name:"Idling Eater",
  version:"1.0.0",
  data:[
    meter,
    meterTools
  ]
}

document.title = mod.name

setInterval(UpdateAllecrateArea, 10000)
