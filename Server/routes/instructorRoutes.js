const express = require('express');
const { getInstructors, getInstructorById, addInstructor, updateInstructor, deleteInstructor } = require('../controllers/instructorController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getInstructors);
router.get('/:id', protect, getInstructorById);
router.post('/', protect, addInstructor);
router.put('/:id', protect, updateInstructor);
router.delete('/:id', protect, deleteInstructor);

module.exports = router;
