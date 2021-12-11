import {initDatabase, 
    readUsuario, 
    readUsuarioByDocumento, 
    readUsuarioByRol,
    readUsuarioByEstado,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    readProyectos,
    createProyecto,
    readProyectoByEstado,
    readProyectoByNomProyecto,
    readproyectoByfase,
    updateProyecto,
    deleteProyecto
    
    
} 
from './data-access.js';
import express from 'express';

const app = express();

import graphql from 'graphql'
import graph_express from 'express-graphql';

const {buildSchema} = graphql;
const {graphqlHTTP} = graph_express;

initDatabase();

const schema = buildSchema(`

type Query{
    allUsuarios:[Usuario]
    usuariosByDocumento(documento: String):[Usuario]
    usuariosByRol(rol: String):[Usuario]
    usuariosByEstado(estado: String):[Usuario]
    allProyectos:[Proyecto]
    ProyectoByEstado:[Proyecto]
    ProyectoByNomProyecto:[Proyecto]
    proyectoByfase:[Proyecto]
}

type Mutation{
    insertUsuario(rol: String, estado: String, correo: String, nombre: String, documento: String): Usuario
    updateUsuario(rol: String, estado: String, correo: String, nombre: String, documento: String): Usuario
    deleteUsuario(documento: String): Usuario
    deleteProyecto(id:String):Proyecto

    
    
    
}

type Usuario{
    rol: String
    estado: String
    correo: String
    nombre: String
    documento: String
}

type Proyecto{
    nombre_proyecto: String
        lider: String
        estado: String
        presupuesto: String
        fase: String
        avances: Avances
        docuemtoLider: String
        estudiantesinscritos: String
        fechaInicio: String
        fechaTerminacion: String
        objetivosEspecificos: String
        objetivosGenerales: String
        
}

type Avances{
    observaciones: String
    retroalimentacion: String
}


`)
;


let getAllUsuarios = async () =>{
    const Usuarios = await readUsuario();
    return Usuarios;
}

let getUsuarioByDocumento = async (args) =>{
    const Usuarios = await readUsuarioByDocumento(args.documento);
    return Usuarios;
}

let getUsuariosByRol = async (args)=>{
    const Usurol = await readUsuarioByRol(args.rol);
    return Usurol;
}

let getUsuariosByEstado = async (args) =>{
    const Usuestado = await readUsuarioByEstado(args.estado);
    return Usuestado;
}

let createOneUsuario = async (args) =>{
    const usuarios = await createUsuario(args);
    return usuarios;
}

let updateOneUsuario = async (args) =>{
    const usuario = await updateUsuario(args);
    return usuario;
}

let deleteOneUsuario = async (documento) =>{
    const usuario = await deleteUsuario(documento);
    return usuario;
}

let getAllProyectos = async (args) =>{
    const proyectos = await readProyectos()
    return proyectos;
}

let createOneProyecto = async (args) =>{
    const proyectos = await createProyecto(args);
    return proyectos;
}

let getProyectoByEstado = async (args) =>{
    const proyectos = await readProyectoByEstado(args);
    return proyectos;
}

let getProyectoByNomProyecto= async (args) =>{
    const proyectos = await readProyectoByNomProyecto(args);
    return proyectos;
}

let getProyectoByfase = async(args)=>{
    const proyectos = await readproyectoByfase(args);
    return proyectos;
}

let updateOneProyecto = async (args) =>{
    const usuario = await updateProyecto(args);
    return usuario;
}
    
let deleteOneProyecto = async (documento) =>{
    const usuario = await deleteProyecto(documento);
    return usuario;
}   
    
    

const root={
    allUsuarios: getAllUsuarios,
    usuariosByDocumento: getUsuarioByDocumento,
    usuariosByRol: getUsuariosByRol,
    usuariosByEstado: getUsuariosByEstado,
    insertUsuario: createOneUsuario,
    updateUsuario: updateOneUsuario,
    deleteUsuario: deleteOneUsuario,
    allProyectos: getAllProyectos,
    insertProyecto: createOneProyecto,
    ProyectoByEstado: getProyectoByEstado,
    ProyectoByNomProyecto:getProyectoByNomProyecto,
    proyectoByfase:getProyectoByfase
}






app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(3000);