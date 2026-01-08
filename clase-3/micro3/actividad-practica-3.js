/* Actividad práctica
Crea un algoritmo utilizando funciones
Consigna.

Tomando como base la sintaxis para la creación de funciones crea al menos 3 de ellas donde se cumpla con un algoritmo de entrada de datos, procesamiento de la información y salida de los datos procesados.

Para introducir los datos puedes apoyarte de la función prompt() mientras que para la salida utilizarás de momento alert() o console.log()

Aspectos a incluir

Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript realizando las llamadas a las funciones en el orden correcto para procesamiento de la información y mostrar los resultados.

Sugerencias

Puedes usar funciones tradicionales así como arrow función o funciones anónimas según prefieras

Ejemplo

Crear una función que solicite los datos de entrada

Crear una función que procese la información obtenida.

Crear una función para mostrar el resultado final */

let nro = 0

function pedirNro(){
  // Le pide un nro al usuario y lo valida
  // pido nro
  nro = parseInt(prompt("Ingrese un número entero para ver si es par o impar"))
  while(isNaN(nro)){
    // valido
    nro = parseInt(prompt("Ingrese un número entero para ver si es par o impar. Intente nuevamente"))
  }
}

const evaluarNro = ()=>{
  // utiliza resto ap[ra evaluar si es par o impar. Un resto de 0 es un número par.]
  if(nro%2===0){
    return "par"
  } else {
    return "impar"
  }
}

const respuesta = ()=> `El número ${nro} es ${evaluarNro()}`
// Pasa la información a texto para el usuario

const app =()=>{
  //  funcion que contiene toda la lógica a ejecutar
  pedirNro()
  console.log(respuesta())
}

// ---


app()