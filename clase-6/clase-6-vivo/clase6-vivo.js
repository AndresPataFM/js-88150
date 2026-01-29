const dx = (caras)=>{
  return function(){
    return Math.floor(Math.random()*caras)+1
  }
}
/* 
const d6 = dx(6)

const d20 = dx(20)

console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())

console.log(d20) */


// 4! = 4*3*2*1 = 24

function factorial(nro){
  nro = Math.floor(nro)
  if(nro ===1) return 1
  return nro * factorial(nro-1)
}

// console.log(factorial(4))
// console.log(factorial(7))

// ===============================

const productos = [
  {nombre:"🍟", valor:2},
  {nombre:"🥟", valor:5},
  {nombre:"🍕", valor:10},
  {nombre:"🍔", valor:20},
  {nombre:"🥩", valor:30},
  {nombre:"🥪", valor:3}
]

function aplicarFormulaProd(formula){
  for(prod of productos){
    formula(prod)
  }
}

/* aplicarFormulaProd(console.log)

aplicarFormulaProd((producto)=>{
  console.log(`* ${producto.nombre} - $${producto.valor}`)
}) */

// aplicarFormulaProd(console.log)

// aplicarFormulaProd((prod)=>{ prod.valor=prod.valor*2})

// aplicarFormulaProd(console.log)

// productos.forEach((elemento, indice) =>{console.log(indice, elemento)})

const mostrarProd = ()=>{
  let lista = "Los productos son:"
  productos.forEach((prod, indice)=>{
    lista+= `\n ${indice} - ${prod.nombre} a $${prod.valor}`
  })
  console.log(lista)
}

// mostrarProd()

/* console.log(productos.find((elemento, indice) => elemento.valor<indice))
console.log(productos.find((elemento, indice) => elemento.valor>indice))
console.log(productos.find((elemento) => elemento.nombre==="🍔")) */

// console.log(productos.filter(elemento=>elemento.valor<=15))

// console.log(productos.filter(prod=>prod.valor%5===0))
// console.log(productos.some(prod=>prod.valor%5===0))

/* const prodInflacion = productos.map(function (elemento){
  const nuevoProd = {
    nombre:elemento.nombre,
    valor: elemento.valor*1.5
  }
  return nuevoProd
}) */

// console.log(prodInflacion)

const canasta = {
  productosCanasta: [],
  total: 0,
  mostrarCanasta: function(){
    console.log(this.productosCanasta.reduce((total, elemento)=>{
      return total + `\n - ${elemento.nombre} - $${elemento.valor} x ${elemento.cantidad} = ${elemento.valor*elemento.cantidad}`
    }, "Los productos en canasta son:"))
  },
  agregarProdCanasta: function(prod, cantidad){
    // this.productosCanasta.add({nombre: prod.nombre, valor:prod.valor, cantidad:cantidad})
    this.productosCanasta.push({...prod, cantidad:cantidad})
    this.productosCanasta.sort((primerProd, segundoProd)=>{
      return segundoProd.cantidad * segundoProd.valor -primerProd.valor*primerProd.cantidad  
    })
    this.mostrarCanasta()
  },
  calcularTotal: function(){
    // this.productosCanasta.reduce(funcion, valorinicial)
    this.total = this.productosCanasta.reduce((total, elemento)=>{
      return total + elemento.valor*elemento.cantidad
    }, 0)
  },
}

console.log(canasta)
canasta.agregarProdCanasta(productos[1], 4)
canasta.agregarProdCanasta(productos[2], 2)
canasta.agregarProdCanasta(productos[0], 3)
canasta.calcularTotal()
canasta.mostrarCanasta()

console.log(canasta)