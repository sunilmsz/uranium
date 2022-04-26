const mongoose = require('mongoose')


const authorSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    }, lname: {
        type: String,
        required: true
    }, title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }


}, { timestamps: true })


const  authorModel = new mongoose.model("Author",authorSchema)

module.exports = authorModel;