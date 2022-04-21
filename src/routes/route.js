const express = require('express');
const check_auth = require('../middleware/check_auth_token')
const isUserValid = require('../middleware/isUserValid')
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



const userController = require("../controller/userController")
router.post('/user',userController.create)
router.post('/login',userController.logIn)
router.get('/user/:userId',isUserValid,check_auth,userController.get)
router.put('/user/:userId',isUserValid,check_auth,userController.update)
router.delete('/user/:userId',isUserValid,check_auth,userController.delete)
router.get('/users/deleted',userController.getDeletedUsers)



module.exports = router;
// adding this comment for no reason