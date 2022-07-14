function Game() {
    this.tear = new Decimal(0);
    this.tpc = new Decimal(1);
    this.tps = new Decimal(0);
    this.aLevel = new Decimal(0)
    this.getA = (level) => new Decimal(level).sqrt()
    this.cost1 = new Decimal(50)
    this.styleCost1 = new StyleCost1();
}

function StyleCost1() {
    /**
     * Get Font Family go to fonstruct get new account and new font.
     */
    this.fontFamily
}

game = new Game();