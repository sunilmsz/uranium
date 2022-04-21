const express = require('express');
const isFreeAppUser = require('../middleware/isFreeAppUser')
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

const productController = require('../controller/productController')

router.post('/create_product',productController.create)
router.get("/products",productController.get)

const userController = require("../controller/userController")
router.post('/create_user',isFreeAppUser,userController.create)
router.get('/users',userController.get)

const orderController = require("../controller/orderController")
router.post('/create_order',isFreeAppUser,orderController.create)
router.get('/orders',orderController.get)

module.exports = router;
// adding this comment for no reason