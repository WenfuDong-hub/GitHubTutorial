/**
 * 9. Pedra, paper o tisora
Demana a l’usuari que triï entre “pedra”, “paper” o “tisora”.

L’ordinador genera una elecció 'aleatòria'.

Mostra qui guanya segons les regles:

Pedra guanya tisora.

Tisora guanya paper.

Paper guanya pedra.

Empat si els dos trien el mateix.

Fes servir if/else if per comprovar condicions.
 */


let aleatori = Math.floor(Math.random() * 3) + 1;
console.log(aleatorio);

//m'asseguro que em dona bé la seva elecció
let eleccion;
do {
eleccion = prompt("Pon un numero: 1.Paper, 2.Tisora, 3.Pedra");
}while(isNaN(eleccion) || eleccion < 1 || eleccion > 3);

if(aleatorio == eleccion) {
    alert("Empat")
}

if((aleatori == 3 && eleccion ==2) || (aleatori == 2 && eleccion ==1) || (aleatori == 3 && eleccion ==1)) {
    alert("Guanya la web")
}





