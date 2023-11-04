// doctor.js

const mongoose = require('mongoose');

// Define el esquema para los doctores
const doctorSchema = new mongoose.Schema({
  _id: Number,
  nombre: String,
  especialidad: String,
  email: String,
  contrasena:String,
  telefono: String,
  direccion: String,
  ciudad: String,
  pais: String,
});

// Crea el modelo Doctor basado en el esquema
const doctor = mongoose.model('doctor', doctorSchema);

module.exports = doctor;
