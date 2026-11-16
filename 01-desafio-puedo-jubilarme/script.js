// Parte 1: solo mujeres (se jubilan a los 60)
let edadMujer = Number(prompt("Parte 1 - Ingresá tu edad:"));

if (edadMujer >= 60) {
  alert("Ya podés jubilarte.");
} else {
  alert("Todavía no podés jubilarte.");
}

// Parte 2: mujeres (60) y hombres (65), con dos bloques if
let edad = Number(prompt("Parte 2 - Ingresá tu edad:"));
let genero = prompt("¿Sos mujer u hombre?").toLowerCase();

if (genero === "mujer") {
  if (edad >= 60) {
    alert("Ya podés jubilarte.");
  } else {
    alert("Todavía no podés jubilarte.");
  }
}

if (genero === "hombre") {
  if (edad >= 65) {
    alert("Ya podés jubilarte.");
  } else {
    alert("Todavía no podés jubilarte.");
  }
}

// Extra Bonus: todo con un solo if, usando operadores lógicos y de relación
if ((genero === "mujer" && edad >= 60) || (genero === "hombre" && edad >= 65)) {
  alert("Bonus: ya podés jubilarte.");
} else {
  alert("Bonus: todavía no podés jubilarte.");
}
