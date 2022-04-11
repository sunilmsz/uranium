const bookModel = require("../models/bookModel")

const createBook =async (req,res)=> {
    let obj = req.body;
    const savedData =await bookModel.create(obj)
    res.send({msg: savedData});
}

const getAllBook =async (req,res)=> {
    
    const getData =await bookModel.find();
    res.send({msg: getData});
}

module.exports.createBook = createBook;
module.exports.getAllBook =getAllBook;