function saludar(){
    console.log("hola")
}
function despedir(){
    console.log("chau")
}
const nombre = "Andrés"

const helper = {
    saludar: saludar,
    despedir:despedir,
    nombre: nombre
}

export default helper

// export {saludar, despedir, nombre};