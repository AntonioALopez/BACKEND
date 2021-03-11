const { Schema, model } = require('mongoose');

const trabajoSchema = new Schema(
    {
    nroActa: {type: String, required: true},
    decanato: {type: String, required: true},
    escuela: {type: String, required: true},
    lapsoAcademico: {type: String, required: true},
    carrera: {type: String, required: true},
    fechaPresentacion: {type: String, required: true},
    horaPresentacion: {type: String, required: true},
    nombreApellidoEstudiante : {type: String, required: true},
    cedulaEstudiante: {type: String, required: true},
    tituloTDG: {type: String, required: true},
   }, 
   {
    timestamps: true, 
    versionKey: false,
   }
);

module.exports = model('Trabajo', trabajoSchema);