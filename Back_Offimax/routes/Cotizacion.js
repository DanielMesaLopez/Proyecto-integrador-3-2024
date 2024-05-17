const express = require("express");
const app = express();
 
const dotenv = require("dotenv");
dotenv.config();
 
//conectar con la base de datos
const {connection} = require("../config.db");

const getCotizacion = (request, response) => {
    connection.query("SELECT * FROM tb_cotizacion",
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results);
        });
};
//ruta de consumo
app.route("/Consultar/Cotizacion")
.get(getCotizacion);


//Utilizando el método post
const postCotizacion = (request, response) => {
    const { id_cotizacion, fecha_cotizacion, descuento, tipo_descuento, Valor_total, estado} = request.body;
    connection.query("INSERT INTO tb_cotizacion (id_cotizacion, fecha_cotizacion, descuento, tipo_descuento, Valor_total, estado) values (?, ?, ?, ?, ?, ?)",
    [id_cotizacion, fecha_cotizacion, descuento, tipo_descuento, Valor_total, estado],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({"Cotización actualizado correctamente": results.affectedRows});
    });
};
app.route("/Insertar/Cotizacion")
.post(postCotizacion);

/* metodo put */

const putCotizacion = (request, response) => {
    const {id_cotizacion, fecha_cotizacion, descuento, tipo_descuento, Valor_total, estado}= request.body;
    connection.query ("UPDATE tb_cotizacion set fecha_cotizacion = ?, descuento = ?, tipo_descuento =?, Valor_total =?, estado = ?  where id_cotizacion = ?",
    [fecha_cotizacion, descuento, tipo_descuento, Valor_total,  estado, id_cotizacion],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({"Cotizacion actualizado correctamente": results.affectedRows});
    }) ;
}; 

app.route("/Actualizar/Cotizacion")
.put(putCotizacion)

/* Metodo delete */

const deleteCotizacion = (request, response) => {
    const id_cotizacion = request.params.id_cotizacion;
    connection.query("delete from tb_cotizacion where id_cotizacion= ?",
        [id_cotizacion],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({"Cotización eliminada":results.affectedRows});
        });
};
app.route("/Delete/Cotizacion/:id_cotizacion")
.delete(deleteCotizacion); 

 
module.exports = app;