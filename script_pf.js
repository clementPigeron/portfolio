// document.getElementById("top").addEventListener("click", () => {
//     selectTop()
// })

const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav button")
const iframeLink = document.getElementById("iframeLink")
const iframeCalc = document.getElementById("iframeCalc")
let previousBoxName = false

iframeLink.addEventListener("click", () => {
    toggleVisibility(iframeCalc)
})

navLinks.forEach(
    (link) => {
        link.addEventListener("click", () => {
            const linkid = link.id
            displayBox(linkid.split("button").pop())
        })
    }
)

function displayBox(boxName) {
    
    if (previousBoxName) {
        let previousBox = document.getElementById(`box${previousBoxName}`)
        previousBox.style.visibility = "hidden"
        previousBox.style.opacity = "0"
        previousBox.classList.remove("animated")
    }
    
    let box = document.getElementById(`box${boxName}`)
    box.style.visibility = "visible"
    box.style.opacity = "1"
    box.classList.add("animated")

    previousBoxName = boxName
}

function toggleVisibility (element) {
    if (element.style.display==="none") {
        element.style.display = "inline"
    } else {
        element.style.display = "none"
    }
}