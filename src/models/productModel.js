const mongoose = require('mongoose')


const productSchema = mongoose.Schema({

    name:String,
    categor:String,
    price:{
        type:Number,
        required:true
    }


},{timestamps:true})

module.exports = new mongoose.model('Product',productSchema)