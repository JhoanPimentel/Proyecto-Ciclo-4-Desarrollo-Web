import {gql} from 'apollo-server-express';


const proyectoTipos = gql`

    

    type Objetivo{
        _id: ID
        descripcion:String!
        tipo:Enum_TipoObjetivo!
    }

    input createObjetivo{
        descripcion: String!
        tipo:Enum_TipoObjetivo!
    }

    type Proyecto{
        _id: ID
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        lider:Usuarios!
        objetivos:[Objetivo]!
        avances:[Avance]
        inscripciones:[Inscripcion]
    }

    type Query{
        
        Proyectos:[Proyecto]
    
    }
    
    type Mutation{
        
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            estado: Enum_EstadoProyecto!
            fase: Enum_FaseProyecto!
            lider:String!
            objetivos:[createObjetivo]!
        ):Proyecto
    }

`;

export{proyectoTipos};