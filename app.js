
//IMPORTAR ARCHIVOS DE NUESTRO PROYECTO


//const multiplicar = require('./multiplicar/multiplicar.js')//La extensión js en un require es opcional porque es redundante, ya que se sabe que tiene que ser un archivo js

//console.log(multiplicar); //multiplicar tiene una propiedad que se llama crearArchivo que es una función
//multiplicar.crearArchivo //podría acceder así, pero es mejor simplemente llamar a la función. Eso lo podemos hacer gracias a la destructuración.

const {crearArchivo} = require('./multiplicar/multiplicar.js')//Si después de una const siguen llaves {}, quiere decir que es una destructuración.

//Tablas de multiplicar:

// let base = 'abc';//prueba
let base = 7;


crearArchivo(base)
  .then(archivo => console.log(`Archivo creado ${archivo}`))
  .catch(e => console.log(e));

// console.log(module);