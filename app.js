//1.importar las dependencias a usar
import express from "express";
import path from "path";
import dotenv from "dotenv";
import conexionMongo from "./src/config/baseDatos.js";
import usuarioRouter from "./src/routes/usuario.routes.js";

//2. configurar el servidor
const app = express();
const puerto = 9000;

//2.1 configurar las variables de entorno
dotenv.config();
//2.2 configurar conexion base de datos
conexionMongo();

//3. ESTABLECER LA CONEXION CON EL FRONTO (INDEX.HTML)
const rutaPublica = path.join(process.cwd(), "public");
app.use(express.static(rutaPublica));
app.use(express.json());
app.use("/api", usuarioRouter);
   //se especifica que se va a acceder al index.html
app.get("/", (req,res) => {
    res.sendFile(path.join(rutaPublica,"index.html" ))
});

//4. INICIALIZAR EL SERVIDOR (PUNTO2)
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`); 
});