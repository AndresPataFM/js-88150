// console.log(nombre)

function saludar(){
  let nombre = prompt("Ingrese su nombre.")
  while(typeof nombre !== "string" || nombre === "" ){
    nombre = prompt("Por favor ingrese su nombre. No tiene que estar vacio.")
  }
  const frase = `Bienvenido a mi página ${nombre}!`
  // alert(frase)
  console.log(frase)
}

// saludar()
// saludar()
// saludar()
// saludar()

function suma(){
  // const primerNro = parseInt(prompt("ingrese un número entero"))
  // const segundoNro = parseInt(prompt("ingrese otro número entero"))
  const primerNro = 5
  const segundoNro = 7

  const resultado = primerNro + segundoNro

  // console.log(resultado)
  return resultado
  console.log("hola") // no se ve porque esta luego del return

}

// console.log("resultado de suma", suma())

// console.log(suma())

function concatenar(arg, arg2, arg3){
  console.log("arg", arg)
  console.log("arg2", arg2)
  console.log("arg3", arg3)
  return arg + arg2 + arg3
}

const andresAmigos = concatenar("Andrés", "Pedro", "Juan")

// console.log(andresAmigos)
// console.log(concatenar("Andrés", "Pedro"))
// console.log(concatenar("Andrés", "Juan"))

function validarNros(num1, num2){
    const tipoNum1 = typeof num1;
    const tipoNum2 = typeof num2;
    const nrosInvalidos = tipoNum1!=='number' || tipoNum2!=='number'
    return nrosInvalidos
}

function calculadora(num1, num2, operacion){
  if(validarNros(num1, num2)){
    console.warn("Error: se ingresaron datos que no son números")
    return NaN;
  };
  switch(operacion){
    case "+": // if(operacion === "+"){return num1+num2}
      return num1+num2;
      //no es necesario el break ya que el return lo frena
    case "-":
      return num1-num2;
    case "/":
      return num1/num2;
    case "*":
      return num1*num2
    case "^":
      return Math.pow(num1, num2)
    case "%":
      return num1%num2;
    default:
      console.warn("Error: operador inválido")
      return;
    };
} ; 

// console.log(calculadora(3,7,"*"))
// console.log(calculadora(21,7,"/"))
console.log(calculadora(21,7,"-"))

// calculadora = "hola"

// console.log(calculadora)
// console.log(calculadora(21,7,"-"))

/* 
function hola(nombre){
  return `Hola ${nombre}`
}

*/


/* const hola = function(nombre){
  return `Hola ${nombre}`
} */

// function pasa a ser una flecha
/* const hola = (nombre)=>{
  return `Hola ${nombre}`
} */

// parentesis implicitos (solo 1 argumento)
/* const hola = nombre =>{
  return `Hola ${nombre}`
} */



// return implicito (unica línea es el return)

// const hola = nombre => `Hola ${nombre}`

const hola = (nombre, apellido) => `Hola ${nombre} ${apellido}`

// console.log(hola("Andrés"))
console.log(hola("Andrés", "Pata"))
// hola = "a"
// console.log(hola("Andrés"))