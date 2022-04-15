const mongoose = require('mongoose')

const authorModel = mongoose.Schema({
    authorName:String,
    age:Number,
    address:String,
    rating:Number
},{timestamps:true})

module.exports = mongoose.model("newAuthor",authorModel)