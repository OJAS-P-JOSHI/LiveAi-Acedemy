const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    college_name: { type: String },
    education: { type: String },
    phone_number: { type: String },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    district: { type: String },
    profile_image: { type: String },  // URL to the image
    date_of_birth: { type: Date },
    subscription_status: { type: String, enum: ['free', 'paid'], default: 'free' },
    registration_date: { type: Date, default: Date.now },
    user_role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' },
    last_login: { type: Date },
    progress: { type: Number, default: 0 }  // as a percentage
});

module.exports = mongoose.model('User', userSchema);
