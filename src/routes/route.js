const express = require("express")
const authorController = require("../controller/authorContrller")
const blogController=require("../controller/blogController")
const authentication=require("../middleware/authentication")
const authorisation=require("../middleware/authorisation")

const router = express.Router()

router.post("/authors",authorController.createAuthor)

router.post("/blogs",blogController.createBlogs)

router.get("/blogs",blogController.getBlogs)

router.put("/blogs/:blogId",blogController.updateBlogs)
router.delete("/blog/:blogId",blogController.deleteBlog)
router.delete("/blogs/",blogController.deleteBlogs)

router.post("/login",authorController.login)


module.exports = router;