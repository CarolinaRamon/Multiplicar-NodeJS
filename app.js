
//RECIBIR INFORMACIÓN DESDE LÍNEA DE COMANDO

//Hay varios objetos que están corriendo en Node al momento en que la aplicación se ejecuta.

const {crearArchivo} = require('./multiplicar/multiplicar.js')

//console.log(process);//Cuando Node se ejecuta crea una variable de entorno llamada process. Es un objeto igual que module.
//console.log(process.argv);//Imprime la ubicación de node y la ubicación del archivo que estamos utilizando en este momento. Con el comando node app --base=7, le puedo mandar otro parámetro: base=7 de tipo string.

let argv = process.argv;//Esto lo hacemos para que sea más sencillo. Ponemos process.argv dentro de una variable.
let parametro = argv[2];//Selecciono la base que le paso como tercer parámetro
let base = parametro.split('=')[1]//El 1 porque quiero el segundo elemento, que es el número.
//parametro es un string. split es parar separar elementos, para convertir de un string a un arreglo. Lo voy a separar por el signo = y así me quedo solo con el número.
//console.log(base);//prueba para ver si funciona

crearArchivo(base)
  .then(archivo => console.log(`Archivo creado ${archivo}`))
  .catch(e => console.log(e));

  //Estamos ejecutando nuestra aplicación de Node recibiendo parámetros que son enviados desde la terminal directamente con node app --base=4.

  //Igual es bastante difícil capturar la base así y necesita mucha más validaciones compo por ejemplo, si no se introduce ninguna base... etc. Si no lo mando como primer parámetro también es un problema. Porque toma lo que sea que está en primer lugar como la base. Por eso ya hay paquetes creados parar solucionar todo esto.