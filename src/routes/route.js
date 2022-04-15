const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

const publisherController = require('../controller/publisherController')
router.post('/create_publisher',publisherController.create)
router.get('/get_publishers',publisherController.get)

const authorController = require('../controller/authorController')
router.post('/create_author',authorController.create)
router.get('/get_authors',authorController.get)

const bookController = require("../controller/bookController")

router.post('/create_book',bookController.create)
router.get('/get_books',bookController.get)


module.exports = router;
// adding this comment for no reason