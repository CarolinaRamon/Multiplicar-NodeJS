
//Los requires se ponen acá arriba.
//REQUIRES:
const fs = require('fs');//Esta librería ya existe en Node y simplemente la definimos y no hay que hacer nada más.
//Hay 3 tipos de requires, el de arriba y:
//const fs = require('express'); Esta librería no existe en la documentación de Node. Es un paquete que se instala. No es nativo de Node. Es un paquete que lo hizo una persona y lo comparte.
//const fs = require('./'); Este es un require de archivos que nosotros creamos en el proyecto. Se excribe ./ + el path de donde viene el archivo. También puede ser ../


//Tabla de multiplicar:
let base = 3;
let data = '';

for (let i=0; i<=10; i++){
    data += `${base} * ${i} = ${base * i}\n`;
}

//Con Node, vamos a guardar esta tabla de multiplicar en un archivo de texto.
//Para eso: ir a nodejs.org/Docs/v.15.1.0 API (o la versión que diga; me puedo fijar tamibién qué versión de node tengo instalado con node -v en la consola)/File System (paquete preinstalado en Node)/File System (elijo la primera opción que nuevamente es File System)/Copio: const fs = require('fs'); y lo pego arriba. Después busco ahí mismo una función de File System: fs.writeFile(file, data[, options], callback) El primer parámetro es el nombre del archivo o el path, data es lo que queremos grabar, options puede ser utf-8, codificado, etc. y al final un callback para saber si funcionó o no.

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado!`);
});
//fs hace referencia al paquete que acabo de importar (el require). 
