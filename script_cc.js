let positionSelector = 1
let beginTop = 0
let beginBot = 0

const paletteColors = document.querySelectorAll('input[name="paletteColor"]')

for(const radioColor of paletteColors) {
    radioColor.addEventListener("change", function() {
        changeStyle(radioColor.value)
    })
}

changeStyle("default")

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

function changeStyle(sel) {

    // var style = document.createElement('style');
    // style.type = 'text/css';

    // if (sel==="default") {
    //     var cssString =
    //         '#calculatorBox {    background-color: lightgray;}#baseLine {    border: 1px solid red;}#monitor,#resultBox {    color: white;    background-color: black;}button {    color: #ffffff;    border-top: 2px solid #62b568;    border-right: 3px solid #0e3311;    border-left: 2px solid #62b568;    border-bottom: 4px solid #0e3311;    background-color: #62b568;}'
    // } else if (sel==="black") {
    //     var cssString =
    //         '#calculatorBox {    background-color: black;}#baseLine {    border: 1px solid red;}#monitor,#resultBox {    color: white;    background-color: black;}button {    color: #ffffff;    border-top: 2px solid #62b568;    border-right: 3px solid #0e3311;    border-left: 2px solid #62b568;    border-bottom: 4px solid #0e3311;    background-color: #62b568;}'
    // }
    // document.getElementById("paletteStyle").innerHTML = cssString

    if (sel=="default") {
        console.log("default")
        document.querySelector("html").style["background-color"] = "white"
        document.querySelector("header").style["color"] = "black"
        document.querySelector("#paletteSelector").style["color"] = "black"
        document.querySelector("#calculatorBox").style["background-color"] = "lightgray"
        document.querySelector("#baseLine").style["border"] = "1px solid red"
        document.querySelectorAll(".monitor").forEach((mon) => {
            mon.style["color"] = "white"
            mon.style["background-color"] = "black"
        })
        document.querySelectorAll("button").forEach((btn) => {
            btn.style["color"] = "#ffffff"
            btn.style["border-top"] = "2px solid #62b568"
            btn.style["border-right"] = "3px solid #0e3311"
            btn.style["border-left"] = "2px solid #62b568"
            btn.style["border-bottom"] = "4px solid #0e3311"
            btn.style["background-color"] = "#62b568"
        })
        

    } else if (sel=="black") {
        console.log("black")
        document.querySelector("html").style["background-color"] = "black"
        document.querySelector("header").style["color"] = "white"
        document.querySelector("#paletteSelector").style["color"] = "white"
    } else if (sel=="dark") {
        console.log("dark")
        document.querySelector("html").style["background-color"] = "DimGray"
        document.querySelector("header").style["color"] = "white"
        document.querySelector("#paletteSelector").style["color"] = "white"
    }

    // style.appendChild(document.createTextNode(cssString));
    // document.head.appendChild(style);
}