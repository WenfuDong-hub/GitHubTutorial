/**
 * 7. Joc de l’endevina número
Genera un número aleatori entre 1 i 10.
Demana a l’usuari que l’endevini fins que ho aconsegueixi. Mostra missatge si s’ha encertat o si ha de provar un altre cop.
(while amb condició).
 */

let nume = 4;
let n;

while(n != nume || isNaN(n)) {
    n = prompt("Pon un numero de entre 1 al 10");
        if (n <= 10) {
    console.log("No has encertado el numero, prueba otra vez");
        }
        else {
            console.log("Pon un numero valido");
        }
}
console.log("Has encertado el numero")