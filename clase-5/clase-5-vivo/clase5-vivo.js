const gatito = {
  nombre: "michifus",
  castrado: true,
  edad:2,
  maullar:function(){
    console.log("miau")
  },
/*   aumentarEdad:function(){
    gatito.edad++
  } */
  aumentarEdad:function(){
    this.edad++
  },
  mostrarDatos: function(){
    console.log(`Mi nombre es ${this.nombre},${this.castrado ? " ": " no"} estoy castrado y tengo ${this.edad} añitos.`)
  }
}

// console.table(gatito)

// console.log(gatito.pelaje)
/* console.log(gatito.nombre)
console.log(gatito.edad)
console.log(gatito.pelaje)
console.log(gatito.maullar) */

/* gatito.maullar()
gatito.aumentarEdad()
console.log(gatito.edad) */

/* console.log(gatito["edad"])
console.log(gatito["nombre"]) */
// const gatos = [{}]


gatito.edad = 8



// console.log(gatito.edad)

// gatito.pelaje = "atigrado"

// gatito.edadMeses = 52
// gatito["edad meses"] = 52

// console.log(gatito.pelaje)
// console.log(gatito.edadMeses)
// console.log(gatito["edad meses"])

// gatito.mostrarDatos()

const gatos = [
  {nombre: "michifus",castrado: true,edad:2,maullar:function(){console.log("miau")},aumentarEdad:function(){this.edad++},mostrarDatos: function(){console.log(`Mi nombre es ${this.nombre},${this.castrado ? " ": " no"} estoy castrado y tengo ${this.edad} añitos.`)}}, 
  {nombre: "calcifer",castrado: false,edad:4,maullar:function(){console.log("miau")},aumentarEdad:function(){this.edad++},mostrarDatos: function(){console.log(`Mi nombre es ${this.nombre},${this.castrado ? " ": " no"} estoy castrado y tengo ${this.edad} añitos.`)}},
  {nombre: "malaquias",castrado: true,edad:1,maullar:function(){console.log("miau")},aumentarEdad:function(){this.edad++},mostrarDatos: function(){console.log(`Mi nombre es ${this.nombre},${this.castrado ? " ": " no"} estoy castrado y tengo ${this.edad} añitos.`)}}
]

// for(let i = 0; i<gatos.length; i++){
//   gatos[i].mostrarDatos()
// }
/* 
const verNombre = function(obj){
  return obj.nombre
}

console.log(verNombre(gatito)) */

/* function Gato(nombre, castrado, edad){
  this.nombre = nombre
  this.castrado = castrado
  this.edad = edad
  this.aumentarEdad = function(){
    this.edad++
  }
  this.mostrarDatos = function(){
    console.log(`Mi nombre es ${this.nombre},${this.castrado ? " ": " no"} estoy castrado y tengo ${this.edad} añitos.`)
  }
  this.revisarEstado = function(){
    return this.nombre === undefined || this.castrado === undefined || this.edad === undefined
  }
} */

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

const zacharias = new Gato("zacharias", false, 9)

const gatosNuevos = []

function agregarGatos(nombre, castrado, edad){
  gatosNuevos.push(new Gato(nombre, castrado, edad))
}

/* console.log(zacharias)
console.log(gatito) */

console.log(gatosNuevos)
agregarGatos("zacharias", false, 9)
agregarGatos("minina", true, 6)
agregarGatos("kushka", true, 12)
console.log(gatosNuevos)

for(const michi of gatosNuevos){
  console.log(michi.revisarEstado())
}

for(let i = 0; i<gatosNuevos.length; i++){
  gatosNuevos[i].mostrarDatos()
}

/* const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c(){
    console.log(this.i, this);
  },
};

obj.b();
obj.c();  */


// localStorage.setItem("guardar", "me guardaron")

// console.log(localStorage.getItem("guardar"))

// console.log(localStorage)
// console.log(sessionStorage)