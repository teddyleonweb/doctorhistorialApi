const mongoose = require('mongoose');
const Doctor = require('./doctor'); // Importa el modelo de Doctor, ajusta la ruta según tu estructura de archivos
const mongoURI = 'mongodb://127.0.0.1:27017/doctorpacientes';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;


db.on('error', (error) => {
  console.error('Error de conexión a MongoDB:', error);
});

db.once('open', async () => {
  console.log('Conexión exitosa a MongoDB');

  try {
    // Consulta todos los doctores en la colección de doctores
    const doctores = await Doctor.find(); // Puedes ajustar la consulta según tus necesidades

    console.log('Doctores en la base de datos:');
    console.log(doctores,'vidaaa');
  } catch (error) {
    console.error('Error al consultar doctores:', error);
  }
});

// Otra información de conexión
console.log('Conexión a MongoDB en progreso...');

module.exports = db;
