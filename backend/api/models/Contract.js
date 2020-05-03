const mongoose = require('mongoose')

const contractSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    encryptedFile: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Contract', contractSchema)
