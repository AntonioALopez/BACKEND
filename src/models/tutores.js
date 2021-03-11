const { Schema, model } = require('mongoose');

const tutorSchema = new Schema(
    {
    cedulaTutor: {type: String, required: true},
    nombreApellidoTutor: {type: String, required: true},
    telefonoTutor: {type: String, required: true},
    direccionTutor: {type: String, required: true},
    correoTutor: {type: String, required: true},
   }, 
   {
    timestamps: true, 
    versionKey: false,
   }
);

module.exports = model('Tutor', tutorSchema);