const mongoose = require('mongoose')


const developerSchema = mongoose.Schema({

    name:String,
    gender:{
        type:String,
        enum:['male','female']
    },
    percentage:Number,
    batch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Batch'
    }


})


module.exports = new mongoose.model('Developer',developerSchema)