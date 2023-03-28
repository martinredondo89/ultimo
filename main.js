/*
Ejercicio 1:
Crear una plantilla (clase) que represente un Empleado, el cual contenga los siguientes
atributos: nombre, apellido, dni, fecha de nacimiento, edad, antigüedad. Se debe poder
consultar y modificar cada una de sus propiedades a través de get y set.
Además debe tener un método llamado seJubila(), el cual teniendo en cuenta la edad (60
años o más), informe si ya está apto para jubilarse.
Ejercicio 2:
Crear 2 empleados ficticios. Uno apto para jubilarse y el otro no
*/

class Empleado {
  constructor (nombre,apellido,dni,fechaNacimiento,edad,antiguedad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._dni = dni;
    this._fechaNacimiento = fechaNacimiento;
    this._edad = edad;
    this._antiguedad = antiguedad;
  }

  get edad (){
    return this._edad;
  }
  set edad (nuevaEdad) {
    this._edad = nuevaEdad;
  }
  
  seJubila () {
    if (this._edad >= 60) {
      return `El empleado se jubila ya que tiene ${this._edad}`
    } else {
      return `El empleado no se jubila ya que tiene ${this._edad}`
    }
  }
}

let empleado1 = new Empleado ("Marcos","Sanchez","34.111.111","12-11-1989",55,32);
let empleado2 = new Empleado ("Juan","Perez","34.111.111","12-11-1989",65,37);

empleado1.edad = 59;

console.log(empleado1.seJubila());

console.log(empleado2.seJubila());
