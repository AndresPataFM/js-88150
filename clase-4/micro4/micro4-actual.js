/* 
  Crea una lista de atencion para un consultorio, los primeros en la lista son atendidos
*/

const consultorio = {
  // Objeto principal de la aplicacion
  pacientes: [],
  // lista de espera de pacientes
  agregarPacientes(){
    //Agrega un paciente a la lista al final, pero si es paciente de prioridad, ingresa al ppio de la lista
    const nombrePaciente = prompt("Ingrese el nomrbe del paciente").toUpperCase()
    const prioridad = confirm("¿Es paciente de prioridad?")
    if(prioridad){
      consultorio.pacientes.unshift(nombrePaciente)
    } else {
      consultorio.pacientes.push(nombrePaciente)
    }
  },
  mandarPacienteAlDoctor(){
    // Saca el primer paciente de la lista y lo muestra
    const pacienteEntrar = consultorio.pacientes.shift()
    alert(`El paciente ${pacienteEntrar} puede entrar a ser atendido`)
  },
  buscarEnLista(){
    //busca a un paciente en la lista, si no lo encuentra le dice que no esta y si lo encuentra le dice su posición en la lista
    const nombreConsultar = prompt("Ingrese el nombre del paciente").toUpperCase()
    const consulta = consultorio.pacientes.indexOf(nombreConsultar)
    if(consulta === -1){
      alert(`El paciente ${nombreConsultar} no esta en la lista de espera`)
    } else {
      alert(`El paciente ${nombreConsultar} esta en la posición ${consulta+1}`)
    }
  }
}

function ingresarNumero(){
  // valida que se ingrese un número del 1 al 4 y lo devuelve
  let operacionIngresada = parseInt(prompt("Ingrese: \n 1 - Agregar paciente a lista.\n 2 - Mandar Paciente al doctor.\n 3 - Buscar paciente emn lista \n 4 - Salir"))
  while(isNaN(operacionIngresada) || operacionIngresada < 1 || operacionIngresada > 4){
    operacionIngresada = parseInt(prompt("Ingrese: \n 1 - Agregar paciente a lista.\n 2 - Mandar Paciente al doctor.\n 3 - Buscar paciente en lista \n 4 - Salir \n POR FAVOR INGRESE UN VALOR DEL 1 AL 4"))
  }
  return operacionIngresada
}


function seleccionarOperacion(operacion){
  // Dependiendiendo del número ingresado, se realiza una operación distinta
  switch(operacion){
    case 1:
      consultorio.agregarPacientes()
      break;
    case 2:
      consultorio.mandarPacienteAlDoctor()
      break;
    case 3:
      consultorio.buscarEnLista()
      break;
    case 4:
      loop = false
      break;
    default:
      alert("Por favor ingrese solo números del 1 al 4")
  }
}


function app(){
  //Ejecuta todo el programa
  alert("Buen día")
  let loop = true
  while(loop){
    let operacion = ingresarNumero()
    seleccionarOperacion(operacion)
  }
  alert("Chau que tenga buen día")
}


// Corro el programa
app()