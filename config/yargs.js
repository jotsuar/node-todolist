let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

let completado =  {
    alias: 'c',
    default: true,
    desc: 'Estado de la tarea'
}

const argv = require('yargs')
            .command("crear", "Crear una nueva tarea por hacer",{descripcion})
            .command("borrar", "Borrar una nueva tarea",{descripcion})
            .command("actualizar", "Actualiza el estado completado de una tarea",{descripcion,completado})
            .help()
            .argv;

module.exports = {
    argv
}