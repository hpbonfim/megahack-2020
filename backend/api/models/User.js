const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    }, //RFC 2822
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema)