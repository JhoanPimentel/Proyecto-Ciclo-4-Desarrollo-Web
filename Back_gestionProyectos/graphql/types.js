import {gql} from 'apollo-server-express';
import { tiposEnum } from '../Models/enums/types.js';
import { usuarioTipos } from '../Models/usuario/usuarioTipos.js';
import { proyectoTipos } from '../Models/proyecto/proyectoTipos.js';
import {tiposAvance} from '../Models/avance/types.js';
import { tiposInscripcion } from '../Models/inscripcion/inscripcionTipos.js';


const tiposGlobales = gql`

    scalar Date
`;
export const tipos=[tiposGlobales, tiposEnum, usuarioTipos, proyectoTipos, tiposAvance, tiposInscripcion];


