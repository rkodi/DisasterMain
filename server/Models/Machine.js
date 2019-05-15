const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
    code: String,
    description: String,
    rent: Number,
    maxHours: Number
})

module.exports = mongoose.model('machine', machineSchema);