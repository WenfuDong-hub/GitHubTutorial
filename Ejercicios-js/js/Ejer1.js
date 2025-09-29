/*
1. Avaluació de nota
Demana una nota numèrica (0–10) i mostra un missatge segons el rang:

< 5 → “Suspès”

5–6.9 → “Aprovat”

7–8.9 → “Notable”

9–10 → “Excel·lent”

(if/else if o switch amb intervals).
*/

let numero = prompt("Pon una nota"); //per introduir la nota
if (isNaN(numero)) {
    alert("No has ficat un numero!")
}
else{ //Entro només quan tingui un número (Number)

if (numero < 5) {
    console.log('Suspès');
}
else if (numero > 5 && numero < 7) {
    console.log('Aprovat');
}
else if (numero >= 7 && numero < 9) {
    console.log('Notable');
}
else if (numero >= 9 && numero <= 10) {
    console.log('Excel·lent');
} 
else {
    console.log('Nota incorrecta'); //controlo que sigui un número correcte y no una letra
}

}