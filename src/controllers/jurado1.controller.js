const jurado1Ctrl = {}

const Jurado1 = require('../models/jurados1')

//CRUD
//Create Read Update Delete    
jurado1Ctrl.getJurados1 =  async (req, res) => {
    const jurado1 =  await Jurado1.find();
    res.json(jurado1);
};

jurado1Ctrl.createJurado1 = async (req, res) => {
    const newJurado1 = new Jurado1(req.body);

    await newJurado1.save();

    res.send({message: 'jurado1 creado'});
};

jurado1Ctrl.getJurado1 = async (req, res) => {
    const jurado1 = await Jurado1.findById(req.params.id);
    res.send(jurado1);
};

jurado1Ctrl.updateJurado1 = async (req, res) => {
    await Jurado1.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'jurado1 updated'});
};

jurado1Ctrl.deleteJurado1 = async (req, res) => {
    const jurado1 =  await Jurado1.findByIdAndDelete(req.params.id);
    res.json({status: 'jurado1 borrado'});
};



module.exports = jurado1Ctrl;