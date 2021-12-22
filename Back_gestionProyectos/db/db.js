import mongoose from 'mongoose';


const conectarBd = async()=>{
    //return await connect("mongodb+srv://admin:A123456@misionticgrupov4.89ewc.mongodb.net/GestionProyectosGrupoV4?retryWrites=true&w=majority")
    return await mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("conexion exitosa");
    })
    .catch((e)=>{
        console.error("error conectando a ala base de datos",e);
    });
};

export default conectarBd;