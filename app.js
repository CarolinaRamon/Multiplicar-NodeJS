
//OPTIMIZACIONES PARA LA CONFIGURACIÓN DEL YARGS


const argv = require('./config/yargs').argv;//Podría también hacer argv.argv, es decir, traigo todo el require, lo guardo en argv y dentro del argv hay otro argv al que accedo con el .argv. Pero es mejor extraer solamente lo que necesito y  guardarlo directamente en la const.
        
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


  