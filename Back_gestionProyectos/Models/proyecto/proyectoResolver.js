import { ProyectModel } from "./proyect.js";

const proyectoResolvers = {
    
    Query:{
        Proyectos: async(paret,args)=>{
            const proyectos = await ProyectModel.find().populate('lider').populate('avances').populate('inscripciones');
            return proyectos;
        },
    },

    Mutation:{
        crearProyecto: async(paret,args)=>{
            const createProyecto = await ProyectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivos: args.objetivos,
                
            });
            return createProyecto;
        },
    },

   };

export {proyectoResolvers};