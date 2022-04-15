const bookModel = require('../models/bookModel')
const authorModel = require('../models/authorModel')
const publisherModel = require("../models/publisherModel")


const createBook = async (req,res)=> {

     if(req.body.author== null || req.body.publisher == null)
     return res.send("authorId and publisherId are required ")
     else
     {
         if(req.body.author)
         {
            const isAuthor =await authorModel.findOne({_id:req.body.author})
            if(!isAuthor)
            return res.send("Entered authorId is not valid")
         }
         if(req.body.publisher)
         {
            const isPublisher=await publisherModel.findOne({_id:req.body.publisher})
            if(!isPublisher)
            return res.send("Entered publisherId is not valid")
         }
     }

    const savedData = await bookModel.create(req.body)
    res.send({msg: savedData})

}

const getBooks = async (req,res)=> {

    const savedData = await bookModel.find().populate('author').populate('publisher')
    //const savedData = await bookModel.find().populate(['author','publisher']) <-> it also works similar as above
    res.send({msg: savedData})

}

module.exports.create = createBook;
module.exports.get=getBooks;