function Game() {
    this.tear = new Decimal(0);
    this.tpc = new Decimal(1);
    this.tps = new Decimal(0);
    this.aLevel = new Decimal(0)
    this.getA = (level) => new Decimal(level).sqrt()
    this.cost1 = new Decimal(50)
}

game = new Game();