//IMPORTAR DEPENDENCIAS
//las turas conectan el front con la lógica
import express from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuario.controller.js";

//DEFINIR UNA VARIABLE PARA LAS RUTAS
const usuarioRouter = express.Router();

//DEFINIR LAS RUTAS ESPECIFICAS
//Ruta para obtener ususario
usuarioRouter.get("/obtenerUsuario" ,getUsuario);
//Ruta para crear usuarios
usuarioRouter.post("/crearUsuario" ,postUsuario);
//Ruta para modificar usuarios por su id (identificador único)
usuarioRouter.put("/modificarUsuario/:_id" ,putUsuario);
//Ruta para eliminar usuarios por su id (identificador único)
usuarioRouter.delete("/eliminarUsuario/:_idd" ,deleteUsuario);

//EXPORTAR LAS RUTAS
export default usuarioRouter;