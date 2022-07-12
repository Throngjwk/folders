document.getElementById("click").onclick = () => {
    game.tear = game.tear.add(1)
    document.getElementById("tear").innerHTML = "You Have " + game.tear + " Tear."
}

document.getElementById("cost1").onclick = () => {
    if (game.tear.gte(game.cost1)) {
        game.tear = game.tear.sub(game.cost1)
    }
}

function UpdateGameArea() {
    document.getElementById("sqrt").innerText = game.aLevel

    /**
     * Get Addiontal Per Second.
     */
    game.tear = game.tear.add(game.tps)

    document.getElementById("tear").innerHTML = "You Have " + game.tear + " Tear."
}

document.body.style.fontSize = "2.2vh"
document.getElementById("click").style.backgroundColor = "yellow"
document.getElementById("click").style.fontFamily = "Comic Sans MS"
document.getElementById("click").style.bottom = "inherit"
document.getElementById("cost1").style.backgroundColor = "yellow"
document.getElementById("cost1").style.fontFamily = "Comic Sans MS"
document.getElementById("cost1").style.bottom = "inherit"

setInterval(UpdateGameArea, 100)