const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    review_text: { type: String, required: true },
    rating: { type: Number, required: true }  // from 1 to 5
});

module.exports = mongoose.model('Review', reviewSchema);
