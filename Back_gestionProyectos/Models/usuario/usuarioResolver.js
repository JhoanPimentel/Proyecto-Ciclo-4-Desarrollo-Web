import { UserModel } from "./users.js"


const usuarioResolvers = {
    
    Query:{
        Usuarios: async(paret,args)=>{
            const usuarios = await UserModel.find();
            return usuarios;
        },
        Usuario: async(paret,args)=>{
            const usuarioById = await UserModel.findOne({
                identificacion: args.identificacion
            });
            return usuarioById;
        },
        
    },

    Mutation:{
        crearUsuario: async(paret,args)=>{
            console.log("Se ejecuta la mutacion de crear usuario")
            const crearUsuario = await UserModel.create({
                correo: args.correo,
                identificacion: args.identificacion,
                nombre: args.nombre,
                apellido: args.apellido,
                rol: args.rol,
                estado: args.estado,
                       
            });
            if(Object.keys(args).includes("estado")){
                crearUsuario.estado = args.estado;
            }

        return crearUsuario;
        },
        eliminiarUsuario: async(paret,args)=>{
             const deleteUsuario = await UserModel.findOneAndDelete(
                    {identificacion: args.identificacion});
                return deleteUsuario;
            
        },

        actualizarUsuario: async(paret,args)=>{
            const updateUsuario = await UserModel.findOneAndUpdate(args.identificacion,{
            correo: args.correo,
            nombre: args.nombre,
            apellido: args.apellido,
            rol: args.rol,
            estado: args.estado, 
            });
            return updateUsuario;
        },
      
    },

   };

export {usuarioResolvers};