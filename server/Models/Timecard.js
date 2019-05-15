const mongoose = require('mongoose');

const timeCardSchema = new mongoose.Schema({
    code: String,
    contractor: String,
    totalHours: Number,
    totalAmount: Number,
    approved: Boolean
})

module.exports = mongoose.model('timeCard', timeCardSchema);