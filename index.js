function toggleGrass(element) {
    element.style.visibility = "hidden";
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

// Función para agregar bloques de pasto dinámicamente según el ancho de la pantalla
function addGrassBlocks() {
    const ground = document.getElementById("ground");
    const blockWidth = 100; // Ancho exacto de cada bloque de pasto
    const blocksNeeded = Math.floor(window.innerWidth / blockWidth);

    // Limpiar bloques de pasto existentes
    ground.innerHTML = "";

    // Agregar los bloques de pasto
    for (let i = 0; i < blocksNeeded; i++) {
        const grassBlock = document.createElement("img");
        grassBlock.src = "grass.jpg";
        grassBlock.alt = "Bloque de Pasto";
        grassBlock.className = "ground-block";
        grassBlock.onclick = function() { toggleGrass(grassBlock); };
        ground.appendChild(grassBlock);
    }
}

// Llamar a la función al cargar la página y ajustar al redimensionar
window.onload = addGrassBlocks;
window.onresize = addGrassBlocks;
