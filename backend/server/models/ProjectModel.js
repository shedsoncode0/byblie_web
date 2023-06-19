const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
         required: true,
        default: "No name",
    },
    members: {
        type: Number,
        default: 1
    },
    startDate: {
        type: String,
    },
    deadLine: {
        type: String,
         required: true,
    },
    pay: {
        type: String,
         required: true,
    },
    important: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    
},{timestamps: true}); 

module.exports = mongoose.model('Project', ProjectSchema);