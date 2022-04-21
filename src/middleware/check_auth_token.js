const jwt = require('jsonwebtoken')

const auth_token = (req,res,next)=> {

    const token =req.headers['X-Auth-Token'] ?req.headers['X-Auth-Token']:req.headers['x-auth-token'] 
    if(!token)
    return res.send("the request is missing a mandatory header")

    try {
        const isValid = jwt.verify(token,"my")
    }
    catch (error){
        console.log(error)
        return res.send({status:false , msg: "token is invalid"})
    }
  
    req.auth_token= token;
    next()
}

module.exports = auth_token;