/*
// Completa el código de la clase 'Persona'
class Persona {
  // Completa el constructor con los parámetros 'nombre' y 'edad'
  constructor( _____, _____) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Completa el método 'saludar' para que retorne un mensaje de saludo
  _____() {
    return `Hola, mi nombre es ${this._____} y tengo ${this._____} años.`;
  }
}
*/

class Persona {
  // Completa el constructor con los parámetros 'nombre' y 'edad'
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Completa el método 'saludar' para que retorne un mensaje de saludo
  saludar() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Crea una instancia de la clase 'Persona' con el nombre 'Juan' y la edad 30


const persona = new Persona( "Juan", 30)
console.log(persona)

// Llama al método 'saludar' en la instancia y muestra el mensaje resultante
console.log(persona.saludar())

//Cambia el nomrbe a pPedro y la edad a 40
// Debería mostrar "Hola, mi nombre es Pedro y tengo 40 años.".

persona.edad = 40
persona["nombre"] = "Pedro"

console.log(persona.saludar())

