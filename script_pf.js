// document.getElementById("top").addEventListener("click", () => {
//     selectTop()
// })

const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav button")
const iframeLink = document.getElementById("iframeLink")
const iframeCalc = document.getElementById("iframeCalc")
let previousBoxNumber = 1

iframeLink.addEventListener("click", () => {
    toggleVisibility(iframeCalc)
})

navLinks.forEach(
    (link) => {
        link.addEventListener("click", () => {
            displayBox(Array.from(link.parentNode.children).indexOf(link))
        })
    }
)

function displayBox(boxNumber) {
    let previousBox = document.getElementById(`box${previousBoxNumber}`)
    previousBox.style.visibility = "hidden"
    previousBox.style.opacity = "0"
    previousBox.classList.remove("animated") 

    let box = document.getElementById(`box${boxNumber+1}`)
    box.style.visibility = "visible"
    box.style.opacity = "1"
    box.classList.add("animated")

    previousBoxNumber = boxNumber+1
    console.log(previousBoxNumber)
}

function toggleVisibility (element) {
    if (element.style.visibility==="hidden") {
        element.style.visibility = "visible"
    } else {
        element.style.visibility = "hidden"
    }
}