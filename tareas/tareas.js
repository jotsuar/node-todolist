
const fs = require('fs');

let listadoTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);
    fs.writeFile('./db/data.json',data, err => {
        if(err){
            throw new Error("No se pudo guardar",err)
        }
    })

};

const cargarDB = () => {
    try{
        listadoTareas = require('../db/data.json');
    }catch(err){
        listadoTareas = [];
    }
    
};

const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    listadoTareas.push(tarea);
    guardarDB();
    setTimeout( ()=>{
        cargarDB();
    },2000)    
    return tarea;
}

const getListado = ()=>{
    cargarDB();
    return listadoTareas;
};

const actualizar = (descripcion,completado = true) => {
    cargarDB();

    let index = listadoTareas.findIndex((tarea)=>{
        return tarea.descripcion === descripcion;
    });
    
    if(index => 0){
        listadoTareas[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoTareas.findIndex((tarea)=>{
        return tarea.descripcion === descripcion;
    });
    
    if(index => 0){
        listadoTareas.splice(index,1);
        guardarDB();
        return true;
    }
    return false;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
