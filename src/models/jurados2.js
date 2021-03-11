const { Schema, model } = require('mongoose');

const jurado2Schema = new Schema(
    {
    cedulaJurado2: {type: String, required: true},
    nombreApellidoJurado2: {type: String, required: true},
    telefonoJurado2: {type: String, required: true},
    direccionJurado2: {type: String, required: true},
    correoJurado2: {type: String, required: true},
   }, 
   {
    timestamps: true, 
    versionKey: false,
   }
);

module.exports = model('Jurado2', jurado2Schema);