
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base=5, listar=false, hasta=10 ) =>{

    try {
        
        let salida ='';
        let consola ='';
        
        for (let i=0; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`; // salida sin caracteres especiales
            consola += `  ${colors.brightWhite( base )} ${'x'.brightRed} ${colors.brightWhite( i )} ${'='.brightGreen} ${colors.brightWhite( base * i )}\n`;
        }
        
        if( listar ){
            console.log('  ======================================='.brightCyan);
            console.log('              Tabla del:'.brightYellow, colors.brightYellow( base ) );
            console.log('  ======================================='.brightCyan);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);

        return `  tabla-del-${base}.txt creada`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo // crearArchivo: crearArchivo
}



