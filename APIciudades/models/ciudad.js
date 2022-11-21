const mongoose = require('mongoose')

const ciudadSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    habitantes: {
        type: Number,
        required: true
    },
    extension: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Ciudad', ciudadSchema)