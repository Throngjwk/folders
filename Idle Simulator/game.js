function Game() {
    this.x = new Decimal(0)
    this.y = new Decimal(0)
    this.regularUpgrades = new RegularUpg();
}

function RegularUpg() {
    this.a1 = new Decimal(0)
    this.a1Level = new Decimal(0)
}


game = new Game();