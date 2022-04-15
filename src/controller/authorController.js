const authorModel = require('../models/authorModel')

const createAuthor = async (req,res)=> {

    const savedData = await authorModel.create(req.body)
    res.send({msg: savedData})

}
const getAuthors = async (req,res)=> {

    const savedData = await authorModel.find().select({authorName:1})
    res.send({msg: savedData})

}

module.exports.create = createAuthor;
module.exports.get = getAuthors;