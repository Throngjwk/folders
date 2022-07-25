class Alove {
    constructor(id) {
        this.id = id;

        this.template = `
          <h2>Alove Level:<span id="aloveNum">0</span></h2>
          <h2 class="alove">Req:n(t) &GreaterEqual; 1e7</h2>
        `

        document.getElementById(id).innerHTML = this.template
    }
}