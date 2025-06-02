// document.getElementById("top").addEventListener("click", () => {
//     selectTop()
// })

const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav button")
// const iframeLink = document.getElementById("iframeLink")
// const iframeCalc = document.getElementById("iframeCalc")
let previousBoxName = "Accueil"

// iframeLink.addEventListener("click", () => {
//     toggleVisibility(iframeCalc)
// })

navLinks.forEach(
    (link) => {
        link.addEventListener("click", () => {
            const linkid = link.id
            displayBox(linkid.split("button").pop())
        })
    }
)

const viewer = document.querySelectorAll('.caliperModel');

const minAngle = -200;
const maxAngle = 30;

document.body.addEventListener('scroll', () => {
    console.log("scroll")

    const scrollTop = document.body.scrollTop;
    const docHeight = document.body.scrollHeight - document.body.clientHeight;
    const scrollRatio = scrollTop / docHeight;

    const angleY = minAngle + scrollRatio * (maxAngle - minAngle);

    viewer.forEach((view) => {
        const currentOrbit = view.getCameraOrbit();

        const theta = angleY * Math.PI / 180;
        const phi = currentOrbit.phi;
        const radius = currentOrbit.radius;

        view.cameraOrbit = `${theta}rad ${phi}rad ${radius}m`;
        view.jumpCameraToGoal();
    })
});

function displayBox(boxName) {

    if (previousBoxName) {
        let previousBox = document.getElementById(`box${previousBoxName}`)
        previousBox.style.display = "none"
        previousBox.style.opacity = "0"
        previousBox.classList.remove("animated")
    }
    
    let box = document.getElementById(`box${boxName}`)
    box.style.display = "block"
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