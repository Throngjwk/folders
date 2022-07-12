/**
 * When x After a Click, Addiontial +1 Click of x
 * 
 * Cool after Click 100 times get a upgrade.
 */
let x = document.getElementById("clickX")

/**
 * When y After a Click, Addiontial +1 Click
 * 
 * Cool after Click 100 times get a upgrade.
 */
let y = document.getElementById("clickY")

x.onclick = () => {
    game.x = game.x.add(1);
    document.getElementById("x").innerHTML = "x = " + game.x
}

document.getElementById("Upg1").onclick = () => {
    if (game.x.gte(100)) {
    game.a1Level = game.a1Level.add()
    game.x = game.x.sub(100)
    document.getElementById("x").innerHTML = "x = " + game.x
   }
}


let allow;

switch (Date.now().getMonth()) {
    case 1:
        allow = "January"
        break;
    case 2:
        allow = "Febuary"
        break;
    case 3:
        allow = "March"
        break;
    case 4:
        allow = "April"
        break;
    case 5:
        allow = "May"
        break;
    case 6:
        allow = "June"
        break;
    case 7:
        allow = "July"
        break;
    case 8:
        allow = "Augst"
        break;
    case 9:
        allow = "September"
        break;
    case 10:
        allow = "October"
        break;
    case 11:
        allow = "November"
        break;
    case 12:
        allow = "Decemeber"
        break;
}
