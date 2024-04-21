//importar las dependencias que se necesitan
import mongoose from "mongoose";
//crear una funcion que nos conecte la base de datos
const conexionMongo = async() => {
    await mongoose.connect(process.env.BD_URL,{})
//control de errores con try - catch
    try{
        console.log("Conexion exitosa");
    } catch(error){
        console.log("Error de conexion:", error.message);
    }
}
//se tiene que exportar la funcion para llamarla desde el servidor
export default conexionMongo;