class Clock {
    constructor(id) {
        this.id = id;

        this.template = `
          <h2>Days:<span id="days">0</span></h2>
          <h2>Days Effect:<span id="de">1</span></h2>
          <h1 class="digital">
          <span id="timer"></span>
          <label class="mono" for="digitalTitle">seconds</label>
          </h1>
        `

        document.getElementById(id).innerHTML = this.template
    }
}