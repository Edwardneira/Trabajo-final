//1.importar las dependencias a usar
import express from "express";
import path from "path";
import dotenv from "dotenv";

//2. configurar el servidor
const app = express();
const puerto = 9000;

//2.1 configurar las variables de entorno
dotenv.config();

//3. ESTABLECER LA CONECCION CON EL FRONTO (INDEX.HTML)


//4. INICIALIZAR EL SERVIDOR (PUNTO2)
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`); 
});


