const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    code: String,
    description: String,
    rate: Number,
    maxHours: Number
})

module.exports = mongoose.model('job', jobSchema);