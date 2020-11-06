

const opts = {
    base: {
        demand: true, 
        alias: 'b'
    },
    limite: {
      alias: 'l',
      default: 10
    }
}

//

const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
            .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
            .help()
            .argv;

//Para poder utilizar este objeto (argv) fuera de este archivo, lo tengo que exportar:

module.exports = {
    argv
}