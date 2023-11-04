var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PacienteSchema = new Schema({
  nombre: String, // Campo para el nombre del paciente
  apellido:String,
  edad: Number, // Campo para la edad del paciente
  genero: String, // Campo para el género del paciente
  direccion: String, // Campo para la dirección del paciente
  ciudad: String, // Campo para la ciudad del paciente
  pais: String, // Campo para el país del paciente
 historial_id:String
});
module.exports = mongoose.model('Paciente', PacienteSchema);
