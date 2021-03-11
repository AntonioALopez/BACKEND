const jurado2Ctrl = {}

const Jurado2 = require('../models/jurados2')

//CRUD
//Create Read Update Delete    
jurado2Ctrl.getJurados2 =  async (req, res) => {
    const jurado2 =  await Jurado2.find();
    res.json(jurado2);
};

jurado2Ctrl.createJurado2 = async (req, res) => {
    const newJurado2 = new Jurado2(req.body);

    await newJurado2.save();

    res.send({message: 'jurado2 creado'});
};

jurado2Ctrl.getJurado2 = async (req, res) => {
    const jurado2 = await Jurado2.findById(req.params.id);
    res.send(jurado2);
};

jurado2Ctrl.updateJurado2 = async (req, res) => {
    await Jurado2.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'jurado2 updated'});
};

jurado2Ctrl.deleteJurado2 = async (req, res) => {
    const jurado2 =  await Jurado2.findByIdAndDelete(req.params.id);
    res.json({status: 'jurado2 borrado'});
};



module.exports = jurado2Ctrl;