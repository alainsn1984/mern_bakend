const express = require("express");
require("dotenv").config(); // USO DE LAS VARIABLES DE ENTORNO
const cors = require("cors");
const { dbConnection } = require("./database/config");

//Crear servidor de Epres
const app = express();

//Cors
app.use(cors());

//Database
dbConnection();

//Directorio Publico
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//Escuhar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
