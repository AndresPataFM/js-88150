// Comentario en línea

/* 
  comentario en bloque
  a

  a
*/

/* declarar variables
  palabra reservada: let
  nombre de la variable: nombre
  valor: "Andrés"

*/
let nombre = "Andrés";

console.log("declaro variable: ", nombre);

// reasignar

console.log("Reasigno valor");
nombre = "Juan";

console.log(nombre);

var noMeUses = "hola"; // No se usa más var

const dni = 123313;

console.log(dni, typeof dni)

/* 
// No se puede reasignar el valor a una constante
dni = 007

console.log(dni) */

let comillaD = "hola"
let comillaS = 'Diana'
let backtick = `Miércoles`   

let oracion = 'Diana dijo "hola" este Miércoles'

let prueba = "Diana dijo " + "hola" + " este Miércoles"

let prueba2 = comillaS + ' dijo "' + comillaD + '" este ' + backtick 

let stringTemplate = `${comillaS} dijo "${comillaD}" este ${backtick}`
console.log(oracion)
console.log(prueba)

console.log(prueba2)
console.log(stringTemplate)

let noAsigne

console.log(noAsigne)

const raro = undefined // No tiene sentido

console.log(nombre, typeof nombre)

nombre = false

console.log(nombre, typeof nombre)

const numerito = 123 + 4 * 2

console.log(numerito)
/* 
const pedirNombre = prompt("¿Cuál es su nombre?")

console.log(pedirNombre, typeof pedirNombre)

const siOno = confirm("¿Querés?")

console.log(siOno, typeof siOno) */

// let nombre = "Pedro"

var noMeUses = "Me esta dejando redeclarar esta atrocidad"

console.log(noMeUses)