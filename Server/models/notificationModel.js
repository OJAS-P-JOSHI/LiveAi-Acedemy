const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    seen_status: { type: Boolean, default: false }
});

module.exports = mongoose.model('Notification', notificationSchema);
