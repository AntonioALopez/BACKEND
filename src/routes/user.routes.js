const { Router } = require('express')
const router = Router()

const userCtrl = require('../controllers/user.controller.js')


router.post('/signup', userCtrl.createUser);

router.post('/signin', userCtrl.validatedUser);

module.exports = router;

/* function verifyToken(req, res, next){
    if (!req.headers.authorization) {
        return res.status(401).send('Autorizacion Negada');
    }

    const token = req.headers.authorization.split(' ')[1]
    if (token == 'null') {
        return res.status(401).send('Autorizacion Negada')
    }

    const payload = jwt.verify(token, 'secretKey')
    req.userId= payload._id;
    next();

}*/