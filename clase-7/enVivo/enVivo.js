/* console.log(document)
console.dir(document)
console.dir(document.body)
console.log(document.body.children[0].children[0].children[0].children[0]) */

// Ubicar/encontrar nodos en el DOM
// Modificar nodos
// Crear nodos
// Agregar Eventos


// get

// getElelementById(string) // Find

const elementoEnocntradoId = document.getElementById("menu")
// console.log(elementoEnocntradoId)
// console.dir(elementoEnocntradoId)


// getElementsByClassName(string) // filter

const elementosMedianteClase = document.getElementsByClassName("rojo")
// console.log(elementosMedianteClase)
// console.log(elementosMedianteClase.encontrame)
// console.dir(elementosMedianteClase)

// getElementByTagName(string) // filter
const elementosMedianteEtiqueta = document.getElementsByTagName("div")
// console.log(elementosMedianteEtiqueta)
// console.dir(elementosMedianteEtiqueta)


// query // consulta

// querySelector(string) // find
// etiqueta#id.clase
// etiqueta
// #id
// .clase
// const consultaUnica = document.querySelector("ul#menu.rojo")
const consultaUnica = document.querySelector("div")
// console.log(consultaUnica)


// querySelectorAll(string) // filter
const consultaMultiple = document.querySelectorAll(".rojo")
console.log(consultaMultiple)


// Modificamos

const divEncontrame = document.getElementById("encontrame")
/* console.dir(divEncontrame)
console.dir(divEncontrame.innerText)
console.dir(divEncontrame.className)
console.dir(divEncontrame.classList)
console.dir(divEncontrame.innerHTML) */

// divEncontrame.className = "rojo cursiva carta"
// divEncontrame.classList.toggle("verde")

// divEncontrame.innerText= "te encontré"
// divEncontrame.innerHTML= "<button>apretame</button>"
// console.log(divEncontrame.children)
/* const nombre = prompt("ingresa tu nombre")
divEncontrame.innerHTML= `<h3>${nombre}</h3>
<div>lorem</div>`
console.log(divEncontrame.id)
console.log(divEncontrame.attributes) */
/* 
// Crear

const btnNuevo = document.createElement("button")
btnNuevo.innerText =  "Hola soy el botón nuevo"
// btnNuevo.classList.toggle("borde")
btnNuevo.style="margin:10px;"
console.dir(btnNuevo)

// agregar al dom

// document.body.appendChild(btnNuevo)
divEncontrame.appendChild(btnNuevo) */



// divEncontrame.innerHTML = '<button id="testing" style="margin: 10px;">Hola soy el botón nuevo</button>'

// function esconderBtn(){
//   const testing = document.getElementById("testing")
//   testing.classList.toggle("esconder")
//   console.log(testing)
// }

let contador = 0
const divContador = document.createElement("div")
const btnContador = document.createElement("button")
divContador.innerText=`Cantidad de clicks: ${contador}`
btnContador.innerText="Click"

divEncontrame.appendChild(divContador)
divEncontrame.appendChild(btnContador)

function contar(){
  divContador.innerText = `Cantidad de clicks: ${++contador}`
  /* contador++
  divContador.innerText = `Cantidad de clicks: ${contador}` */
}

// btnContador.onclick = contar

btnContador.addEventListener("click", ()=>{
  contar()
})
// btnContador.addEventListener("click", contar)