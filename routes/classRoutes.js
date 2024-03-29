const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

router.post('/:schoolId', classController.createClass);

// router.get('/:classId', classController.getClassById);
router.get('/:schoolId/:classId', classController.getClassById);


// router.put('/:classId', classController.updateClass);
router.put('/:schoolId/:classId', classController.updateClass);

// router.delete('/:classId', classController.deleteClass);
router.delete('/:schoolId/:classId', classController.deleteClass);
module.exports = router;