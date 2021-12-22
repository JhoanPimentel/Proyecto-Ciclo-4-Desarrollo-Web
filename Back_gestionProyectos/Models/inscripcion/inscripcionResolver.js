import { InscripcionModel } from "./inscripcion.js"


const inscripcionResolvers = {

    Query:{
        Inscripiones: async(paret,args)=>{
            const inscripiones = await InscripcionModel.find().populate('estudiante');
            return inscripiones;
        },
    },


    Mutation:{
        crearInscripcion: async(paret,args)=>{
            const crearIsncripcion = await InscripcionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });

            return crearIsncripcion;
        },

        aprobarInscripcion: async(paret,args)=>{
            const inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(args.id,{
                estado: "ACEPTADO",
                fechaIngreso: Date.now()
            });
            return inscripcionAprobada;
        }
    },

};
export {inscripcionResolvers}