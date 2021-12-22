import mongoose from 'mongoose';
//import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo} from '../enums/enums.js';
import {UserModel} from '../usuario/users.js';

const {Schema, model} = mongoose;

/*interface Proyect{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    lider:Schema.Types.ObjectId;
    objetivos:[{descripcion:String; tipo:Enum_TipoObjetivo}];

}*/

const proyectSchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    presupuesto:{
        type: Number,
        required: true,
    },
    fechaInicio:{
        type: Date,
        required: true,
    },
    fechaFin:{
        type: Date,
        required: true,
    },
    estado:{
        type: String,
        enums: [ "ACTIVO", "INACTIVO"],
        default: "INACTIVO",
    },
    fase:{
        type: String,
        enums: ["INICIADO","EN_DESAROLLO","TERMINADO", "NULO"],
        default: "NULO",
        
    },
    lider:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    objetivos:[
        {
            descripcion:{
                type: String,
                required: true,
            },
            tipo:{
                type: String,
                enum: ["GENERAL","ESPECIFICO"],
                required: true,
            },
        },
    ],
},{
    toJSON:{virtuals: true},
    toObject:{virtuals: true},
});

proyectSchema.virtual('avances',{
    ref: 'Avance',
    localField:"_id",
    foreignField:"proyecto"
});

proyectSchema.virtual('inscripciones',{
    ref: 'Inscripcion',
    localField:"_id",
    foreignField:"proyecto"
});

const ProyectModel = model("Proyect",proyectSchema);

export {ProyectModel};

