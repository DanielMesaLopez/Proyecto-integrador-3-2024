const express = require("express");
const app = express();
 
const dotenv = require("dotenv");
dotenv.config();
 
//conectar con la base de datos
const {connection} = require("../config.db");
 
//Utilizando el método Get 
const getusuario = (request, response) => {
    connection.query("SELECT * FROM tb_usuario", (error, results) => {
      if (error) {
        response.status(500).json({ message: 'Error al obtener datos', error });
      } else if (!results || results.length === 0) {
        response.status(404).json({ message: 'Datos no encontrados' });
      } else {
        response.status(200).json(results);
      }
    });
  };

//ruta de consumo
app.route("/Consultar/Usuario")
.get(getusuario);


//Utilizando el método post o metodo para crear usuarios 
const postusuario = (request, response) => {
    const {id_usuario, id_ciudad, nombre_usuario, estado, direccion, correo_usuario, contrasena_usuario, telefono_usuario} = request.body;
    connection.query("INSERT INTO tb_usuario(id_usuario, id_ciudad, nombre_usuario, estado, direccion, correo_usuario, contrasena_usuario, telefono_usuario) VALUES (?, ?, ? , ?, ?, ?, ?, ?)",
    [id_usuario, id_ciudad, nombre_usuario, estado, direccion, correo_usuario, contrasena_usuario, telefono_usuario],
    (error, results) => {
        if(error) throw error;
        response.status(201).json({"Usuario creado correctamente": results.affectedRows});
    });
};
app.route("/Insertar/Usuario")
.post(postusuario);

/* metodo put para actualizar usuarios*/

const putusuario = (request, response) => {
    const {id_usuario, id_ciudad, nombre_usuario, estado, direccion, correo_usuario, contrasena_usuario, telefono_usuario} = request.body;
    connection.query ("UPDATE tb_usuario set id_ciudad =?, nombre_usuario =?, estado=?, direccion =?, correo_usuario =?, contrasena_usuario =?, telefono_usuario=?  where id_usuario= ?",
    [id_ciudad, nombre_usuario, estado, direccion, correo_usuario, contrasena_usuario, telefono_usuario, id_usuario],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({"Usuario actualizado correctamente": results.affectedRows});
    }) ;
}; 

app.route("/Actualizar/Usuario")
.put(putusuario);

/* Metodo delete */

    const deleteusuario = (request, response) => {
    const id_usuario = request.params.id_usuario;
    connection.query("DELETE from tb_usuario where id_usuario= ?",
    [id_usuario],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({"Usuario eliminado":results.affectedRows});
    });
};

app.route("/Delete/Usuario/:id_usuario")
.delete(deleteusuario); 

module.exports = app;