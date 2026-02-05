// variables

const productos = [ 
  {nombre:"🥟" , precio:10, id: 101},
  {nombre:"🍕" , precio:40, id: 102},
  {nombre:"🥪" , precio:25, id: 103},
  {nombre:"🍟" , precio:8, id: 104},
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// variables DOM

const listaProd = document.getElementById("listaProd")
const listaCarrito = document.getElementById("listaCarrito")
const botonCompra = document.getElementById("btnCompra")
const formularioCompra = document.getElementById("formularioCompra")

// console.dir(listaProd)

// listaProd.innerHTML = `<li>🥟 - $10 </li>`


/* function mostrarProd(){
  listaProd.innerHTML = ""
  productos.forEach(prod=>{
    listaProd.innerHTML += `<li id=prod${prod.id}>${prod.nombre} - $${prod.precio}</li>`
  })
} */

// funciones

const calcularTotalCarrito = ()=>{
  //calcula el total del carito
  let total = carrito.reduce((suma,elemento)=>{
    return suma + elemento.precio
  },0)
  return total
}

const mostrarTotal = ()=>{
  //Muestra el total del carrito
  const divTotal = document.getElementById("total")
  divTotal.innerText = `Total: $${calcularTotalCarrito()}`
}

const guardarCarrito = ()=>{
  const carritoJSON = JSON.stringify(carrito)
  localStorage.setItem("carrito", carritoJSON)
}


const mostrarCarrito = ()=>{
  listaCarrito.innerHTML = ""
  carrito.forEach(prod=>{
    const li = document.createElement("li")
    li.innerHTML = `${prod.nombre} - $${prod.precio}`
    listaCarrito.appendChild(li)
  })
}

const vaciarCarrito = ()=>{
  carrito = []
  guardarCarrito()
  mostrarCarrito()
  mostrarTotal()
}

const agregarCarrito = (prod)=>{
  carrito.push(prod)
  mostrarCarrito()
  mostrarTotal()
  guardarCarrito()
}



function mostrarProd(){
  listaProd.innerHTML = ""
  productos.forEach(prod=>{
    // Crear
    const li = document.createElement("li")
    const div = document.createElement("div")
    const btn = document.createElement("button")

    // Modificar
    li.id = prod.id
    div.innerText = `${prod.nombre} - $${prod.precio}`
    btn.innerText = "comprar"
    btn.addEventListener("click",()=>{
      agregarCarrito(prod)
    })

    // agregar al DOM
    li.appendChild(div)
    li.appendChild(btn)
    listaProd.appendChild(li)
  })
}

const comprar =(nombre)=>{
  const agradecimiento = document.getElementById("agradecimiento")
  agradecimiento.innerText = `gracias por su compra ${nombre}`
  vaciarCarrito()
}

// botonCompra.onclick = comprar

formularioCompra.addEventListener("submit",(e)=>{
  e.preventDefault()
  /* const nombre = document.getElementById("nombre").value
  const apellido = document.getElementById("apellido").value */
  // const nombre = e.target[0].value
  // const apellido = e.target[1].value
  const informacion = new FormData(e.target)
  const submit = Object.fromEntries(informacion)
  console.log(submit)
  comprar(submit.nombre+" "+submit.apellido)
})

function inicializar(){
  mostrarProd()
  mostrarCarrito()
  mostrarTotal()
}

// Ejecució de códgo

inicializar()


// alert() / console.log() => muestren texto en un div
// prompt => usan formulario
// confirm o prompt sencillo => evento click a un botón