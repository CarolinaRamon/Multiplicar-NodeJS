

const fs = require('fs');

//Igual gracias a Yargs siempre vamos a recibir un valor por defecto del límite. Es un poco redundante ponerle un valor por defecto al límite acá, pero bueno...
let listarTabla = (base, limite = 10) => {

    for (let i=0; i<=limite; i++){
        console.log(`${base} * ${i} = ${base * i}\n`); 
    }

}


let crearArchivo = (base, limite=10) => {

    return new Promise ((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        let data = '';

        for (let i=0; i<=limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
         if (err) 
            reject(err)
         else
            resolve(`tabla-${base}-al-${limite}.txt`)
    });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}



