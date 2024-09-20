const mongoose = require('mongoose');
const User = require('../models/userModel');
const Instructor = require('../models/instructorModel');
const Course = require('../models/courseModel');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Instructor.deleteMany();
    await Course.deleteMany();

    // Create dummy users
    const user = new User({
      fullName: 'Ojas Joshi',
      email: 'ojas.joshi@example.com',
      password: 'password123',
      phoneNumber: '123-456-7890',
      address: '123 Main St',
      district: 'District 1',
    });

    await user.save();

    // Create dummy instructors
    const instructor = new Instructor({
      instructorName: 'Ojas Joshi',
      instructorDomain: 'Software Engineering',
      instructorBio: 'Experienced software engineer with a passion for teaching.',
    });

    await instructor.save();

    // Create dummy courses
    const course = new Course({
      courseName: 'Intro to Programming',
      courseDescription: 'A beginner-friendly course on programming basics.',
      courseAmount: 99.99,
      instructorId: instructor._id,
    });

    await course.save();

    console.log('Data Seeded Successfully');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();

