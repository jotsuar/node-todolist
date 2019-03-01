// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const colors = require('colors');

const tareas = require('./tareas/tareas')

let comando = argv._[0];

switch (comando){
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = tareas.getListado();
        for (let tarea of listado){
            console.log('--------------Tarea-----------------'.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('------------------------------------'.green);
        }
        break;
    case 'actualizar':
        let update = tareas.actualizar(argv.descripcion,argv.completado);
        console.log(update)
        break;
    case 'borrar':
        let deletes = tareas.borrar(argv.descripcion);
        console.log(deletes)
        break;
    default:
        console.log("Comando no reconocido");
        break;
}