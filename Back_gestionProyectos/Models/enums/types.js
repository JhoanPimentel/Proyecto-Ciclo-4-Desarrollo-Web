import {gql} from 'apollo-server-express';


const tiposEnum = gql`
    enum Enum_EstadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_Rol{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
    }

    enum Enum_FaseProyecto{
        INICIADO
        EN_DESAROLLO
        TERMINADO
        NULA
    }

    enum Enum_TipoObjetivo{
        GENERAL
        ESPECIFICO
    }

    enum Enum_EstadoInscripcion{
        ACEPTADO
        RECHAZADO
        PENDIENTE
    }

`;

export{tiposEnum};


