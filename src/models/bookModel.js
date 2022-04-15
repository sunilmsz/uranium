const mongoose = require('mongoose')

const objectId = mongoose.Schema.Types.ObjectId;
const bookModel = mongoose.Schema({

name :String,
author : {
    type : objectId,
    ref: "newAuthor"
},
price : Number,
ratings: Number,
publisher:{
    type:objectId,
    ref:"newPublisher"
}

},{timestamps:true})

module.exports = mongoose.model("newBook",bookModel);

