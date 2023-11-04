'use strict'; // Habilita el modo estricto para tener un código más seguro.

// Importa la biblioteca Express para manejar rutas y solicitudes
var express = require('express');

// Importa el controlador de doctor desde un archivo llamado 'doctor.js' en la carpeta '../controller'
var DoctorController = require('../controller/doctor');

// Crea un objeto de enrutador Express
var router = express.Router();

// Define una ruta GET '/home' que usa el método 'home' del controlador DoctorController
router.get('/home', DoctorController.home);

// Define una ruta GET '/test' que usa el método 'test' del controlador DoctorController
router.get('/test', DoctorController.test);

router.post('/registrar-doctor',DoctorController.saveDoctor);


// Define una ruta GET '/doctor/:id' que utiliza el método 'buscarDoctorById' del controlador DoctorController
router.get('/doctor/:id', DoctorController.buscarDoctorById);


// Define una ruta GET '/doctores' que utiliza el método 'obtenerTodosLosDoctores' del controlador DoctorController
router.get('/doctores', DoctorController.obtenerTodosLosDoctores);


// Exporta el objeto de enrutador para ser utilizado en otras partes de la aplicación
module.exports = router;
