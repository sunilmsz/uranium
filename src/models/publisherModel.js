const mongoose = require('mongoose')

const publisherModel = mongoose.Schema({
    name:String,
   headQuarter:String
},{timestamps:true})

module.exports = mongoose.model("newPublisher",publisherModel)