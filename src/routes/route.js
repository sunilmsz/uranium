const express = require("express")
const authorController = require("../controller/authorContrller")
const blogController=require("../controller/blogController")
const authentication=require("../middleware/authentication")
const authorisation=require("../middleware/authorisation")
const router = express.Router()

router.post("/createAuthor",authorController.createAuthor)

router.post("/createBlogs",blogController.createBlogs)

router.get("/getBlogs",authentication.tokenAuth,blogController.getBlogs)

router.put("/updateBlogs/:blogid",authentication.tokenAuth,authorisation.authorisation,blogController.updateBlogs)

router.delete("/deleteBlog/:blogId",authentication.tokenAuth,authorisation.authorisation,blogController.deleteBlog)

router.delete("/deleteBlogs",authentication.tokenAuth,blogController.deleteBlogs)

router.post("/loginUser",authorController.login)


module.exports = router;