// Of The content.
// Note: Than meter Than be now.

console.log("Note: Than meter be now.")

var meter = new Decimal(0)
var meterTools = {
  ps:new Decimal(0),
  pc:new Decimal(1),
  time:0,
  total:0,
  timeLength:0,
  upgrades:{
    1:{
      title:"Addition Meter by 1",
      level:new Decimal(0),
      cost:new Decimal(200),
      getEffect() {
        return meterTools.upgrades["1"].level.add(0.5)
      }
    }
  }
}

function UpdateGameArea() {
    meter = meter.add(meterTools.upgrades["1"].getEffect())
    document.getElementById("meter").innerText = meter;
}

setInterval(UpdateGameArea, 123)

