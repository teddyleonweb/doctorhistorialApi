'use strict'; // Habilita el modo estricto para tener un código más seguro.

// Importa la biblioteca Express para crear una aplicación web
const express = require('express');

// Importa la biblioteca mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

// Crea una instancia de la aplicación Express
const app = express();

// Importa el módulo 'body-parser' para analizar datos en las solicitudes
var bodyParser = require('body-parser');

// Cargar archivos de rutas (el archivo doctor.js definirá rutas relacionadas con los doctores)
var doctor_routes = require('./rutes/doctor');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de CORS (cross-origin resource sharing) se omite en este código

// Rutas
app.use('/api',doctor_routes)

// Exporta la instancia de la aplicación Express
module.exports = app;
