'use strict'; // Habilita el modo estricto para tener un código más seguro.

// Importa la biblioteca mongoose
var mongoose = require('mongoose');

// Crea un nuevo esquema de mongoose llamado "DoctorSchema"
var Schema = mongoose.Schema;
var DoctorSchema = new Schema({
  nombre: String, // Campo para el nombre del doctor
  especialidad: String, // Campo para la especialidad del doctor
  email: String, // Campo para la dirección de correo electrónico del doctor
  contrasena: String, // Campo para la contraseña del doctor
  telefono: String, // Campo para el número de teléfono del doctor
  direccion: String, // Campo para la dirección del doctor
  ciudad: String, // Campo para la ciudad del doctor
  pais: String // Campo para el país del doctor
});

// Exporta el modelo mongoose 'Doctor' que se basa en el esquema 'DoctorSchema'
module.exports = mongoose.model('Doctor', DoctorSchema);
