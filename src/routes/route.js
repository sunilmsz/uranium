const express = require('express');
const bookController = require("../controller/bookController")
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/book',bookController.getAllBook)
router.post('/book',bookController.createBook)
module.exports = router;
// adding this comment for no reason