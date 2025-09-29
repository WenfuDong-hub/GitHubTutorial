/**
 * 6. Comptador de números parells
Demana un número i mostra tots els números parells des de 1 fins al número donat.
Utilitza un for i un if dins el bucle.
 */

let n//variable local
let np = 0;

do {
n = prompt("Pon un numero");
}while(isNaN(n) || n < 0)

for (let i = 1; i <= n; i++) {
    if(i%2== 0) {
        console.log(i)
    }
    
}