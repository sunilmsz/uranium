const jwt = require('jsonwebtoken')

const auth_token = (req,res,next)=> {

    const token =req.headers['X-Auth-Token'] ?req.headers['X-Auth-Token']:req.headers['x-auth-token'] 
    if(!token)
    return res.status(400).send("the request is missing a mandatory header")
    let isValid;
    try {
      isValid  = jwt.verify(token,"my")
    }
    catch (error){
        console.log(error)
        return res.status(400).send({status:false , msg: "token is invalid"})
    }

    if(isValid.id !== req.params.userId)
        return res.status(401).send({status:false,msg: "you can't access other's data"})
    req.auth_token= token;
    next()
}

module.exports = auth_token;