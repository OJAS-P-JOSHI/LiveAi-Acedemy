const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course_image: { type: String },  // URL to the course image
    course_name: { type: String, required: true },
    course_duration: { type: String },
    course_description: { type: String },
    course_chapters: { type: Array },  // Array or nested structure of chapters
    course_schedule: { type: String },  // URL to schedule PDF
    course_amount: { type: Number },
    course_level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    course_prerequisites: { type: String },
    student_count: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },  // from 0 to 5
    instructor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
    course_category: { type: String },
    course_start_date: { type: Date },
    course_end_date: { type: Date }
});

module.exports = mongoose.model('Course', courseSchema);
