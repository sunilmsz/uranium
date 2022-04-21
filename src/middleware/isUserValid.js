const userModel = require('../models/userModel')
const isUserValid = async (req,res,next)=>{
        const userId= req.params.userId;
        if(!userId) return res.send({status:false,msg: " please provide a user id"})
     const isValid = await userModel.findById({_id:userId})
     if(!isValid) return res.send({status:false,msg: " please provide a  valid user id"})

     next();
}

module.exports = isUserValid;