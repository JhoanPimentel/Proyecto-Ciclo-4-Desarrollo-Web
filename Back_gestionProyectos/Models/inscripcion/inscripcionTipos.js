import {gql} from 'apollo-server-express';


const tiposInscripcion = gql`

    type Inscripcion{
        _id: ID
        estado: Enum_EstadoInscripcion
        fechaIngreso: Date
        fechaEgegreso: Date
        proyecto: Proyecto!
        estudiante: Usuarios!
     }

    
    type Query{
        Inscripiones:[Inscripcion]
        
    }
    
    type Mutation{
        crearInscripcion(
            estado: Enum_EstadoInscripcion
            proyecto: String!
            estudiante: String!
        ):Inscripcion
              
        aprobarInscripcion(
            id: String
        ):Inscripcion    
    }


`;

export{tiposInscripcion};

