"use strict"; // <-- esta en el comienzo del todo (No obligatoria)

//alert("Estoy dentro del java"); 
//alert("hola Khawar"); Muestra al usuario un mensaje informativo

//creació de variables
var message="DAW2"; //creo i inicilitzo GLOBAL
let missatge; //creo la variable GLOBAL
//instruccions
missatge="clase de programació client";
//alert(message);
//alert(missatge);

//creacion de constantes
const COLOR = "groc"; //global
//alert(COLOR);

function prova() {
    let mensaje="Pep"; //creada dentro de una funcion: LOCAL
}

//alert (mensaje); //Esta variable no esta definida fuera de la funcion

//tipos de datos

//tipo NUMBER

let num1 = 123;
num1 = 12.56;
//alert(num1);

//tipo BigInt: enteros muy grandes

let num2 = 12312312312312322132143n;
//alert(num2);

//tipo STRING

let salutacion = 'Hello!';
salutacion = "Hello world";
//alert (`Este numero es ${num1}`);
//alert("Este numero es " + num1);

//tipo Boolean
let flag = true;

//tipo null
let nada = null;

//tipo undefined
let age;
alert(age); //He declarado pero no tiene asignado valor

//tipo object
//se vera mas adelante

alert(typeof flag)

//comunicarse a traves de la consola del dev tool PROGRAMADOR
//console.log(salutacio);

//operadors bàsics

//+, -, *, /
console.log(num1 + num1)

//residiu de una division: %
console.log(5%2);

//potencia: **
console.log(num1**2);

console.log(Math.pow(num1,2))

//concatenar
console.log("hola " + "alumnes");
num1++; //abreviació num1 = num1 + num1
console.log("2" + 1); //interpreta cadena: 21
console.log(Number("2")+1);

//alternativas: alternativa simple
if (num1>10) console.log("Mayor que 10");

//es mejor poner las { }
if (num1 > 10) {
    console.log("Mayor que 10");
}

//alternativas: alternativa doble
if (num1 > 10) {
    console.log("Mayor que 10");
} else {
    console.log("Menor que 10");
}

if (34 > 2) {
    console.log("Mayor que 2");
} else if (34 > 10) {
    console.log("Mayor que 10 y menor que 20")
}

//alternativas: alternativa multiple
let a = 2 + 4;

switch (a) {
    case 3:
        alert('Muy  pqueño');
        break;
    case 4:
        alert('Muy mediano');
        break;
    case 5:
        alert('Muy grande');
        break;
    default:
        alert("Desconozco estos valores")
        break;
}

//operadors ternaris
var vocal = (10>3)? 'a':'b';
alert(vocal)

//bucles
var i=0;
while(i>=0) {
    console.log(i);
    i--; // i = i-1
}

i=-2;
do {
    console.log(i);
    i--;
}while(i>=0)

let = j;
for (j = 0; j < 3; j++) { // muestra 0, luego 1, luego 2
    alert(j);
}

for (let k = 0; k < 3; k++) { // muestra 0, luego 1, luego 2
    alert(`això és la k: ${k}`);
    if(k==1) {
        continue;
    } else {
        alert(`àixò és la k: ${k}`);
    }
    alert("Hola");
}

if(k!=1){
    alert(`això es la k: ${k}`);
    alert("Hola");
}

//comentaris


//comentaris o documentació interna 
//programador
/*
comentaris de programador: codi que no vols que s'apliqui,
explicar-te un codi que t'ha costat o per aclarir alguna cosa
*/