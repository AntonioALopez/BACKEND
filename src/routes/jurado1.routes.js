const { Router } = require('express')
const router = Router()

const jurado1Ctrl = require('../controllers/jurado1.controller.js')

router.get('/', jurado1Ctrl.getJurados1);

router.post('/', jurado1Ctrl.createJurado1);

router.get('/:id', jurado1Ctrl.getJurado1);

router.put('/:id', jurado1Ctrl.updateJurado1);

router.delete('/:id', jurado1Ctrl.deleteJurado1);

module.exports = router;