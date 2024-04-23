//Importar las dependencias que se necesitan usar
import mongoose from "mongoose";

const schema = mongoose.Schema;
// Crear una un esquema de datos que es lo que se va a guardar en la base de datos (estructura)
const usuarioSchema = new schema({
    nombreCompleto:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    }
});
// Enviar la plantilla o el schema a la base de datos que solo recibe modelos
//crear el modelo
const usuarioMondel = mongoose.model("usuario",usuarioSchema);

//Exportar el modelo
export default usuarioMondel;
