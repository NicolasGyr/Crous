var checkCursed = document.querySelector(".check-cursed")
var Q4 = document.querySelector(".reponse")


checkCursed.addEventListener("click", cursedQ)


function cursedQ() {
    if (Q4.value == "Retrouvez nous de 18h à 22h") {
        window.location.pathname = "maze.html"
    }
    else {
        checkCursed.classList.add("red")
    }
}