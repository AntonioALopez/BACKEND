const tutorCtrl = {}

const Tutor = require('../models/tutores')

//CRUD
//Create Read Update Delete    
tutorCtrl.getTutores =  async (req, res) => {
    const tutores =  await Tutor.find();
    res.json(tutores);
};

tutorCtrl.createTutor = async (req, res) => {
    const newTutor = new Tutor(req.body);

    await newTutor.save();

    res.send({message: 'tutor creado'});
};

tutorCtrl.getTutor = async (req, res) => {
    const tutor = await Tutor.findById(req.params.id);
    res.send(tutor);
};

tutorCtrl.updateTutor = async (req, res) => {
    await Tutor.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'tutor updated'});
};

tutorCtrl.deleteTutor = async (req, res) => {
    const tutor =  await Tutor.findByIdAndDelete(req.params.id);
    res.json({status: 'tutor borrado'});
};



module.exports = tutorCtrl;