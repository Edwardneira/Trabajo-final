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
export const getUsuario = async (req, res) => {
    //manejo de errores con try y cath
    try {
        let usuarios = await usuarioMondel.find();
        return res.send(usuarios);
    } catch (error) {
        return res.json({ error: "error al mostrar los datos" + error });
    }
}
//LOGICA PARA CREAR USUARIOS
export const postUsuario = async (req, res) => {
    //manejo de errores con try y catch
    try {
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioMondel.create(datosUsuario);
        return res.json(nuevoUsuario);
    } catch (error) {
        return res.json({ error: "error al crear el usuario", message: error.message});
    }
}
//LOGICA PARA MODIFICAR USUARIOS
export const putUsuario = async (req, res) => {
    try{
        let datosModificar = req.body;
        let idModificar = req.params._id;
        await usuarioMondel.findByIdAndUpdate(idModificar,datosModificar);
        return res.json({message: "usuario actualizado correctamente"});
    }catch (error) {
        return res.json({ error: "error al modificar el usuario", message: error.message});
    }
}
//LOGICA PARA ELIMINAR USUARIOS
export const deleteUsuario = async (req, res) => {
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioMondel.findByIdAndDelete(idEliminar);
        if(usuarioEliminado){
            return res.json({message: "Usuario eliminado correctamente"});
        } else{
            return res.json({message: "Ups! no se pudo eliminar el usuario"});
        }
    }catch (error) {
        return res.json({ error: "error al eliminar el usuario", message: error.message});
    }
}