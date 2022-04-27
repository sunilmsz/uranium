const blogsModel = require("../model/blogModel")
const authorModel = require("../model/authorModel")
var mongoose = require('mongoose');


const createBlogs = async (req, res) => {
    try {
        const data = req.body

        if (data.title == undefined || data.body == undefined || data.authorId == undefined || data.category == undefined) {
            return res.status(400).send({ status: false, msg: "Enter Mandentory Feilds" })
        }
        if (typeof (data.title) != "string" || typeof (data.body) != "string" || Array.isArray(data.tags) || Array.isArray(data.subcategory) || Array.isArray(data.category)) {
            return res.status(400).send({ status: false, msg: "invalid input" })
        }
        if (data.isPublished) {
            if (data.isPublished == true) {
                data.publishedAt = new Date();
            }
        }
        let isValid = mongoose.Types.ObjectId.isValid(data.authorId);
        if (!isValid) { return res.status(400).send({ status: false, msg: "Author Id is Not Valid" }) }
        const get_data = await authorModel.findOne({ _id: data.authorId }).select({ _id: 1 })
        if (!get_data) {
            return res.status(400).send({ status: false, msg: "Author not found.." })
        }
        const result = await blogsModel.create(data)
        res.status(201).send({ staus: true, msg: result })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const getBlogs = async function (req, res) {
    try {
        const authorId = req.query.authorId
        let category = req.query.category
        let tags = req.query.tags
        let subcategory = req.query.subcategory
        // let input = req.query;
        let isValid = mongoose.Types.ObjectId.isValid(req.query.authorId);
        if (!isValid) { return res.status(400).send({ status: false, msg: "Author Id is Not Valid" }) }
        const obj = {
            isDeleted: false,
            isPublished: false
        }
        const obj2 = {}
        // let keyArr = Object.keys(input)
        // let somethingBad = false;
        // console.log(keyArr)
        // for (let i = 0; i < keyArr.length; i++) {
        //     if (!(keyArr[i] == "authorId" || keyArr[i] == "category" || keyArr[i] == "tags" || keyArr[i] == "subcategory"))
        //         somethingBad = true;
        // }
        // if (somethingBad) {
        //     return res.status(400).send({ status: false, msg: "invalid input" })
        // }
        if (category) {
            obj2.category = category
        }
        if (authorId)
            obj.authorId = authorId
        if (tags) {
            obj2.tags = tags
        }
        if (subcategory)
            obj2.subcategory = subcategory
           // authourId: id
        // array : {$all : userArr}
            for (let key in obj2) {
            if (typeof (obj2[key]) == "string") {
                obj2[key] = obj2[key].split(",")
                for (let i = 0; i < obj2[key].length; i++)
                    obj2[key][i] = obj2[key][i].trim()
                obj2[key] = { $all: obj2[key] }    
            }
        }
        const data = await blogsModel.find(...obj,...obj2)
        //  const data=await blogsModel.find({category:{$all:category},authorId:authorId,tags:{$all:tags},isDeleted:false})
        //const data=await blogsModel.find({isDeleted:false,isPublished:true}).populate("authorId",{"fname":1,"lname":1})
        if (data.length == 0) {
            return res.status(404).send({ status: false, msg: "Blogs Not found" })
        }
        res.status(200).send({ status: true, data: data })
    }
    catch (err) {
        res.status(500).send({ status: true, msg: err.message })
    }
}


const updateBlogs = async function (req, res) {
    // const data = req.body
    // const id = req.params.blogid
    // const result = await blogsModel.findOneAndUpdate({ _id: id }, { $set: {} }, { new: true })
    try {
        if ((typeof (req.body.title) != "string" && typeof (req.body.title) != "undefined") || (typeof (req.body.body) != "string" && typeof (req.body.body) != "undefined") || (typeof (req.body.isPublished) != "boolean" && typeof (req.body.isPublished) != "undefined") || (typeof (req.body.tags) != "object" && typeof (req.body.tags) != "undefined") || (typeof (req.body.subcategory) != "object" && typeof (req.body.subcategory) != "undefined")) {
            return res.status(400).send({ status: false, msg: "invalid input" })
        }
        const date = new Date();
        let isValid = mongoose.Types.ObjectId.isValid(req.params.blogid);
        if (!isValid) { return res.status(400).send({ status: false, msg: "Blog Id is Not Valid" }) }
        if (Object.keys(req.body).length == 0) { return res.send({ status: false, msg: "Provide some data" }) }
        let obj = {}
        if (req.body.title)
            obj.title = req.body.title
        if (req.body.body)
            obj.body = req.body.body
        if (req.body.isPublished == true) {
            obj.isPublished = true;
            obj.publishedAt = new Date();
        }
        const result = await blogsModel.findOneAndUpdate({ _id: req.params.blogid, isDeleted: false }, { $set: obj }, { new: true })
        if (!result) { return res.status(404).send({ status: false, msg: "Blog not found" }) }
        if (req.body.tags)
            result.tags = result.tags.concat(req.body.tags)

        if (req.body.subcategory)
            result.subcategory = result.subcategory.concat(req.body.subcategory)
        result.save()
        res.status(201).send({ status: true, result })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        let isValid = mongoose.Types.ObjectId.isValid(blogId);
        if (!isValid) { return res.status(400).send({ status: false, msg: "Blog Id is Not Valid" }) }
        const data = await blogsModel.findOne({ _id: blogId, isDeleted: false })
        if (!data)
            return res.status(404).send({ status: false, msg: "blog not found" })
        let date = new Date()
        const result = await blogsModel.updateOne({ _id: blogId }, { isDeleted: true, deletedAt: date })
        console.log(result, "deleted")
        res.status(200).send("")
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const deleteBlogs = async (req, res) => {
    try {
        let keyArr = Object.keys(req.query)
        let somethingBad = false;
        for (let i = 0; i < keyArr.length; i++) {
            if (!(keyArr[i] == "authorId" || keyArr[i] == "category" || keyArr[i] == "tags" || keyArr[i] == "subcategory" || keyArr[i] == "isPublished"))
                somethingBad = true;
        }
        if (somethingBad) {
            return res.status(400).send({ status: false, msg: "invalid input" })
        }
        req.query.isDeleted = false;
        let date = new Date()
        const data = await blogsModel.updateMany(req.query, { $set: { isDeleted: true, deletedAt: date } })
        if (data.matchedCount == 0)
            return res.status(404).send({ status: false, msg: "blog not found" })
        res.status(200).send({ status: true, data: "finally deleted Successfull " + data.matchedCount + " documents" })
    }
    catch (err) {
        res.send({ msg: err.message })
    }
}


module.exports.getBlogs = getBlogs;
module.exports.createBlogs = createBlogs;
module.exports.updateBlogs = updateBlogs;
module.exports.deleteBlog = deleteBlog;
module.exports.deleteBlogs = deleteBlogs;



