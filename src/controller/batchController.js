const  batchModel  = require("../models/batchModel")

const createBatch = async (req,res) => {

    if(!(req.body.program=='backend' || req.body.program=="frontend"))
    return res.send("enter a valid program either backend or frontend")

    if(!req.body.name)
    return res.send("Name is a required field")

    const savedData = await batchModel.create(req.body)
    return res.send({msg : savedData})
}

const getBatches = async (req,res) => {
    const getData =  await batchModel.find()
    res.send({msg : getData})
}


module.exports.createBatch = createBatch;
module.exports.getBatches= getBatches;