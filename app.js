
//EJECUTAR EL COMANDO LISTAR


const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', {
              base: {
                  demand: true, 
                  alias: 'b'
              },
              limite: {
                alias: 'l',
                default: 10
              }
            })
            .command('crear', 'Genera un archivo con la tabla de multiplicar', {
              base: {
                  demand: true, 
                  alias: 'b'
              },
              limite: {
                alias: 'l',
                default: 10
              }
            })
            .help()
            .argv;

//Para listar, ingresar por consola: node app listar --limite 30 --base 6, por ejemplo
//Para crear, ingresar por consola: node app crear --limite 5 --base , por ejemplo

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js')

let comando = argv._[0];//_ hace referencia al arreglo

switch (comando){

  case 'listar': 
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

  case 'crear': 
        //console.log('Crear');
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado ${archivo}`))
        .catch(e => console.log(e));
        break;

  default:
    console.log('Comando no reconocido.');

}

// let parametro = argv[2];
// let base = parametro.split('=')[1]


  