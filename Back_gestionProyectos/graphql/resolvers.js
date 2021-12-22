import { usuarioResolvers } from "../Models/usuario/usuarioResolver.js";
import { proyectoResolvers } from "../Models/proyecto/proyectoResolver.js";
import { avanceResolvers } from "../Models/avance/avanceResolver.js";
import { inscripcionResolvers } from "../Models/inscripcion/inscripcionResolver.js";

export const resolvers = [usuarioResolvers, proyectoResolvers, avanceResolvers, inscripcionResolvers];