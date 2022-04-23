const mongoose = require('mongoose')


const userSchema = mongoose.Schema({

    firstName:String,
    lastName:String,
    mobile :Number,
    emailId:{
        type:String,
        unique: true
    },
    password:String,
    gender:{
        type:String,
        enum:['male','female','other']
    },
    isDeleted: {
        type:Boolean,
        default:false
    },
    age:Number
},{timestamps:true})


module.exports = new mongoose.model('User',userSchema) //users