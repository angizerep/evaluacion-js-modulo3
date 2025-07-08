const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");
const info = document.getElementById("info");

function saludar() {
    const nombre = nameInput.value.trim();

    if (nombre) {
        // Campo con data
        greeting.textContent = `Hola, ${nombre}`;
        info.textContent = `Tu nombre tiene ${nombre.length} caracteres.`;
    } else {
        // Campo vacío
        greeting.textContent = "";
        info.textContent = "***** Alerta: Por favor, escribe tu nombre. *****";
    }
}

greetBtn.addEventListener("click", saludar);

nameInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        saludar();
    }
});
