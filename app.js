
//PAQUETE YARGS

//Este es un paquete:
const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', {
              base: {//comando que el usuario puede escribir
                  demand: true, //valor obligatorio
                  alias: 'b' //Esto es para los shorcuts, en lugar de --base ingresa -b
              },
              limite: {
                alias: 'l',
                default: 10//En caso que el usuario no ingrese ningún límite.
              }
            })//El segundo argumento es una ayuda para mostrar al usuario. El tercer argumento es un objeto que va a recibir la configuración de parámetros o de slash (--, -) que este comando puede recibir
            .help()//Imprime una ayuda con el comando --help (node app listar --help o node app --help). Esto lo crea yargs.
            .argv;

//Ingresar por consola: node app listar --base para ver la base

const {crearArchivo} = require('./multiplicar/multiplicar.js')
//Este es un path relativo por eso tiene ./ etc.


let argv2 = process.argv;
console.log(argv.base);
console.log('Limite', argv.limite);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// crearArchivo(base)
//   .then(archivo => console.log(`Archivo creado ${archivo}`))
//   .catch(e => console.log(e));

  