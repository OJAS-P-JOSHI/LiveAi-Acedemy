const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    payment_status: { type: String, enum: ['successful', 'pending', 'failed'], required: true },
    date_of_purchase: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
