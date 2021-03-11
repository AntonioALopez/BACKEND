const userCtrl = {}

const User = require('../models/users')

//CRUD
//Create Read Update Delete    
const jwt = require('jsonwebtoken');


userCtrl.createUser =  async (req, res) => {
    const { usuario, password} = req.body;
    const newUser = new User({usuario, password});

    await newUser.save();

    

    const token = jwt.sign({_id: newUser._id}, 'secretKey');
    res.status(200).json({token});
};

userCtrl.validatedUser =  async (req, res) => {

    const { usuario, password } = req.body;
    const user = await User.findOne({usuario});
    if (!user) return res.status(401).send("El Usuario No Existe");
    if (user.password !== password) return res.status(401).send("Contrasena Incorrecta");

    const token = jwt.sign({_id: user._id}, 'secretKey');
    res.status(200).json({token});
};


module.exports = userCtrl;