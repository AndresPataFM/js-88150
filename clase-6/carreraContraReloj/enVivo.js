/*🟧 Automatización de pedidos de hamburguesa 🟧

🟠 Trabajas en una empresa que va a revolucionar el mercado con su manera de preparar hamburguesas.
🟠 Debes automatizar los pedidos que incluyan el nombre, el precio, los ingredientes y el número de combo de la hamburguesa elegida por el usuario.
🟠 Almacena las instancias de la clase en un array de objetos llamado ❗'hamburguesas'❗, utilizando el método push().
🟠 Ten presente que: 

🔶 El precio debe ser un valor numérico y puede contener decimales (2). 
🔶 El número de combo también es numérico y debe ser un número entero. 
🔶 Por último, los ingredientes de cada hamburguesa deben estar contenidos en un array de elementos.

🔹 Crear en JS una clase con el nombre hamburguesa
🔹 En su constructor define "nombre", "precio", "ingredientes" y "número de combo"
🔹 Luego de definir la clase JS, deberás instanciar al menos 7 hamburguesas con las respectivas características solicitadas por el constructor, para hacerlo toma como base la siguiente información (lista al final)

Lista:

("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso',
'Aderezo'], 4)
("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)
*/

class Hamburguesa{
  constructor(nombre, precio, ingredientes, nroCombo){
    this.nombre = nombre;
    this.precio = parseFloat(precio.toFixed(2));
    this.ingredientes = ingredientes
    this.nroCombo = parseInt(nroCombo)
  }
}

const hamburguesas = []

function agregarHamburguesa(nombre, precio, ingredientes, nroCombo){
  hamburguesas.push(new Hamburguesa(nombre, precio, ingredientes, nroCombo))
}

agregarHamburguesa("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
agregarHamburguesa("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
agregarHamburguesa("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
agregarHamburguesa("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso',
'Aderezo'], 4)
agregarHamburguesa("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
agregarHamburguesa("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
agregarHamburguesa("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
agregarHamburguesa("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)

console.table(hamburguesas)