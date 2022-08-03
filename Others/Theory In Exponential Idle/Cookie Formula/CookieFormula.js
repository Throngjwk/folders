import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "TheoryStuff";
var name = "Cookie Formula";
var description = "What will friend what whill";
var authors = "Sky == liver";
var version = 1;

var currency;

var init = () => {
    currency = theory.createCurrency();

    ///////////////////
    // Regular Upgrades

    // click
    {
        click = theory.createUpgrade(0, currency, new FreeCost());
        click.getDescription = (_) => "Click Me!";
        click.getInfo = (amount) => "Click Me!";
        click.boughtOrRefunded = (_) => {
            currency.value += 1
        }
    }

    // f1
    {
        let getDesc = (level) => "f_1=" + getF1(level).toString(0);
        f1 = theory.createUpgrade(1, currency, new ExponentialCost(25, Math.log2(1.65)));
        f1.getDescription = (_) => Utils.getMath(getDesc(f1.level));
        f1.getInfo = (amount) => Utils.getMathTo(getDesc(f1.level), getDesc(f1.level + amount));
    }

    // f2
    {
        let getDesc = (level) => "f_2=" + getF2(level).toString(0);
        f2 = theory.createUpgrade(2, currency, new ExponentialCost(1250, Math.log2(1.85)));
        f2.getDescription = (_) => Utils.getMath(getDesc(f2.level));
        f2.getInfo = (amount) => Utils.getMathTo(getDesc(f2.level), getDesc(f2.level + amount));
    }

    // f3
    {
        let getDesc = (level) => "f_3=" + getF3(level).toString(0);
        f3 = theory.createUpgrade(3, currency, new ExponentialCost(4.75e4, Math.log2(1.85)));
        f3.getDescription = (_) => Utils.getMath(getDesc(f3.level));
        f3.getInfo = (amount) => Utils.getMathTo(getDesc(f3.level), getDesc(f3.level + amount));
    }

    // f4
    {
        let getDesc = (level) => "f_4=" + getF4(level).toString(0);
        f4 = theory.createUpgrade(4, currency, new ExponentialCost(1.22e6, Math.log2(1.85)));
        f4.getDescription = (_) => Utils.getMath(getDesc(f4.level));
        f4.getInfo = (amount) => Utils.getMathTo(getDesc(f4.level), getDesc(f4.level + amount));
    }

    // f5
    {
        let getDesc = (level) => "f_5=" + getF5(level).toString(0);
        f5 = theory.createUpgrade(5, currency, new ExponentialCost(1e8, Math.log2(1.85)));
        f5.getDescription = (_) => Utils.getMath(getDesc(f5.level));
        f5.getInfo = (amount) => Utils.getMathTo(getDesc(f5.level), getDesc(f5.level + amount));
    }

    // f6
    {
        let getDesc = (level) => "f_6=" + getF6(level).toString(0);
        f6 = theory.createUpgrade(6, currency, new ExponentialCost(1e9, Math.log2(1.85)));
        f6.getDescription = (_) => Utils.getMath(getDesc(f6.level));
        f6.getInfo = (amount) => Utils.getMathTo(getDesc(f6.level), getDesc(f6.level + amount));
    }

    // f7
    {
        let getDesc = (level) => "f_7=" + getF7(level).toString(0);
        f7 = theory.createUpgrade(7, currency, new ExponentialCost(1e12, Math.log2(1.85)));
        f7.getDescription = (_) => Utils.getMath(getDesc(f7.level));
        f7.getInfo = (amount) => Utils.getMathTo(getDesc(f7.level), getDesc(f7.level + amount));
    }

    /////////////////
    //// Achievements
    achievement1 = theory.createAchievement(0, "Get Be Useful Now!", "Reach 25 Cookies.", () => currency.value > 25);
    achievement2 = theory.createAchievement(1, "At Be So?", "Reach 100 Cookies.", () => currency.value > 100);
    achievement3 = theory.createAchievement(2, "Waittttttt", "Reach 350 Cookies.", () => currency.value > 350);
    achievement4 = theory.createAchievement(3, "Trash", "Reach 1,250 Cookies.", () => currency.value > 1250);
    achievement5 = theory.createAchievement(4, "A be than f3 level?", "Reach 1 f3 level.", () => f3.level > 0);
    achievement6 = theory.createAchievement(5, "I Hatuo", "Reach 222,222 Cookies.", () => currency.value > 222222);
    achievement7 = theory.createAchievement(6, "Millionare", "Reach 1e6 Cookies.", () => currency.value > 1e6);
    achievement8 = theory.createAchievement(7, "DeciMillionare", "Reach 1e7 Cookies.", () => currency.value > 1e7);
    achievement9 = theory.createAchievement(8, "HectoMillionare", "Reach 1e8 Cookies.", () => currency.value > 1e8);
    achievement10 = theory.createAchievement(9, "Billionare", "Reach 1e9 Cookies.", () => currency.value > 1e9);
    achievement11 = theory.createAchievement(10, "I am Strong?\u3000", "Reach 2,147,483,647 Cookies.", () => currency.value > 2147483647);
    achievement12 = theory.createAchievement(11, "DeciBillionare", "Reach 1e10 Cookies. stronger than \u0022f3\u0022.", () => currency.value > 1e10);
    achievement13 = theory.createAchievement(12, "HectoBillionare", "Reach 1e11 Cookies.", () => currency.value > 1e11);
    achievement14 = theory.createAchievement(13, "Trillionare", "Reach 1e12 Cookies.", () => currency.value > 1e12);
    achievement15 = theory.createAchievement(14, "jQuery Lines of Code * Billion", "Reach 1.075e13 Cookies.", () => currency.value > 1.075e13);
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency.value += dt * bonus * (getF1(f1.level) + getF2(f2.level) + getF3(f3.level) + getF4(f4.level) + getF5(f5.level))
}

var getPrimaryEquation = () => {
    let result = "\\dot{\\rho} = f_1";

    result += "f_2";

    result += "f_3";

    result += "f_4";

    result += "f_5";

    return result;
}

var getF1 = (level) => BigNumber.from(level);
var getF2 = (level) => BigNumber.from(level * 22);
var getF3 = (level) => BigNumber.from(level * 592);
var getF4 = (level) => BigNumber.from(level * 83152);
var getF5 = (level) => BigNumber.from(level * 1500660) * getF6(f6.level) * getF7(f7.level);
var getF6 = (level) => BigNumber.from((level * 150) + 1);
var getF7 = (level) => BigNumber.from((level * 120) + 1);

init();