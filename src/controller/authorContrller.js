const authorModel =require("../model/authorModel")

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
const createAuthor = async (req,res) => {
    try{
    const data=req.body
   
    if(typeof(data.fname)!="string" ||typeof(data.lname)!="string"){
       return  res.status(400).send({status:false,msg:"Input is not string..."})
}
    if(!validateEmail(data.email)){
        return res.status(400).send({status:false,msg:"Invaild E-mail id "})
    }

    const isEmailUnique = await authorModel.find({email:data.email})
    if(isEmailUnique)
    return res.status(400).send({status:false,msg:"email id already registered"})
    const result=await authorModel.create(data)
    res.status(201).send({status:true,msg:result})
}
catch(err){
    res.status(500).send({status:false,msg:err.message})
}
}

module.exports.createAuthor = createAuthor;
