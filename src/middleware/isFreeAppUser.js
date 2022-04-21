

const isFreeAppUser = (req,res,next)=> {
    if(req.headers.isfreeappuser==undefined)
    return res.send("the request is missing a mandatory header")

    if(!(req.headers.isfreeappuser== "false" || req.headers.isfreeappuser == "true"))
    return res.send("Enter a valid value for mandatory header")
    
    req.isFreeAppUser= req.headers.isfreeappuser;
    next()
}

module.exports = isFreeAppUser;