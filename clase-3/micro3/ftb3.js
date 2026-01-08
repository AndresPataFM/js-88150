// Actividad 01:

/* 
const IVA = 1.21;
let importe = prompt("Ingresa el importe sobre el cual quieres calcular el IVA:");
const precioConIVA = imp, iva => imp * iva;
precioConIVA(importe, IVA) 
*/

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?

const IVA = 1.21;

// let importe = Number(prompt("Ingresa el importe sobre el cual quieres calcular el IVA:"));

// const precioConIVA = (imp, iva) => imp * iva;

// console.log(precioConIVA(importe, IVA) );

// Actividad 02:

/* 
const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");
const calcularPoliza = m2 => { M2 * valorM2 * comision };
const valorPoliza = calcularPoliza(120);
console.log("El costo de la póliza es: $", valorPoliza); 
*/


// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?

const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const m2Preguntados = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");

const calcularPoliza = metros2 =>  metros2 * valorM2 * comision

const valorPoliza = calcularPoliza(m2Preguntados);

console.log("El costo de la póliza es: $", valorPoliza); 