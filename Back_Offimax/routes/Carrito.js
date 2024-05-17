const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
 
//conectar con la base de datos
const {connection} = require("../config.db");

//Utilizando el método Get 
const getCarrito = (request, response) => {
    connection.query("SELECT * FROM tb_carrito", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};
 
//ruta de consumo
app.route("/Consultar/carrito")
.get(getCarrito);


//Agregar Carrito
const postCarrito = (request, response) => {
    const {id_carrito, id_usuario, fecha_compra, fecha_pago, estado} = request.body;
    connection.query("INSERT INTO tb_carrito(id_carrito, id_usuario, fecha_compra, fecha_pago, estado) VALUES (?, ?, ?, ?, ?)",
    [id_carrito, id_usuario, fecha_compra, fecha_pago, estado],
    (error, results) => {
        if (error) throw error;
        response.status(201).json({"Producto creado correctamente": results.affectedRows});
    });
};
 
//ruta
app.route("/Insertar/carrito")
.post(postCarrito);


// Actualizar producto
const putCarrito = (request, response) => {
    const {id_carrito, id_usuario, fecha_compra, fecha_pago, estado} = request.body;
    connection.query("UPDATE tb_carrito set id_usuario=?, fecha_compra=?, fecha_pago=?, estado= ?  where id_carrito=?",
    [id_usuario, fecha_compra, fecha_pago, estado, id_carrito],
    (error, results) => {
       if(error)
          throw error;
       response.status(201).json({"Carrito actualizado correctamente": results.affectedRows});
      });
    };
   
    //ruta
    app.route("/Actualizar/carrito")
    .put(putCarrito);

    //Eliminar Carrito
const deleteCarrito= (request, response) => {
    const id_carrito = request.params.id_carrito;
    connection.query("delete from tb_carrito where id_carrito = ?",
    [id_carrito],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({"Carrito eliminado":results.affectedRows});
    });
};
 
//ruta
app.route("/Delete/carrito/:id_carrito")
.delete(deleteCarrito);

module.exports = app;