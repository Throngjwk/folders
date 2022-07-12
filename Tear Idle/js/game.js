function Game() {
    this.tear = new Decimal(0);
    this.tpc = new Decimal(1);
    this.tps = new Decimal(0);
    this.achievements = [
        new Achievement(0, "You Played!", "go aceepted now.", document.getElementById("achievement1"), true)
    ]
}
function Achievement(order, name, description, id, isUnlocked) {
    this.name = name;
    this.description = description;
    this.isUnlocked = isUnlocked;
    this.id = id;
}