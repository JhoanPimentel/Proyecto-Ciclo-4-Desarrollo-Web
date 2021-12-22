import {gql} from 'apollo-server-express';


const usuarioTipos = gql`

    type Usuarios{
        _id: ID
        correo: String!
        identificacion: String
        nombre: String!
        apellido: String!
        rol: Enum_Rol!
        estado: Enum_EstadoUsuario!
     
    }

    
    type Query{
        Usuarios:[Usuarios]
        Usuario(identificacion:String!):Usuarios
        
    
    }
    
    type Mutation{
        crearUsuario(
            correo: String!
            identificacion: String!
            nombre: String!
            apellido: String!
            rol: Enum_Rol!
            estado: Enum_EstadoUsuario 
        ):Usuarios
        
        eliminiarUsuario(
            _id: String , identificacion: String
        ):Usuarios
        
        actualizarUsuario(
            correo: String!
            identificacion: String!
            nombre: String!
            apellido: String!
            rol: Enum_Rol!
            estado: Enum_EstadoUsuario 
        ):Usuarios

        }

`;

export{usuarioTipos};


