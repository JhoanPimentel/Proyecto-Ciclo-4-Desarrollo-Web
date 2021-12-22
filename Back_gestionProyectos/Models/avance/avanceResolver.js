import { AvanceModel } from "./avance.js"


const avanceResolvers = {
    
    Query:{
        Avances: async(paret,args)=>{
            const avances = await AvanceModel.find().populate('proyecto').populate('creadoPor');
            return avances;
        },

        filtarAvance: async(paret,args)=>{
            const filtroAvance = await AvanceModel.find({proyecto: args.idProyecto})
            .populate('proyecto')
            .populate('creadoPor');
        
            return filtroAvance;
        }

        
    },

    Mutation:{
        crearAvance: async(paret,args)=>{
            const crearAvance = await AvanceModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
                       
            });
            
        return crearAvance;
       },

      
            
    },

   };

export {avanceResolvers};