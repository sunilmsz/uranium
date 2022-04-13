const mongoose = require('mongoose');

const bookModel = mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        author_id:{
                type:Number,
                required:true
        },
        price:Number,
        ratings:Number

},{timestamps :true})
module.exports = mongoose.model("Book",bookModel);