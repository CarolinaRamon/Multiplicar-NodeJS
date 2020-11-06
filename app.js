
//COLORES DE LA CONSOLA


const argv = require('./config/yargs').argv;
const colors = require('colors');
// const colors = require('colors/safe');//Otra posibilidad.
        
//Para listar, ingresar por consola: node app listar --limite 30 --base 6, por ejemplo
//Para crear, ingresar por consola: node app crear --limite 5 --base , por ejemplo

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch (comando){

  case 'listar': 
        listarTabla(argv.base, argv.limite);
        break;

  case 'crear': 
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado ${archivo.magenta}`))
      //   .then(archivo => console.log(`Archivo creado`, colors.magenta(archivo)))//Otra posibilidad
        .catch(e => console.log(e));
        break;

  default:
    console.log('Comando no reconocido.');

}



  