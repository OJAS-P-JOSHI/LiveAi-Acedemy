const Course = require('../models/courseModel');
const asyncHandler = require('express-async-handler');

const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

const addCourse = asyncHandler(async (req, res) => {
  const { courseName, courseDescription, courseAmount, instructorId } = req.body;

  const course = new Course({
    courseName,
    courseDescription,
    courseAmount,
    instructorId,
  });

  await course.save();
  res.status(201).json(course);
});

const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    course.courseName = req.body.courseName || course.courseName;
    course.courseDescription = req.body.courseDescription || course.courseDescription;
    course.courseAmount = req.body.courseAmount || course.courseAmount;
    await course.save();
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    await course.remove();
    res.json({ message: 'Course removed' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

module.exports = { getCourses, getCourseById, addCourse, updateCourse, deleteCourse };
