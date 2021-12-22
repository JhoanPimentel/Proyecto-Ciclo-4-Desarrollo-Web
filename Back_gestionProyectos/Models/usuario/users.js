import mongoose from 'mongoose';
//import {Enum_Rol, Enum_EstadoUsuario} from '../enums/enums';


const {Schema, model} = mongoose;

//Crear esquema de la coleccion de Usuarios

/*interface User{
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
    estado: Enum_EstadoUsuario;


}*/

const userSchema = new Schema({
    
    correo:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: (email)=>{
               return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
           
        },
        message:"El formato del correo debe contener @ y un .",
        },
    },
    identificacion:{
        type: String,
        required: true,
        unique: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
    rol:{
        type: String,
        required: true,
        enum:["ESTUDIANTE", "LIDER","ADMINISTRADOR"],
        

    },
    estado:{
        type: String,
        enum:["PENDIENTE","AUTORIZADO","NO_AUTORIZADO"],
        default:"PENDIENTE",
    },
    
    
});


const UserModel = model("User",userSchema);

export {UserModel};
