// console.log("hola")
// console.table([1,2,3,4,5])
// console.log({})

// No hay document ni herramientas relacionadas (window no existe)
// alert("soy un alert")
// document.createElement("div")
// localStorage


const fs = require("node:fs")

// crear
// fs.writeFileSync("ejemplo.txt", "Hola, me crearon con node.")
// fs.writeFileSync("ejemplo.js", "console.log('hello world')")

// leer
/* fs.readFile("ejemplo.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
}); */
/* fs.readFile("./clase-9/promesas.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
}); */

// agregar al final | apend
fs.appendFileSync("ejemplo.txt", " A mi me agregaron con node.")
