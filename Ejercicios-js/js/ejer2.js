/**
 * 2. Dia de la setmana
Demana un número del 1 al 7 i mostra quin dia de la setmana correspon (1 = Dilluns, …, 7 = Diumenge).
Utilitza un switch.
 */

//controlar que em doni un número y no pari fins que me'l donin
let semana//variable local
do {
semana = prompt("Pon un numero, tiene que ser entre 1 y 7");
}while(isNaN(semana))

//vigilar quin numero es
switch(semana)
{
    case "1":
        console.log('És dilluns');
        break;
    case "2":
        console.log('És dimarts');
        break;
    case "3":
        console.log('És dimecres');
        break;
    case "4":
        console.log('És dijous');
        break;
    case "5":
        console.log('És divendres');
        break;
    case "6":
        console.log('És disabte');
        break;
    case "7":
        console.log('És diumenge');
        break;
    default:
        console.log("Numero incorrecta, tiene que ser entre 1 y 7");
        break;
}
