const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: {
        type: String
    }
})
const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;