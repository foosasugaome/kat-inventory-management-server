const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20
    },
    email: {
        type: String,
        required: true
    },
    firstname  : String,
    lastname : String,
    password: {
        type: String,
        required: true
    },
    active : {
        type : Boolean,
        default: true
    },
    manager : {
        type: Boolean,
        default: false        
    }
}, {timestamps: true})

module.exports = mongoose.model('Users', userSchema)
