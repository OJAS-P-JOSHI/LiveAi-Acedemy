const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    instructor_name: { type: String, required: true },
    instructor_domain: { type: String },
    instructor_bio: { type: String },
    instructor_rating: { type: Number, default: 0 },
    instructor_qualifications: { type: String },
    contact_information: { type: String },
    instructor_social_media_links: { type: Array }
});

module.exports = mongoose.model('Instructor', instructorSchema);