/**
 * Ejemplos de Tipos de datos
 * en JavaScript
 */

//Tipo de dato string
var nombre = "Oscar";
console.log(nombre);

//Tipo de dato numerico
var numero = 26;
console.log(numero);

//Tipo de dato Object
var objeto = {
    nombre: "Isaac",
    apellido: "Tinajero",
    edad: 26
}
console.log(objeto);

//Tipo de dato Boolean
var bandera = false;
console.log(bandera);
bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function funcion(){}
console.log(typeof funcion);

//Tipo de dato Symbol
var simbolo = Symbol("simbolo");
console.log(simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);

//Tipo null - nul = ausencia de valor
var y = null;
console.log(typeof y);

//Tipo de dato Array
var auto = [
    'BMW',
    'Audi',
    'Volvo'
];
console.log(auto);
console.log(typeof auto);

//Tipo de string / caden vacia
var z = '';
console.log(z);
console.log(typeof z);

