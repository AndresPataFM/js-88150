// swal
// https://sweetalert2.github.io/

const btnSwal = document.querySelector("#btnSwal")

btnSwal.addEventListener("click",function(){
/*   Swal.fire({
    title: 'Epa!',
    text: 'No me toques',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Entiendo',
    cancelButtonText: "Voy a seguir haciendolo"
  }).then((result) => {
  if (result.isConfirmed) {
    swal.fire({
      title: "Gracias",
      text: "Es solo que no me gusta que me toquen.",
      icon: "success"
    });
  } else  {
    swal.fire({
      title: "Atrevido",
      text: "Voy  llamar a la policia",
      icon: "error"
    });
  }}) */
  Swal.fire({
    icon: "success",
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    title: 'Exito',
    text: 'Producto agregado al carrito',
  });
})




// toastify
// https://apvarun.github.io/toastify-js/



let lista = []
const listaDOM = document.getElementById("lista")
const verLista = document.getElementById("verLista")

function mostrarLista(){
  listaDOM.innerHTML = ""
  lista.forEach(prod=>{
    const li = document.createElement("li")
    li.innerText = prod.nombre
    const btn = document.createElement("button")
    btn.innerText = "Agregar al carrito"
    btn.addEventListener("click",()=>{
      Toastify({
        text: `Agregado ${prod.nombre} al carrito`,
        duration: 5000,
        newWindow: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, blueviolet, blue)",
        }
      }).showToast();
    })

    li.appendChild(btn)
    listaDOM.appendChild(li)
  })
}

async function cargarLista() {
  const datosJSON = await fetch("lista.json")
  const datos = await datosJSON.json()
  lista = datos
  mostrarLista()
}

verLista.onclick = cargarLista

cargarLista()



// Luxon
// https://moment.github.io/luxon/#/?id=luxon

const btnToast = document.getElementById("botonToastify")

const DateTime = luxon.DateTime;

console.log(DateTime.local(2017, 5, 15, 8, 30))
console.log(DateTime.now().toUTC().toLocaleString(DateTime.DATETIME_MED))

// btnToast.addEventListener("click", ()=>{
//   Toastify({
//         text: DateTime.now().toFormat('MMMM dd, yyyy, hh  :mm:ss'),
//         duration: 5000,
//         newWindow: true,
//         gravity: "top",
//         position: "right",
//         stopOnFocus: true,
//         style: {
//           background: "linear-gradient(to right, blueviolet, blue)",
//         }
//       }).showToast();
// })

const productosBase = [
  {
    name:"Antipulgas Gato", 
    id:"001",
    type:"Medicinal", 
    price:450, 
    stock:32, 
    description:"Antipulgas felino Frontline Plus"
  },
  {name:"Pelota", id:"012", type:"Juguete", price:"210", stock:9, description:"Pelota plástica hipoalergénica chillona de mascotas (díametro de 12 cm)"},
  {name:"Antiparasitario", id:"003", type:"Medicinal", price:370, stock:15, description:"Antiparasitario interno Oral Paraqueños"},
  {name:"Alimento Gato Joven", id:"004", type:"Medicinal", price:4530, stock:18, description:"Alimento para gatos Kitten de Royal Canin"}
]

// const productosJSON = JSON.parse(productosBase)

// localStorage.setItem("productos", productosJSON)
localStorage.setItem("productos", JSON.stringify(productosBase))

// traer

const productosStorage = localStorage.getItem("productos")

const prodUtilizables = JSON.parse(productosStorage)

console.log(prodUtilizables)

// guardar es stringify, parse es para traer
// stringify JS=>JSON
// parse JSON=>JS