const { Router } = require('express')
const router = Router()

const tutorCtrl = require('../controllers/tutor.controller.js')

router.get('/', tutorCtrl.getTutores);

router.post('/', tutorCtrl.createTutor);

router.get('/:id', tutorCtrl.getTutor);

router.put('/:id', tutorCtrl.updateTutor);

router.delete('/:id', tutorCtrl.deleteTutor);

module.exports = router;