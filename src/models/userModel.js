const mongoose = require('mongoose')


const userSchema = mongoose.Schema({

    name:String,
    balance:{
        type:Number,
        default:100
    },
    gender:{
        type:String,
        enum:['male','female','other']
    },
    address:String,
    age:Number,
    isFreeAppUser:{
        type:Boolean,
        default:false
    }


},{timestamps:true})


module.exports = new mongoose.model('User',userSchema)