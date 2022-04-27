const express = require("express")
const authorController = require("../controller/authorContrller")
const blogController=require("../controller/blogController")
const router = express.Router()

router.post("/createAuthor",authorController.createAuthor)

router.post("/createBlogs",blogController.createBlogs)

router.get("/getBlogs",blogController.getBlogs)

router.put("/updateBlogs/:blogid",blogController.updateBlogs)
router.delete("/deleteBlog/:blogId",blogController.deleteBlog)
router.delete("/deleteBlogs/",blogController.deleteBlogs)


module.exports = router;