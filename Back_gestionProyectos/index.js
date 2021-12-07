import {initDatabase, 
    readUsuario, 
    readUsuarioByDocumento, 
    readUsuarioByRol,
    readUsuarioByEstado,
    createUsuario
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
}

type Mutation{
    insertUsuario(rol: String, estado: String, correo: String, nombre: String, documento: String): Usuario
}

type Usuario{
    rol: String
    estado: String
    correo: String
    nombre: String
    documento: String
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


const root={
    allUsuarios: getAllUsuarios,
    usuariosByDocumento: getUsuarioByDocumento,
    usuariosByRol: getUsuariosByRol,
    usuariosByEstado: getUsuariosByEstado,
    insertUsuario: createOneUsuario
}






app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(3000);