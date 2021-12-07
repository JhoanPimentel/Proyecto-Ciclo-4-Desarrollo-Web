import mongoose from "mongoose";

let UsuarioModel;

export const initDatabase =()=>{
 
   // const url='mongodb+srv://GrupoV4:A123456@grupov4.qyfop.mongodb.net/AdminProyecosInvest?retryWrites=true&w=majority';
   const url='mongodb+srv://GrupoV4:A123456@grupov4.qyfop.mongodb.net/AdminProyecosInvest?retryWrites=true&w=majority';
   //const url='mongodb://localhost/test_crud';

    mongoose.connect(url).then('Database is connected!!!!').catch((e)=>console.log("error " + e))

    const usuarioSchema = mongoose.Schema({
        rol: String,
        estado: String,
        correo: String,
        nombre: String,
        documento: String

    },{versionKey: false});

    UsuarioModel = mongoose.model('usuarios', usuarioSchema);

}


export const readUsuario = async()=>{
    console.log("entro a readProyecos")
    const usuarios = await UsuarioModel.find();

    return usuarios;
}


export const readUsuarioByDocumento = async(dataDocu)=>{
    const usuarios = await UsuarioModel.find({documento: dataDocu});
    return usuarios;
}

export const readUsuarioByRol = async(Drol)=>{
    const usuariosRol = await UsuarioModel.find({rol: Drol});
    return usuariosRol;
}


export const readUsuarioByEstado = async(Destado)=>{
    const usuariosEstado = await UsuarioModel.find({estado: Destado});
    return usuariosEstado;
}

export const createUsuario = async(args)=>{
    const usuario = new UsuarioModel({
        rol: args.rol,
        estado: args.estado,
        correo: args.correo,
        nombre: args.nombre,
        documento: args.documento
    });

    const insertUsuario = await usuario.save();

    return insertUsuario;
}