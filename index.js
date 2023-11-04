'use strict'; // Habilita el modo estricto para tener un código más seguro.

// Importa la biblioteca mongoose para interactuar con MongoDB
var mongoose = require('mongoose');

// Puerto en el que se ejecutará el servidor
var port = 3700;

// Importa la aplicación Express definida en el archivo 'app.js'
var app = require('./app');

// Configura las promesas de mongoose para utilizar el objeto global Promise
mongoose.Promise = global.Promise;

// Establece la conexión a la base de datos MongoDB ubicada en 'mongodb://127.0.0.1:27017/doctorpacientes'
mongoose.connect('mongodb://127.0.0.1:27017/doctorpacientes')
  .then(() => {
    console.log("Conexión a la base de datos establecida con éxito");

    // Crea un servidor Express y lo hace escuchar en el puerto definido
    app.listen(port, () => {
      console.log('Servidor corriendo correctamente en la URL: localhost');
    });

  })
  .catch(err => console.log(err));
