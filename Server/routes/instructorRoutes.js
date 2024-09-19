const express = require('express');
const { getInstructors, getInstructorById, addInstructor, updateInstructor, deleteInstructor } = require('../controllers/instructorController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /api/instructors:
 *   get:
 *     summary: Get all instructors
 *     description: Retrieve a list of instructors
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of instructors
 */
router.get('/', getInstructors);

/**
 * @swagger
 * /api/instructors/{id}:
 *   get:
 *     summary: Get instructor by ID
 *     description: Retrieve an instructor by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Instructor ID
 *     responses:
 *       200:
 *         description: An instructor object
 */
router.get('/:id', protect, getInstructorById);

/**
 * @swagger
 * /api/instructors:
 *   post:
 *     summary: Add a new instructor
 *     description: Add a new instructor to the database
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Instructor'
 *     responses:
 *       201:
 *         description: Instructor added successfully
 */
router.post('/', protect, addInstructor);

/**
 * @swagger
 * /api/instructors/{id}:
 *   put:
 *     summary: Update instructor
 *     description: Update an instructor's information
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Instructor ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Instructor'
 *     responses:
 *       200:
 *         description: Instructor updated successfully
 */
router.put('/:id', protect, updateInstructor);

/**
 * @swagger
 * /api/instructors/{id}:
 *   delete:
 *     summary: Delete instructor
 *     description: Delete an instructor by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Instructor ID
 *     responses:
 *       200:
 *         description: Instructor deleted successfully
 */
router.delete('/:id', protect, deleteInstructor);

module.exports = router;
