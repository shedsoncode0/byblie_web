const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "please enter your password"],
        default: "No number",
        unique: true
    },
    fullname: {
        type: String,
        required: [true, "please enter your fullname"],
    },
    password: {
        type: String,
        required: [true, "please add a password"],
        min: 6,
    },
},{timestamps: true}); 

module.exports = mongoose.model('User', UserSchema);