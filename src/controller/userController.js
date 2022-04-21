const userModel = require('../models/userModel')
const productModel = require("../models/productModel")



const createUser = async (req,res)=> {

    if(!req.body.name)
    return res.send("name is a required field")

    if(!(req.body.gender== "male" || req.body.gender== "female"|| req.body.gender=="other" ))
    return res.send("gender is a required field")

        req.body.isFreeAppUser= req.isFreeAppUser;
      const savedData = await userModel.create(req.body)
      return res.send({msg:savedData})
}




const getAllUsers = async (req,res) => {
    const getData = await userModel.find().select({name:1,balance:1,isFreeAppUser:1})
   return res.send({msg:getData})
}


module.exports.create = createUser;
module.exports.get=getAllUsers;