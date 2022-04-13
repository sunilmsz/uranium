const bookModel = require("../models/bookModel")

const createBook =async (req,res)=> {
    let obj = req.body;
    const savedData =await bookModel.create(obj)
    res.send({msg: savedData});
}

const getAllBook =async (req,res)=> {
    
    const getData =await bookModel.find().select({bookName:1,authorName:1,_id:0});
    res.send({msg: getData});
}

const getBooksInyear = async (req,res)=>{
    const getData =await bookModel.find({year:req.body.year}).select({bookName:1,authorName:1,_id:0,year:1});
    res.send({msg: getData});
}

const getParticularBook = async (req,res)=>{

        const keyArr = Object.keys(req.body)

        if(keyArr.length==0)
        return res.send("Enter at least one condition")

        for(let i=0;i<keyArr.length;i++)
        {
            
            if(["bookName","authorName","year","tags","totalPages","stockAvailable","price"].indexOf(keyArr[i])===-1)
            return res.send("Enter valid data")
        }
           
    const getData =await bookModel.find(req.body)
    res.send({msg : getData})
}

const getXINRBooks = async (req,res)=>{
    const getData =await bookModel.find({ "price.indian" :{$in : [100,200,500]} }).select({bookName:1,authorName:1,_id:0,"price.indian":1});
    res.send({msg: getData});
}

const getRandomBooks = async (req,res)=>{
    const getData = await bookModel.find({isAvailable:true,totalPages: {$gt:500}}).select({stockAvailable:1,bookName:1,authorName:1,_id:0,isAvailable:1,totalPages:1});
    res.send({msg:getData})
}

module.exports.createBook = createBook;
module.exports.getAllBook =getAllBook;
module.exports.getBooksInYear =getBooksInyear;
module.exports.getXINRBooks= getXINRBooks;
module.exports.getRandomBooks=getRandomBooks;
module.exports.getParticularBook=getParticularBook;