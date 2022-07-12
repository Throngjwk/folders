document.getElementById("click").onclick = () => {
    game.tear = game.tear.add(1)
    document.getElementById("tear").innerHTML = "You Have " + game.tear + " Tear."
}

function UpdateGameArea() {
    document.getElementById("sqrt").innerText = game.aLevel

    document.getElementById("tear").innerHTML = "You Have " + game.tear + " Tear."
}

document.body.style.fontSize = "2.2vh"

setInterval(UpdateGameArea, 100)