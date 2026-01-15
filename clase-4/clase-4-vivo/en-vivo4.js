const usuario = {
  nombre: "Andrés",
  online: true,
  mail: "asd@asd.com",
  saludar: function(){
    console.log("hola")
  }
}
const usuario2 = {
  nombre: "Diana",
  online: false,
  mail: "asd@asd.com",
  saludar: function(){
    console.log("hola")
  }
}

/* console.log(usuario)

console.log(usuario.nombre)
console.log(usuario.online)

usuario.saludar()
console.log(console) */

/* const lista = [1,2,3,4]

console.log(lista) */

const nombres = ["Andrés", "Diana", "Patricio", "Facundo"]

/* console.log(nombres)

console.log(nombres[0])
console.log(nombres[2])
console.log(nombres[4])
// console.log(nombres[-1])

nombres[0] = "Matias"

console.log(nombres)

nombres[7] = "Leandro" // no es recomendado 

console.log(nombres)
console.log(nombres[5])

// delete nombres[2] // opción extrema, no la usen
console.log(nombres) */

/* console.log(nombres)
console.log(nombres.length)


nombres[4] = "Johana"
// nombres[7] = "Edwin"

for(let i = 0; i<nombres.length; i++){
  console.log(`El elemeno ${nombres[i]} tiene el indice ${i}`)
}

const usuarios = [usuario, usuario2]

// usuarios[2] = usuario2

for(let i = 0; i<usuarios.length; i++){
  console.log(usuarios[i])
} */

console.table(nombres)

// nombres.push("Exequiel")
// nombres.unshift("Exequiel")

// console.log(nombres.shift())
// console.log(nombres.pop())
// console.log(nombres.join())
// console.log(nombres.join(" - "))
// console.log(`Los pacientes son: \n - ${nombres.join("\n - ")}`)
// console.log(nombres.indexOf("Diana"))
// console.log(nombres.indexOf("diana"))
// console.log(nombres.indexOf("Johana"))
// nombres.push("Andrés")
// console.log(nombres.indexOf("Andrés"))
// console.log(nombres.lastIndexOf("Andrés"))
// console.log(nombres.sort())
// console.log(nombres.reverse())
// console.log(nombres.sort().reverse())


// console.table(nombres)

/* function llamarPaciente(lista){
  if(lista.length === 0 ){
    alert("No hay más pacientes")
  } else {
    const paciente = lista.shift()
    alert(`${paciente} esta siendo llamado.`)
    alert(`Quedan ${lista.length} paciente en espera.`)
  }
} */

/* function detectarSiEsta(lista, elemento){
  const indice = lista.indexOf(elemento)
  if(indice === -1){
    return `El elemento ${elemento} no esta en la lista`
  } else {
    return `El elemento ${elemento} esta en la lista con el indice ${indice}`
  }
}
function detectarSiEsta(lista, elemento){
  const indice = lista.indexOf(elemento)
  if(indice === -1){
    return false
  } else {
    return `El elemento ${elemento} esta en la lista con el indice ${indice}`
  }
}

function detectarDuplicados(lista, elemento){
  const primerIndice = lista.indexOf(elemento)
  const segundoIndice = lista.lastIndexOf(elemento)
  if(primerIndice === segundoIndice){
    return `El elemento ${elemento} no esta duplicado`
  } else {
    return `El elemento ${elemento} esta duplicado`
  }
} */

/* console.log(detectarSiEsta(nombres,"Patricio"))
console.log(detectarSiEsta(nombres,"Johana"))
console.log(detectarDuplicados(nombres,"Andrés"))
console.log(detectarDuplicados(nombres,"Diana"))
console.log(detectarDuplicados(nombres,"Johana")) */
/* 
const numeritos = [9, 22, 124, 77777]
console.log(numeritos)
numeritos.sort()
console.log(numeritos) */

llamarPaciente(nombres)//abuso de hoisting

function llamarPaciente(lista){
  if(lista.length === 0 ){
    alert("No hay más pacientes")
  } else {
    const paciente = lista.shift()
    alert(`${paciente} esta siendo llamado.`)
    alert(`Quedan ${lista.length} paciente en espera.`)
  }
} 