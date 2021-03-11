const { Router } = require('express')
const router = Router()

const jurado2Ctrl = require('../controllers/jurado2.controller.js')

router.get('/', jurado2Ctrl.getJurados2);

router.post('/', jurado2Ctrl.createJurado2);

router.get('/:id', jurado2Ctrl.getJurado2);

router.put('/:id', jurado2Ctrl.updateJurado2);

router.delete('/:id', jurado2Ctrl.deleteJurado2);

module.exports = router;