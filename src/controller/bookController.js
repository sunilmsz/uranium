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

//commented  method  working fine 
const updateBooks = async (req,res)=>{
    let publishers = await publisherModel.find({name:{$in:['Penguin','HarperCollins' ] }}).select({'_id':1})
    let authors =  await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
        if(publishers.length!==0)
            {
                publishers = publishers.map(inp=>inp._id)
                const update =await bookModel.updateMany({publisher: {$in : publishers}},{$set : {isHardCover:true}})
            }
        if( authors.length!=0)
        {
            authors = authors.map(inp=>inp._id)
            // const update2 =await bookModel.updateMany({author: {$in : authors}},{$set : { price : 10 }})
            const update2 = await (await bookModel.find({author: {$in : authors}})).forEach(async element=>{
                const price = element.price;
                await bookModel.updateOne({_id:element._id},{$set:{price:price+10}})
            })
        }
        res.send("job done")

}


//below method working fine but it is inefficient
const updateBooks2 = async (req,res)=> {
    const savedData = await bookModel.find().populate('author',['authorName','rating']).populate('publisher')

            for (let i =0 ;i<savedData.length;i++)
            {
                    const element = savedData[i];
                    const newPrice = element.price+10;
                    const rating =element.author.rating
                    if( rating>3)
                    {
                      const data=  await bookModel.updateOne({_id:element._id },{$set:{price:newPrice}})
                    }
                    if(element.publisher.name == 'Penguin' || element.publisher.name=='HarperCollins')
                    {
                        const data=  await bookModel.updateOne({_id:element._id },{$set:{isHardCover:true}})
                      }
            }
        res.send("job done")

}


module.exports.create = createBook;
module.exports.get=getBooks;
module.exports.update=updateBooks;