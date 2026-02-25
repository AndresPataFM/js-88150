// Destructuring
// Object in, object Out

const usuario = {
  nombre: "Andrés",
  id: 45457,
  online: true
}

console.log(usuario.nombre)

const {nombre, id, online} = usuario

console.log(nombre)
console.log(usuario.id)

const numeros = [0,1,2,3]

const [cero, uno, dos, tres] = numeros

console.log(dos)

/* function mostrarUsuario(user){
  const {online} = user

  console.log(online)
  return user
} */
function mostrarUsuario({online}){
  console.log(online)

}

console.log(mostrarUsuario(usuario))
