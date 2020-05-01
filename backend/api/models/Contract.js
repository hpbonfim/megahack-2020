const mongoose = require('mongoose')

const contractSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fileName: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Contract', contractSchema)