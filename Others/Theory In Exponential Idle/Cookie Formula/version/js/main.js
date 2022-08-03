console.log("%cAgain!", "font-family:sans-serif;font-weight:bold;color:darkblue;");
console.log("Converted than exp idle than be now.");

//Main

function Currency(value, fontSize, label) {
    this.value = value
    this.size = fontSize
    this.label = label
}

function Upgrade(getCost, getDesc, multEarn) {
    this.level = 0
    this.cost = getCost
    this.description = getDesc
    this.multEarn = multEarn
    this.costHaved = getCost
}

var currency = [new Currency(new Decimal(0), 32, "\u03C1")]

var upgrades = [
    new Upgrade(new Decimal(25), "f<sub>1</sub>", new Decimal(1.85)),
    new Upgrade(new Decimal(1250), "f<sub>2</sub>", new Decimal(1.85)),
]

var getF1 = (level) => new Decimal(level)
var getF2 = (level) => new Decimal(level * 22)

document.getElementsByClassName("expIdleUpg")[0].onclick = () => {
    currency[0].value = currency[0].value.add(1)
}

document.getElementsByClassName("expIdleUpg")[1].onclick = () => {
    if (currency[0].value.gte(upgrades[0].cost)) {
        upgrades[0].level += 1
        currency[0].value = currency[0].value.sub(upgrades[0].cost)
    }
}

document.getElementsByClassName("expIdleUpg")[2].onclick = () => {
    if (currency[0].value.gte(upgrades[1].cost)) {
        upgrades[1].level += 1
        currency[0].value = currency[0].value.sub(upgrades[1].cost)
    }
}

document.getElementsByClassName("value")[0].innerHTML = currency[0].value
document.getElementsByClassName("currency")[0].style.fontSize = currency[0].size + "px"
document.getElementsByClassName("equal")[0].innerHTML = getF1(upgrades[0].level)
document.body.style.backgroundColor = "snow"
setInterval(() => {
    currency[0].value = currency[0].value.add(getF1(upgrades[0].level))
    upgrades[0].cost = new Decimal.pow(upgrades[0].multEarn, upgrades[0].level).mul(upgrades[0].costHaved)
    document.getElementsByClassName("equal")[0].innerHTML = getF1(upgrades[0].level)
    document.getElementsByClassName("value")[0].innerHTML = currency[0].value
    document.getElementsByClassName("cost")[0].innerHTML = upgrades[0].cost
    document.getElementsByClassName("equal")[1].innerHTML = getF2(upgrades[0].level)
    document.getElementsByClassName("cost")[1].innerHTML = upgrades[1].cost
}, 100);