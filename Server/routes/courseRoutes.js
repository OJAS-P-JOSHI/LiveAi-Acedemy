const express = require('express');
const { getCourses, getCourseById, addCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getCourses);
router.get('/:id', protect, getCourseById);
router.post('/', protect, addCourse);
router.put('/:id', protect, updateCourse);
router.delete('/:id', protect, deleteCourse);

module.exports = router;
