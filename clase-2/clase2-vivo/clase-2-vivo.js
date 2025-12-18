/* "7"
'7'
typeof "7"
'string'
parseInt("7")
7
typeof parseInt("7")
'number'
"7" -5
2
7 - 5
2 */
/* 
let saldo = parseFloat(prompt("Ingrese su saldo en número"))

if(saldo < 0){
  alert("Tenes saldo negativo")
  alert("ingresa plata")
} */

/* let edad = parseInt(prompt("Cuantos años tiene"))
// if(edad >= 18){
if(edad > 17){
  alert("pase")
} else {
  alert("usted es menor de edad, detengase")
} */

/* const pedido = prompt("¿Qué querés tomar?").toLowerCase()



if(pedido==="coca"){
  alert("Aca tenés coca")
} else if(pedido==="jugo"){
  alert("toma jugo")
} else if(pedido==="jugo"){
  alert("Toma un cepita") // Este nunca se evalua porque el anterior va a dar verdadero si este lo fuese
}else {
  alert("arreglate con agua")
} */

/* let nombre = prompt("diga su nombre").toLowerCase()

switch (nombre){
  case "andres":
    alert("1A")
    break
  case "diana":
    alert("1B")
    break
  case "jaime":
    alert("Hola Jaime buen día!")
  case "juan":
    alert("2A")
    break
  case "laura":
    alert("2B")
    break
  case "matilda":
    alert("3")
    break
  default:
    alert("Usted no vive aqui")
}  */


// for(let i=0; i<5; i=i+1){
//   console.log("Este es i:", i)
// }

// Ciclo infinito es malo, baja puntos en la entrega

// i=i+1
// i+=1
// i++

// i+=7
// i=i+7

/* while(true){
  alert("hola")
} */

/* while(true){
  alert("hola")
  break
} */

// let saludo = true
// while(saludo){
//   alert("¡HOLA!😀")
//   saludo = confirm("¿Otro saludo?")
// }

/* let edad = parseInt(prompt("Cuantos años tiene"))

while(isNaN(edad) || edad<=0){
  edad = parseInt(prompt("Cuantos años tenes. Dame un número entero positivo."))
}

if(edad > 17){
  alert("pase")
} else {
  alert("usted es menor de edad, detengase")
} */
/* 
let password = ""
let intentos = 0
let ingresar = false
do{
  password = prompt("ingrese su contraseña")
  intentos++
  if(password ==="123"){
    ingresar = true
  }else{
    alert(`Contraseña incorrecta, te quedan ${3-intentos} intentos`)
  }
}while(!ingresar && intentos<3)

if(ingresar){
  console.log("ingresaste a tu cuenta")
} */

for(let i=0; i<5; i=i+1){
  console.log("Este es i inicial:", i)
  if(i===3){
    continue
  }
  console.log("Este es i final:", i)
} 

for(let i=0; i<5; i=i+1){
  console.log("Este es i inicial:", i)
  if(i===3){
    break
  }
  console.log("Este es i final:", i)
} 

