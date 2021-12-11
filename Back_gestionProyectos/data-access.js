import mongoose from "mongoose";

let UsuarioModel;
let ProyectoModel;

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

   const proyectoSchema = mongoose.Schema({
        id: String,    
        nombre_proyecto: String,
        lider: String,
        estado: String,
        presupuesto: String,
        fase: String,
        avances: {
            observaciones: String,
            retroalimentacion: String
        },
        docuemtoLider: String,
        estudiantesinscritos: String,
        fechaInicio: String,
        fechaTerminacion: String,
        objetivosEspecificos: String,
        objetivosGenerales: String

    },{versionKey: false});
       
    UsuarioModel = mongoose.model('usuarios', usuarioSchema);
    ProyectoModel = mongoose.model('proyectos', proyectoSchema);
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

export const updateUsuario = async(args)=>{
    const usuario = await UsuarioModel.updateOne(
        {documento: args.documento},
        {$set: {
          rol: args.rol,
          estado: args.estado,
          correo: args.correo,
          nombre: args.nombre
           }
        }
        )
      
    
    return usuario.args.documento; 

}

export const deleteUsuario = async(args)=>{
    const usuario = await UsuarioModel.deleteOne({documento: args.documento});
    return usuario;
}

export const readProyectos = async()=>{
    const proyectos = await ProyectoModel.find();
    return proyectos;
}

export const createProyecto = async(Dproyect)=>{
    const proyecto = new ProyectoModel({
        nombre_proyecto: Dproyect.nombre_proyecto,
        lider: Dproyect.lider,
        estado: Dproyect.estado,
        presupuesto: Dproyect.presupuesto,
        fase: Dproyect.fase,
        avances: {
            observaciones: Dproyect.observaciones,
            retroalimentacion: Dproyect.retroalimentacion
        },
        docuemtoLider: Dproyect.docuemtoLider,
        estudiantesinscritos: Dproyect.estudiantesinscritos,
        fechaInicio: Dproyect.fechaInicio,
        fechaTerminación: Dproyect.fechaTerminación,
        objetivosEspecíficos:Dproyect.objetivosEspecíficos,
        objetivosGenerales: Dproyect.objetivosGenerales
    });
    const insertProyecto = await proyecto.save();
    
  return insertProyecto;
}

export const readProyectoByNomProyecto = async(nomProyect)=>{
    const proyecto = await ProyectoModel.find({nombre_proyecto: nomProyect});
    return proyecto;
}

export const readproyectoByfase = async(Dfase)=>{
    const usuariosEstado = await UsuarioModel.find({fase: Dfase});
    return usuariosEstado;
}


export const readProyectoByEstado = async(Destado)=>{
    const proyectoEstado = await UsuarioModel.find({estado: Destado});
    return proyectoEstado;
}
   

export const updateProyecto = async(args)=>{
    const proyecto = await ProyectoModel.updateOne(
        {id: args.id},
        {$set: {
            id: String,    
            nombre_proyecto: String,
            lider: String,
            estado: String,
            presupuesto: String,
            fase: String,
            avances: {
                observaciones: String,
                retroalimentacion: String
            },
            docuemtoLider: String,
            estudiantesinscritos: String,
            fechaInicio: String,
            fechaTerminacion: String,
            objetivosEspecificos: String,
            objetivosGenerales: String
           }
        }
        )
      
    
    return proyecto; 

}

export const deleteProyecto = async(args)=>{
    const proyecto = await ProyectoModel.deleteOne({id: args.id});
    return proyecto;
}
