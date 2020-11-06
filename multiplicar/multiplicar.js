

const fs = require('fs');
const colors = require('colors');//Tengo que hacer los requires por cada archivo en donde yo necesite esa librería

let listarTabla = (base, limite = 10) => {


    console.log('======================================='.green);
    console.log(`=========== ${base}=================`.yellow);
    console.log('======================================='.green);

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



