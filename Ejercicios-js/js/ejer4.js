/**
 * 4. Suma de números fins a N
Demana un número N i calcula la suma de tots els números de l’1 fins a N.
Utilitza un while.
 */

let i = 0;
let n//variable local
do {
n = prompt("Pon un numero");
}while(isNaN(n) || n < 0)
let resultado = 0;
while (i <= n) 
{
    resultado += i;
    i++;
}
console.log(`El resultado de la suma es ${resultado}`);