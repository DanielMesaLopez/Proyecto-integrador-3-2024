const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
 
//Analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
//Archivo de rutas definidas
app.use(require('./routes/Cotizacion'));
app.use(require('./routes/Producto'));
app.use(require('./routes/Usuario'));
app.use(require('./routes/Carrito'));
app.use(require('./routes/Rol'));

app.listen(process.env.PORT||3300,() => {
    console.log("Servidor ejecutandose en el puerto 3300");
});
 
module.exports = app;