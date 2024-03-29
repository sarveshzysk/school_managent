const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/:classId', studentController.createStudent);

router.get('/:classId/:studentId', studentController.getStudentById);
// router.get('/:studentId', studentController.getStudentById);//only by stid
router.put('/:classId/:studentId', studentController.updateStudent);
// router.put('/:studentId', studentController.updateStudent); // only by stid
router.delete('/:classId/:studentId', studentController.deleteStudent);
// router.delete('/:studentId', studentController.deleteStudent);//only by stid



module.exports = router;