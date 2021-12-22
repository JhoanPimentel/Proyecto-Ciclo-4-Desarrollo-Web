import mongoose from 'mongoose';;
//import { Enum_EstadoInscripcion } from '../enums/enums.js';
import { ProyectModel } from '../proyecto/proyect.js';
import {UserModel} from '../usuario/users.js';

const {Schema, model} = mongoose

/*interface Inscripcion{
    estado: Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto: Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
}*/

const inscripcionSchema = new Schema({
    estado:{
        type: String,
        required: true,
        enum:["ACEPTADO","RECHAZADO","PENDIENTE"],
        default:"PENDIENTE"

    },
    fechaIngreso:{
        type: Date,
        required: false,
    },
    fechaEgreso:{
        type: Date,
        required:  false,
    },
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProyectModel,
        required: true,
    },
    estudiante:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
    

});

const InscripcionModel = model("Inscripcion", inscripcionSchema);
export {InscripcionModel};