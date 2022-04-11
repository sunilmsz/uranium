const mongoose = require('mongoose');

const bookModel = mongoose.Schema(
    {
        bookName: {
            type:String,
            required:true
        },
        authorName:String,
        category:String,
        Year:Number

},{timestamps :true})
module.exports = mongoose.model("Book",bookModel);