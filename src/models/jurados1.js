const { Schema, model } = require('mongoose');

const jurado1Schema = new Schema(
    {
    cedulaJurado1: {type: String, required: true},
    nombreApellidoJurado1: {type: String, required: true},
    telefonoJurado1: {type: String, required: true},
    direccionJurado1: {type: String, required: true},
    correoJurado1: {type: String, required: true},
   }, 
   {
    timestamps: true, 
    versionKey: false,
   }
);

module.exports = model('Jurado1', jurado1Schema);