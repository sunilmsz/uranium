const mongoose = require('mongoose');

const bookModel = mongoose.Schema(
    {
        bookName: {
            type:String,
            required:true
        },
        authorName:String,
        tags:[String],
        year:{
            type:Number,
            default:2021
        },
        price :{
            indian: Number,
            european:Number
        },
        totalPages:Number,
        stockAvailable:Boolean

},{timestamps :true})
module.exports = mongoose.model("Book",bookModel);