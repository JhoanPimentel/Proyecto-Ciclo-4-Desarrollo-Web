import mongoose from 'mongoose';
import {ProyectModel} from '../proyecto/proyect.js';
import {UserModel} from '../usuario/users.js';

const {Schema, model} = mongoose;

/*interface Avance{
    
    fecha: Date;
    descripcion: string;
    observaciones:[string];
    proyecto: Schema.Types.ObjectId;
    creadoPor: Schema.Types.ObjectId;
}*/

const avanceSchema = new Schema({
    fecha:{
        type: Date,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    observaciones:[
        {
            type: String,
        },
    ],
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProyectModel,
        required: true,
    },
    creadoPor:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }
});


const AvanceModel = model('Avance',avanceSchema);
export {AvanceModel};
