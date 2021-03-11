const { Router } = require('express')
const router = Router()

const tdgCtrl = require('../controllers/tdg.controller.js')

router.get('/', tdgCtrl.getTrabajos);

router.post('/', tdgCtrl.createTrabajo);

router.get('/:id', tdgCtrl.getTrabajo);

router.put('/:id', tdgCtrl.updateTrabajo);

router.delete('/:id', tdgCtrl.deleteTrabajo);

module.exports = router;