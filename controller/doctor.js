var Doctor = require('../models/doctor');
//Aca se definen los metodos para guardar pedir actualizar etc.

// Definición de un objeto llamado "controller" 
var controller = {
    // Método "home" que toma dos parámetros, req (solicitud) y res (respuesta)
    home: function(req, res) {
      // En este contexto, no se está haciendo nada con la solicitud "req"
      // Pero se define una propiedad "message" con el valor 'Soy la home' en el objeto, lo cual no es correcto
      message: 'Soy la home'
      // El método "home" no tiene una instrucción "return" explícita, por lo que la respuesta no se envía de vuelta al cliente.
    },
  
    // Método "test" que toma dos parámetros, req (solicitud) y res (respuesta)
    test: function(req, res) {
      // Se envía una respuesta con un código de estado 200 (OK) y un objeto JSON como respuesta
      return res.status(200).sent({
        message: 'Soy un test'
      });
    },

// Definición de la función 'saveDoctor' para guardar un documento de doctor en la base de datos
saveDoctor: function(req, res) {
  // Crea una nueva instancia de un documento de doctor
  var doctor = new Doctor();

  // Obtiene los datos del cuerpo de la solicitud (parámetros)
  var params = req.body;

  // Asigna los datos del parámetro a las propiedades del documento de doctor
  doctor.name = params.name;
  doctor.especialidad = params.especialidad;
  doctor.email = params.email;
  doctor.contrasena = params.contrasena;
  doctor.telefono = params.telefono;
  doctor.direccion = params.direccion;
  doctor.ciudad = params.ciudad;
  doctor.pais = params.pais;

  // Intenta guardar el documento en la base de datos
  doctor.save()
    .then(doctorStored => {
      // Si el documento se guarda con éxito
      if (!doctorStored) {
        // Si no se pudo guardar el documento, responde con un estado 400 (Bad Request)
        return res.status(400).send({ message: 'No se ha podido guardar el documento' });
      }

      // Si el documento se guarda con éxito, responde con un estado 200 (OK) y el documento guardado
      return res.status(200).send({
        doctor: doctorStored,
        message: 'Método save funcionando'
      });
    })
    .catch(err => {
      // Si se produce un error al guardar el documento, responde con un estado 500 (Internal Server Error) y muestra el mensaje de error
      return res.status(500).send({ message: 'Error al guardar el documento', error: err });
    });
},



// Método para buscar un doctor por su ID y mostrar la información en el log
buscarDoctorById: function(req, res) {
  // Obtiene el ID del doctor de los parámetros de la URL
  var doctorId = req.params.id;

  // Utiliza el método 'findById' de Mongoose para buscar al doctor por su ID
  Doctor.findById(doctorId)
    .then(doctor => {
      if (!doctor) {
        // Si no se encuentra al doctor con el ID proporcionado, responde con un estado 404 (Not Found)
        return res.status(404).send({ message: 'Doctor no encontrado' });
      }

      // Si se encuentra el doctor, muestra la información del doctor en el log y responde con un estado 200 (OK)
      console.log('Información del doctor encontrado:', doctor);
      return res.status(200).send({ doctor: doctor });
    })
    .catch(err => {
      // Si se produce un error al buscar el doctor, responde con un estado 500 (Internal Server Error) y muestra el mensaje de error en el log
      console.error('Error al buscar el doctor:', err);
      return res.status(500).send({ message: 'Error al buscar el doctor' });
    });
},


// Método para obtener todos los doctores y responder con la lista
obtenerTodosLosDoctores: function(req, res) {
  // Utiliza el método 'find' de Mongoose para buscar todos los doctores
  Doctor.find()
    .then(doctores => {
      // Responde con un estado 200 (OK), un mensaje y la lista de doctores
      return res.status(200).send({ message: 'Doctores registrados:', doctores: doctores });
    })
    .catch(err => {
      // Si se produce un error al buscar los doctores, responde con un estado 500 (Internal Server Error) y muestra el mensaje de error en el log
      console.error('Error al obtener los doctores:', err);
      return res.status(500).send({ message: 'Error al obtener los doctores' });
    });
}






 
    


  };
  
  // Se exporta el objeto "controller" para que pueda ser utilizado en otros archivos
  module.exports = controller;
  