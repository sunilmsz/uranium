const publishModel = require('../models/publisherModel')

const createPublisher = async (req,res)=> {

    const savedData = await publishModel.create(req.body)
    res.send({msg: savedData})

}

const getpublishers = async (req,res)=> {

    const savedData = await publishModel.find().select({name:1})
    res.send({msg: savedData})

}

module.exports.create = createPublisher;
module.exports.get = getpublishers;