

const fs = require('fs');

let crearArchivo = (base) => {
//module.exports.crearArchivo = (base) => {//Esto es otra forma de hacer lo del module. Y sin el let.

    return new Promise ((resolve, reject) => {//retorno una promesa

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        let data = '';

        for (let i=0; i<=10; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
         if (err) 
            reject(err)
         else
            resolve(`tabla-${base}.txt`)//El resolve está esperando el nombre del archivo
    });

    });
}


//module es un objeto global que está disponible a lo largo de toda la aplicación y que incluye una propiedad que se llama exports y sirve para exportar objetos.
//Acá estoy agregando a exports lo que quiero exportar.
module.exports = {
    //crearArchivo: crearArchivo //En ECMAScript6 no es necesario escribirlo así cuando el valor es igual a la propiedad.
    crearArchivo
    // crearArchivo,
    // crearArchivo,
    // crearArchivo,
    //Esta forma es mejor que agregarlo arriba porque si tuvieramos muchas funciones simplemente las podríamos agregar aquí una debajo de la otra.
}



