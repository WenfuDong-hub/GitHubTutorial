/**
 * 3. Taula de multiplicar
Demana un número i mostra la seva taula de multiplicar del 1 al 10.
Fes-ho amb un for.
 */
let num//variable local
do {
num = prompt("Pon un numero, tiene que ser entre 1 y 10");
}while(isNaN(num))

for (let i = 1; i <= 10; i++) {
    //console.log(num + " x " + i + " = " + (num * i));
    console.log(`${num} x ${i} = ${num*i}`);
}