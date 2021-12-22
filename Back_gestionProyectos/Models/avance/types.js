import {gql} from 'apollo-server-express';

const tiposAvance = gql`

    type Avance{
        _id: ID
        fecha: Date!
        descripcion: String!
        observaciones:[String]
        proyecto: Proyecto!
        creadoPor: Usuarios!
     }

    
    type Query{
        Avances:[Avance]
        filtarAvance(idProyecto:String!):[Avance]
        
        
    
    }
    
    type Mutation{
        crearAvance(
            fecha: Date!
            descripcion: String!
            proyecto: String!
            creadoPor: String!
        ):Avance

        
              
        
    }

`;

export{tiposAvance};