const tdgCtrl = {}

const Trabajo = require('../models/trabajos')

//CRUD
//Create Read Update Delete    
tdgCtrl.getTrabajos =  async (req, res) => {
    const trabajos =  await Trabajo.find();
    res.json(trabajos);
};

tdgCtrl.createTrabajo = async (req, res) => {
    const newTrabajo = new Trabajo(req.body);

    await newTrabajo.save();

    res.send({message: 'trabajo creado'});
};

tdgCtrl.getTrabajo = async (req, res) => {
    const trabajo = await Trabajo.findById(req.params.id);
    res.send(trabajo);
};

tdgCtrl.updateTrabajo = async (req, res) => {
    await Trabajo.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'trabajo updated'});
};

tdgCtrl.deleteTrabajo = async (req, res) => {
    const trabajo =  await Trabajo.findByIdAndDelete(req.params.id);
    res.json({status: 'trabajo borrado'});
};



module.exports = tdgCtrl;

