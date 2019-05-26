const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de una tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de una tarea por hacer'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}