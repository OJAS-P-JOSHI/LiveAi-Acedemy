const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    discount_code: { type: String, required: true, unique: true },
    discount_percentage: { type: Number, required: true },
    valid_from: { type: Date, required: true },
    valid_until: { type: Date, required: true }
});

module.exports = mongoose.model('Discount', discountSchema);
