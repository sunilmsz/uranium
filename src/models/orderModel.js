 const mongoose = require('mongoose')
 const objectId = mongoose.Schema.Types.ObjectId;

 const orderSchema = mongoose.Schema({
        userId: {
            type: objectId,
            ref: 'User'
        },
        productId: {
            type: objectId,
            ref: 'Product'
        },
        amount:Number,
        isFreeAppUser:Boolean,
        date: String
 },{timestamps :true})


 module.exports = new mongoose.model("Order",orderSchema)