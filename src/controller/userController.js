const userModel = require('../models/userModel')
const jwt  = require ('jsonwebtoken')


const createUser = async (req,res)=> {

    if(!req.body.firstName || !req.body.emailId || !req.body.mobile || !req.body.password)
    return res.send("name,emailId,password,mobile number are a required field")

    if(!(req.body.gender== "male" || req.body.gender== "female"|| req.body.gender=="other" ))
    return res.send("gender is a required field")

       
      const savedData = await userModel.create(req.body)
      return res.send({msg:savedData})
}
const logIn = async (req,res)=> {

    if(!req.body.emailId || !req.body.password)
    return res.send({status : false, msg : "emailId and password are the required fields"})

    const isValid = await userModel.findOne({emailId:req.body.emailId,password:req.body.password})
    if(!isValid)
    return res.send({status:false,msg:"enter a valid emailId or password combination"})

        const token = jwt.sign({id: isValid._id}, "my")
        res.setHeader("X-Auth-Token",token)
      return res.send({status:true,data:token})

}




const getUser = async (req,res) => {
    const getData = await userModel.findOne({_id:req.params.userId,isDeleted:false})
   return res.send({msg:getData})
}

const update = async (req,res)=> {
    const userId = req.params.userId;
    const updateData = await userModel.findOneAndUpdate({_id:userId,isDeleted:false},{$set: req.body},{new:true})
    res.send({status:true,updateData})

}

const deleteUser = async (req,res)=> {
    const userId = req.params.userId;
    const deletedUser = await userModel.findOneAndUpdate({_id:userId},{$set: {isDeleted:true}})
    res.send({status:true,msg:"user deleted"})
}


const getDeletedUsers = async (req,res) => {
    const getData = await userModel.find({isDeleted:true})
   return res.send({msg:getData})
}

module.exports.create = createUser;
module.exports.get=getUser;
module.exports.logIn = logIn;
module.exports.update = update;
module.exports.delete = deleteUser;
module.exports.getDeletedUsers=getDeletedUsers;