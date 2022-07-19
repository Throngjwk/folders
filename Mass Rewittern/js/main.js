x = document.getElementById("background")

document.getElementById("setColor").onclick = () => {
    document.body.style.backgroundColor = x.value
}

x2 = document.getElementById("massChange")
x3 = document.getElementById("bigMassChange")

document.getElementById("one").onclick = () => {
   document.getElementById("mass").style.color = x2.value
}

document.getElementById("two").onclick = () => {
    document.getElementById("bigMass").style.color = x3.value
 }