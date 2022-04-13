const express = require('express');
const bookController = require("../controller/bookController")
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/book',bookController.createBook)
router.get('/book',bookController.getAllBook)
router.post('/get_books_in_year/',bookController.getBooksInYear)
router.get('/get_particular_book/',bookController.getParticularBook)
router.get('/get_x_inr_books/',bookController.getXINRBooks)
router.get('/get_random_books/',bookController.getRandomBooks)
module.exports = router;
// adding this comment for no reason