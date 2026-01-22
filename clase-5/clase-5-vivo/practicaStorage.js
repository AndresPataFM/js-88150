let modo = ""

/* const traerModo = ()=>sessionStorage.getItem("modo")

function seleccionarModo(){
  const activarModoNoche = confirm("Deseas activar modo noche")
  if(activarModoNoche){
    modo = "noche"
  } else {
    modo = "dia"
  }
  sessionStorage.setItem("modo", modo)
}

function evaluarModo(){
  const modoGuardado = traerModo()
  if(modoGuardado === null) seleccionarModo()
  modo = traerModo()
} */
/* const traerModo = ()=>localStorage.getItem("modo")

function seleccionarModo(){
  const activarModoNoche = confirm("Deseas activar modo noche")
  if(activarModoNoche){
    modo = "noche"
  } else {
    modo = "dia"
  }
  localStorage.setItem("modo", modo)
}

function evaluarModo(){
  const modoGuardado = traerModo()
  if(modoGuardado === null) seleccionarModo()
  modo = traerModo()
} */
/* console.log(modo)
evaluarModo()
console.log(modo) */

class Gato{
  constructor(nombre, castrado, edad){
    this.nombre = nombre
    this.castrado = castrado
    this.edad = edad
  }
  revisarEstado(){
    return this.nombre === undefined || this.castrado === undefined || this.edad === undefined
  }
  maullar(){
    console.log("miau")
  }
  mostrarDatos(){
    console.log(`Mi nombre es ${this.nombre},${this.castrado ? " ": " no"} estoy castrado y tengo ${this.edad} añitos.`)
  }
}


const gatosNuevos = []

function guardarStorage(clave, valor){
  //Convertir a string JSON y guardo en el storage en un solo paso
  localStorage.setItem(clave, JSON.stringify(valor))
}

function traerGatoStorage(clave){
  // traer de storage
  const traerJSON = localStorage.getItem(clave)
  //parsear
  const gatoParseado = JSON.parse(traerJSON)
  //pasarlo por el constructor
  const gato = new Gato(gatoParseado.nombre, gatoParseado.castrado, gatoParseado.edad)
  return gato
}

function agregarGatos(nombre, castrado, edad){
  gatosNuevos.push(new Gato(nombre, castrado, edad))
  localStorage.setItem("gatosNuevos", JSON.stringify(gatosNuevos))
}


if(localStorage.getItem("gatosNuevos")){
  const gatosTempJSON = localStorage.getItem("gatosNuevos")
  const gatosTempJS = JSON.parse(gatosTempJSON)
  for(const gatito of gatosTempJS){
    agregarGatos(gatito.nombre, gatito.castrado, gatito.edad)
  }
}


// agregarGatos(("zacharias", false, 9))

// const zacharias = new Gato("zacharias", false, 9)

// console.log(zacharias)
// console.log(String(zacharias))

// zacharias.maullar()

// const zachariasJSON = JSON.stringify(zacharias)

// localStorage.setItem("zacharias", zachariasJSON)
// console.log(zachariasJSON)

// const zachariasDesdeJSON = JSON.parse(zachariasJSON)
// console.log(zachariasDesdeJSON)

// zachariasDesdeJSON.maullar()

/* function guardarStorage(clave, valor){
  //Convertir a string JSON
  const valorJSON= JSON.stringify(valor)
  //gaurdar en el storage
  localStorage.setItem(clave, valorJSON)
} */

  // agregarGatos("zacharias", false, 9)