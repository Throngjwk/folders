// Of The content.
// Note: Than meter Than be now.

console.log("Note: Than meter be now.")

var meter = new Decimal(0)
var meterTools = {
  ps:new Decimal(0),
  pc:new Decimal(0),
  time:0,
  total:0,
  timeLength:0,
  upgrades:{
    1:{
      title:"Addition Meter by 1",
      level:new Decimal(0),
      getEffect() {
        return meterTools.upgrades["1"].level.add(1)
      }
    }
  }
}
