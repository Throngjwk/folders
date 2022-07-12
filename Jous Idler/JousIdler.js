import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "while (sky == liver);";
var name = "Grass Clicker";
var description = "An implementation of... what? everything you buy will only works while offline";
var authors = "Sky == liver";
var version = 1;

var currency;

var currencies = new Array(9);
var currencies_names = ["a", "b", "c", "c_1", "c_2", "c_3"];

quaternaryEntries = [];

var init = () => {

}

var getQuaternaryEntries = () => {
    if (quaternaryEntries.length == 0)
    {
        quaternaryEntries.push(new QuaternaryEntry("a", null));
        quaternaryEntries.push(new QuaternaryEntry("b", null));
        quaternaryEntries.push(new QuaternaryEntry("c", null));
        quaternaryEntries.push(new QuaternaryEntry("c_1", null));
        quaternaryEntries.push(new QuaternaryEntry("c_2", null));
        quaternaryEntries.push(new QuaternaryEntry("c_3", null));
    }
    for (let i = 0; i < 6; ++i) {
        quaternaryEntries[i].value = currencies[i].value;
    }
    return quaternaryEntries;
}