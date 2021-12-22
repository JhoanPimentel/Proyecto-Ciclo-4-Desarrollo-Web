//import express from 'express';
//import cors from 'cors';
//import {Apolloserver} from './apolloserver';
import conectarBd from './db/db';
import {UserModel} from './Models/usuario/users';
import { Enum_Rol,Enum_EstadoUsuario } from './Models/enums/enums';
import {ProyectModel} from './Models/proyecto/proyect'
import { Enum_TipoObjetivo } from './Models/enums/enums';
//import dotenv from 'dotenv';
//import {typeDefs} from './graphql/types';
//import {resolvers} from './graphql/resolvers';


const main= async()=>{
    await conectarBd();

    /*ProyectModel.create({
        nombre:"Proyecto 2",
        presupuesto: 120,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/12/30"),
        lider:"61b96804bb539dbb43285ac9",
     
    });*/

    /*const usuarioInicial = await UserModel.create({
        correo: "asasas@jaldsj.com",
        identificacion: "254658759",
        nombre: "Frederick",
        apellido: "Lopez",
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.pendiente,

    });

    await ProyectModel.create({
        nombre:"Proyecto mintic2",
        presupuesto: 1200000,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/12/30"),
        lider: usuarioInicial._id,
        objetivos: [
            {descripcion:"Este es el obgetivo general",tipo: Enum_TipoObjetivo.general},
            {descripcion:"Este es el obgetivo especifico 1",tipo: Enum_TipoObjetivo.especifico},
            {descripcion:"Este es el obgetivo especifico 2",tipo: Enum_TipoObjetivo.especifico},
        ]
    });*/
    
    
    /*await ProyectModel.findOne({nombre:"Proyecto 2"}).populate("lider").then((u)=>{
        console.log("Proyecto",u);
    });*/

    
    

};


main();





//CRUD USUARIO
//Crear usuario
/*  await UserModel.create({
        correo: "asasas@jaldsj.com",
        identificacion: "254658759",
        nombre: "Frederick",
        apellido: "Lopez",
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.pendiente,
        

    }).then((u)=>{
        console.log("usuario creado", u);
    }).catch((e)=>{
        console.log("Error al crear el usuario");
    });*/


//Buscar todos los usuarios

/*await UserModel.find()
    .then((u)=>{
         console.log("usuarios", u);
    
    })
    .catch((e)=>{
        console.error("Error al buscar usuarios", e);
    });*/

//Buscar un usuarios
/*await UserModel.findOne({docuento:"2546587"}).then((u)=>{
    console.log("usuarios", u);
});*/


//editar usuario
/*await UserModel.findOneAndUpdate(
    {documento:"25465875"},
    {
    nombre:"Edward"
    }
);*/

//Eliminar usuario

/*await UserModel.findOneAndDelete(
    {documento:"254658759"}
    ).then((u)=>{
        console.log("usuarios", u);
    });
*/















/*dotenv.config();

const server = new Apolloserver({
    typeDefs: typeDefs,
    resolvers:resolvers,
})

const app = express();
app.use(express.json());
app.use(cors());
app.listen({port:3000}, async()=>{
    await conectarBd();
    await server.start();
    
    server.applyMiddleware({app});

    console.log("Servidor listo")


});*/

