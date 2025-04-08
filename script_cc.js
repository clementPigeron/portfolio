let positionSelector = 1
let beginTop = 0
let beginBot = 0

document.getElementById("top").addEventListener("click", () => {
    selectTop()
})
document.getElementById("baseLine").addEventListener("click", () => {
    selectTop()
})
document.getElementById("bot").addEventListener("click", () => {
    selectBot()
})
document.getElementById("otherLine").addEventListener("click", () => {
    selectBot()
})

document.getElementById("clear").addEventListener("click", () => {
    clearLines()
})


let digit = document.querySelectorAll(".digit")
digit.forEach(
    (btn) => {
        btn.addEventListener("click", () => {
            writeDigit(btn.textContent)
        })
    }
)

let operator = "add"
let operatorBloc = document.querySelectorAll(".operator")
operatorBloc.forEach(
    (btn) => {
        btn.addEventListener("click", () => {
            writeOperator(btn.textContent)
            operator = `${btn.id}`
            console.log(operator)
        })
    }
)

document.getElementById("enter").addEventListener("click", () => {
    let top = parseInt(document.getElementById("baseLine").innerText)
    let bot = parseInt(document.getElementById("otherLine").innerText)
    let result = 0
    switch (operator) {
        case "add": result = top + bot; break;
        case "substract": result = top - bot; break;
        case "multiply": result = top * bot; break;
    }
    document.getElementById("result").innerHTML = result
    console.log(operator)
})

function writeDigit(nb) {

    if (positionSelector === 1) {

        if (beginTop === 0) {
            document.getElementById("baseLine").innerHTML = `${nb}`
            beginTop++
        } else {
            document.getElementById("baseLine").innerHTML += `${nb}`
        }

    } else {
        if (beginBot === 0) {
            document.getElementById("otherLine").innerHTML = `${nb}`
            beginBot++
        } else {
            document.getElementById("otherLine").innerHTML += `${nb}`
        }
    }
}

function writeOperator(op) {
    document.getElementById("operatorLine").innerHTML = `${op}`
    if (beginBot === 0) {
        selectBot()
    }
}

function selectTop() {
    document.getElementById("baseLine").style.border = "1px solid red"
    document.getElementById("otherLine").style.border = "0px"
    positionSelector = 1
}
function selectBot() {
    document.getElementById("otherLine").style.border = "1px solid red"
    document.getElementById("baseLine").style.border = "0px"
    positionSelector = 2
}

function clearLines() {
    document.getElementById("baseLine").innerHTML = "&nbsp;"
    document.getElementById("otherLine").innerHTML = "&nbsp;"
    beginTop = 0
    beginBot = 0
    selectTop()
}