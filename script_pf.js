// document.getElementById("top").addEventListener("click", () => {
//     selectTop()
// })

let nav = document.querySelector("nav")
let navLinks = document.querySelectorAll("nav button")
let previousBoxNumber = 1



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