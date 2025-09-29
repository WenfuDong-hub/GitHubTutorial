/**
 * 5. Contrasenya secreta
Demana a l’usuari que introdueixi una contrasenya. Repeteix fins que escrigui la contrasenya correcta ("javascript2024").
Utilitza un while o do…while.
 */


let contra;
const correcta = "javascript2024";

do {
    contra = prompt("Pon la contraseña");   
} while(contra != correcta)

console.log("Contraseña correcta");
