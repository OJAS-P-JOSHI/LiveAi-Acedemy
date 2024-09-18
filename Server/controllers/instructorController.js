const Instructor = require('../models/instructorModel');
const asyncHandler = require('express-async-handler');

const getInstructors = asyncHandler(async (req, res) => {
  const instructors = await Instructor.find();
  res.json(instructors);
});

const getInstructorById = asyncHandler(async (req, res) => {
  const instructor = await Instructor.findById(req.params.id);
  if (instructor) {
    res.json(instructor);
  } else {
    res.status(404).json({ message: 'Instructor not found' });
  }
});

const addInstructor = asyncHandler(async (req, res) => {
  const { instructorName, instructorDomain, instructorBio } = req.body;

  const instructor = new Instructor({
    instructorName,
    instructorDomain,
    instructorBio,
  });

  await instructor.save();
  res.status(201).json(instructor);
});

const updateInstructor = asyncHandler(async (req, res) => {
  const instructor = await Instructor.findById(req.params.id);
  if (instructor) {
    instructor.instructorName = req.body.instructorName || instructor.instructorName;
    instructor.instructorDomain = req.body.instructorDomain || instructor.instructorDomain;
    await instructor.save();
    res.json(instructor);
  } else {
    res.status(404).json({ message: 'Instructor not found' });
  }
});

const deleteInstructor = asyncHandler(async (req, res) => {
  const instructor = await Instructor.findById(req.params.id);
  if (instructor) {
    await instructor.remove();
    res.json({ message: 'Instructor removed' });
  } else {
    res.status(404).json({ message: 'Instructor not found' });
  }
});

module.exports = { getInstructors, getInstructorById, addInstructor, updateInstructor, deleteInstructor };
