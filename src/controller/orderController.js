const orderModel = require("../models/orderModel")
const userModel = require('../models/userModel')
const productModel = require("../models/productModel")

const getCurrentDate = () => {
    const date = new Date()
    return date.getDate()+"/" + (date.getMonth()+1)+ "/"+ date.getFullYear()}

  const createOrder = async (req,res)=>              
   {
        if(!req.body.userId || !req.body.productId)
        return res.send("UserId and ProductId are required Fields")



        const isProductValid = await productModel.findById({_id:req.body.productId})
        const isUserValid = await userModel.findById({_id:req.body.userId})
        if (!isUserValid || !isProductValid) 
        return res.send("entered UserId or ProductId or both are not valid")
// if isFreeAppUser is undefined i'm considering it to false
        if(req.isFreeAppUser=="true")
        {
            const order = {
                userId :req.body.userId,
                productId:req.body.productId,
                amount:0,
                isFreeAppUser:true,
                date: getCurrentDate()
            }

            const savedData = await orderModel.create(order)
            return res.send({msg : savedData})
        }
       else {
          const  amount = isProductValid.price;
          let  balance = isUserValid.balance;
            if(balance<amount)
            return res.send("Insufficient Balance")

            balance = balance-amount;
            const updateBalance = await userModel.updateOne({_id:isUserValid["_id"]},{$set:{balance:balance}})
            order = {
                userId :req.body.userId,
                productId:req.body.productId,
                amount:amount,
                isFreeAppUser:false,
                date: getCurrentDate()
            }
            const savedData = await orderModel.create(order)
            return res.send({msg : savedData})
        }


    }


    const getAllOrders = async (req,res) => {
        const getData = await orderModel.find()
       return res.send({msg:getData})
    }
    
    
    module.exports.create = createOrder;
    module.exports.get=getAllOrders;

