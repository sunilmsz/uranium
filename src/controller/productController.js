const  productModel  = require("../models/productModel")

const createProduct = async (req,res) => {



    if(!req.body.name || !req.body.price)
    return res.send("Name and Price are required fields")

    const savedData = await productModel.create(req.body)
    return res.send({msg : savedData})
}

const getOrders = async (req,res) => {
    const getData =  await productModel.find().select({name:1,price:1})
   return  res.send({msg : getData})
}


module.exports.create = createProduct;
module.exports.get= getOrders;