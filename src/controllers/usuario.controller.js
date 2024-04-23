//Importar ependencias (lo que se necesita apra el funcionamiento del codigo)
import usuarioMondel from "../models/usuario.model.js";

/*
PETICIONES
GET: muestra los usuarios
POST: crear usuarios
PUT: modifica los usuarios
DELETE: elimina los usuarios
*/
//Prueba incial
//LOGICA PARA MOSTRAR USUARIOS
export const getUsuario = async(req, res) => {
    return res.send("Funciona la petición GET");
}
//LOGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {
    return res.send("Funciona la petición POST");
}
//LOGICA PARA MODIFICAR USUARIOS
export const putUsuario = async(req, res) => {
    return res.send("Funciona la petición PUT");
}
//LOGICA PARA ELIMINAR USUARIOS
export const deleteUsuario = async(req, res) => {
    return res.send("Funciona la petición DELETE");
}