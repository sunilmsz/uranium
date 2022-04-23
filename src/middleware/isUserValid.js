const userModel = require('../models/userModel')
const isUserValid = async (req,res,next)=>{
        try {
          const userId= req.params.userId;
        if(!userId) return res.status(400).send({status:false,msg: " please provide a user id"})
         const isValid = await userModel.findById({_id:userId})
          if(!isValid) return res.status(400).send({status:false,msg: " please provide a  valid user id"})
         next();
        }
        catch (error) {
                return res.status(500).send({msg:"internal server error"})
        }
        
}

module.exports = isUserValid;