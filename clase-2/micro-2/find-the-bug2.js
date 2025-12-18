// Actividad 01:
/* 
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index) {
  console.log(texto);
} 
*/

/* let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index++) {
  console.log(texto);
}  */


// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?


// Actividad 02:
/* 
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
  if (index > 3) {

  }
  alert("lado");
} 
*/
// PRIVILILEGIOS
let nivel = parseInt(prompt('INGRESE SU NIVEL'));
// nivel 1: acceso al bar
// nivel 2: acceso al sector vip
// nivel 3:cuarto privado
for (let index = 0; index <= nivel; index++) {
  if(index===1){
    alert("acceso al bar")
  } else if(index===2){
    alert("acceso al sector vip")
  } else if(index===3){
    alert("acceso al cuarto privado")
  } else{
    alert("no existe este nivel")
    break
  }
} 


// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?