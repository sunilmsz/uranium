const bookModel = require("../models/bookModel")
const authorModel= require('../models/authourModel')

const createBook =async (req,res)=> {
    let obj = req.body;
    const savedData =await bookModel.create(obj)
    res.send({msg: savedData});
}

const getAllBook =async (req,res)=> {
    
    const getData =await bookModel.find();
    res.send({msg: getData});
}

const getBooksByAuthor =async (req,res)=> {
    const author= await authorModel.findOne({author_name:req.query.author_name}).select({author_id:1})

    const getData =await bookModel.find({author_id :author.author_id}).select({name:1,_id:0});
    res.send({msg: getData});
}

const getBooksbyPriceRange =async (req,res)=> {
    
    
    // console.log(books)
    // let authors=books.map(async (book)=> {
    //     let temp= await authorModel.findOne({author_id:book.author_id}).select({author_name:1,_id:0})
    //     console.log(temp)
    //     return  temp;
    // }).then((temp)=> {
    //     console.log(temp)
    //     res.send({msg :temp})
    // })
    //     const obj = new Promise((resolve,reject)=>{
    //           let authors=books.map(async (book)=> {
    //     let temp= await authorModel.findOne({author_id:book.author_id}).select({author_name:1,_id:0})
    //     console.log(temp)
    //     })
    //     console.log(authors)
    //     resolve(authors);
    // })
    // obj.then((authors)=>res.send({msg: authors}) )

    
    const books =await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0});
    var authors=["222"]
    //    console.log(books)
     books.forEach(async (element) => {
        let temp= await authorModel.findOne({author_id:element.author_id}).select({author_name:1,_id:0})
            console.log(element)
            authors.push(element)
    })
    res.send({msg: authors})

// console.log(authors)

    // for(let i=0;i<books.length;i++)
    // {
    //     let temp= await authorModel.findOne({author_id:books[i].author_id}).select({author_name:1,_id:0})
    //   authors.push(temp)
    // }


          
    



}
module.exports.createBook = createBook;
module.exports.getAllBook =getAllBook;
module.exports.getBooksByAuthor =getBooksByAuthor;
module.exports.getBooksByPriceRange =getBooksbyPriceRange;
