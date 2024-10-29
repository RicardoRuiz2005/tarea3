function toggleGrass(element) {
    element.style.visibility = "hidden"; // Oculta el bloque de pasto manteniendo su espacio
}

function toggleZombie(element) {
    const zombieImg = element.querySelector("#zombie");
    zombieImg.src = zombieImg.src.includes("zombie.webp") ? "zombie_meat.webp" : "zombie.webp";
}

function toggleDiamond(element) {
    const diamondImg = element.querySelector("#diamond");
    diamondImg.src = diamondImg.src.includes("bloque_diamante.webp") ? "diamante.webp" : "bloque_diamante.webp";
}

function togglePig(element) {
    const pigImg = element.querySelector("#pig");
    pigImg.src = pigImg.src.includes("cerdo.webp") ? "carne_cerdo.webp" : "cerdo.webp";
}
