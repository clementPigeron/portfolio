// document.getElementById("top").addEventListener("click", () => {
//     selectTop()
// })

const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav button")
// const iframeLink = document.getElementById("iframeLink")
// const iframeCalc = document.getElementById("iframeCalc")
let previousBoxName = "Profil"

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

const viewer = document.querySelector('#caliperModel');

// Valeur maximale et minimale de l'angle en degrés
const minAngle = -180;
const maxAngle = 180;

document.body.addEventListener('scroll', () => {
    console.log("scroll")
// Calculer un ratio de scroll (0 en haut, 1 en bas)
const scrollTop = document.body.scrollTop;
const docHeight = document.body.scrollHeight - document.body.clientHeight;
const scrollRatio = scrollTop / docHeight;

// Calculer l'angle Y en fonction du scroll
const angleY = minAngle + scrollRatio * (maxAngle - minAngle);

// Récupérer la valeur actuelle de la camera-orbit (azimuth, elevation, distance)
// On garde elevation et distance fixes
const currentOrbit = viewer.getCameraOrbit();
// currentOrbit est un objet {theta, phi, radius} en radians/meters
// On remplace theta par angleY converti en radians
const theta = angleY * Math.PI / 180;
const phi = currentOrbit.phi;
const radius = currentOrbit.radius;

viewer.cameraOrbit = `${theta}rad ${phi}rad ${radius}m`;
viewer.jumpCameraToGoal(); // Appliquer immédiatement la nouvelle position
});

function displayBox(boxName) {
    const boxContainer = document.getElementById("boxContainer")

    if (boxContainer.style.display==="none") {
        boxContainer.style.display = "flex"
    }

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