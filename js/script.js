var check1 = document.querySelector(".check-1")
var check2 = document.querySelector(".check-2")
var check3 = document.querySelector(".check-3")

var Q1 = document.querySelector("#Q1")
var Q2 = document.querySelector("#Q2")
var Q3 = document.querySelector("#Q3")

check1.addEventListener("click", checker1)

check2.addEventListener("click", checker2)

check3.addEventListener("click", checker3)

check1.addEventListener("click", redirect)

check2.addEventListener("click", redirect)

check3.addEventListener("click", redirect)


function checker1() {
    if (Q1.value === "A7F6D2M5A4D9") {
        check1.classList.add("green")
        check1.classList.remove("red")
        document.querySelector(".wrong").classList.add('none')
        document.querySelector(".arrow").classList.add('none')
        document.querySelector(".checked").classList.remove('none')
    } else {
        check1.classList.add("red")
        check1.classList.remove("green")
        document.querySelector(".wrong").classList.remove('none')
        document.querySelector(".checked").classList.add('none')
        document.querySelector(".arrow").classList.remove('none')

    }    
}
function checker2() {
    if (Q2.value === "7") {
        check2.classList.add("green")
        document.querySelector(".wrong-2").classList.add('none')
        check2.classList.remove("red")
        document.querySelector(".arrow-2").classList.add('none')
        document.querySelector(".checked-2").classList.remove('none')
    } else {
        check2.classList.add("red")
        check2.classList.remove("green")
        document.querySelector(".wrong-2").classList.remove('none')
        document.querySelector(".checked-2").classList.add('none')
        document.querySelector(".arrow-2").classList.remove('none')
    }    
}
function checker3() {
    if (Q3.value == "Tu m'as trouvé, Sherlock !") {
        check3.classList.add("green")
        document.querySelector(".wrong-3").classList.add('none')
        check3.classList.remove("red")
        document.querySelector(".arrow-3").classList.add('none')
        document.querySelector(".checked-3").classList.remove('none')
    } else {
        check3.classList.add("red")
        check3.classList.remove("green")
        document.querySelector(".wrong-3").classList.remove('none')
        document.querySelector(".checked-3").classList.add('none')
        document.querySelector(".arrow-3").classList.remove('none')
    }    
}

function redirect() {
    if ((Q1.value === "A7F6D2M5A4D9") && (Q2.value === "7") && (Q3.value === "Tu m'as trouvé, Sherlock !")) {
        window.location.pathname = "text.html"
    }
}

