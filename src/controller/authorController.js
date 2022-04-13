const authorModel= require('../models/authourModel')
const bookModel = require("../models/bookModel")
const createAuthor =async (req,res)=> {
    let obj = req.body;
    const savedData =await authorModel.create(obj)
    res.send({msg: savedData});
}

const getAllAuthor =async (req,res)=> {
    
    const getData =await authorModel.find();
    res.send({msg: getData});
}
const getAuthorByBook =async (req,res)=> {
    const book= await bookModel.findOneAndUpdate({name:req.query.book_name},{$set:{price:req.query.price}},{new:true})

    const author =await authorModel.findOne({author_id :book.author_id});
   
    res.send({msg: {
        author_name: author.author_name,
        price:book.price
    }});
}




module.exports.createAuthor = createAuthor;
module.exports.getAllAuthor =getAllAuthor;
module.exports.getAuthorByBook =getAuthorByBook;