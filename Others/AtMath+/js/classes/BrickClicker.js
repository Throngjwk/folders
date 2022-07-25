class BrickClicker {
    constructor(id) {
        this.id = id

        this.template = `
          <h1 class="center">You Have <span class="bricks">0</span> Bricks.</h1>
          <button id="click">Click Me!</button>
          <button id="brickupg1">Brick Upgrader 1 <br> Increase bricks per click by 1. <br> Cost:<span id="cost4">20</span></button>
        `
    }
}