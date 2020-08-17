const express = require('express');
const router = express.Router();
const studentContoller = require('../controllers/student')

router.post('/', studentContoller.create);
router.get('/', studentContoller.getAll);
router.get('/:id', studentContoller.getById);
router.get('/edit/:id', studentContoller.editForm);
router.post('/:id', studentContoller.updateById);
router.get('/delete/:id', studentContoller.deleteById);

module.exports = router;