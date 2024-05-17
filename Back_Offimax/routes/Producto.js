const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conectar con la base de datos
const { connection } = require("../config.db");

//Utilizando el método Get
const getProducto = (request, response) => {
    connection.query("SELECT * FROM tb_producto",
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results);
        });
};

//ruta de consumo
app.route("/Consultar/Producto")
    .get(getProducto);

//Utilizando el método post
const postProducto = (request, response) => {
    const { id_producto, id_categoria, descripcion_producto, precio, cantidad, estado, imagen } = request.body;
    connection.query(" INSERT INTO tb_producto (id_producto, id_categoria,  descripcion_producto, precio, cantidad, estado, imagen) values (?, ?, ?, ? , ?, ?, ?)",
        [id_producto, id_categoria, descripcion_producto, precio, cantidad, estado, imagen],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({ "Producto creado correctamente": results.affectedRows });
        });
};
app.route("/Insertar/Producto")
    .post(postProducto);

/* metodo put */
const putProducto = (request, response) => {
    const { id_producto, id_categoria, descripcion_producto, precio, cantidad, estado, imagen } = request.body;
    connection.query("UPDATE tb_producto set id_categoria =?, descripcion_producto =? , precio =?, cantidad =?, estado =?, imagen =?  where id_producto = ?",
        [id_categoria, descripcion_producto, precio, cantidad, estado, imagen, id_producto],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({"Producto actualizado correctamente": results.affectedRows});
        });
};

app.route("/Actualizar/Producto")
    .put(putProducto);


/* Metodo delete */

const deleteProducto = (request, response) => {
    const id_producto = request.params.id_producto;
    connection.query("delete from tb_producto where id_producto= ?",
        [id_producto],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({"Producto eliminado":results.affectedRows});
        });
};
app.route("/Delete/Producto/:id_producto")
    .delete(deleteProducto);

module.exports = app;