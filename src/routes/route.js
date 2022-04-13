const express = require('express');
const bookController = require("../controller/bookController")
const authorController = require("../controller/authorController")

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/create_book',bookController.createBook)
router.get('/get_all_books',bookController.getAllBook)
router.get('/get_books_by_author',bookController.getBooksByAuthor)
router.get('/get_author_by_book_and_update',authorController.getAuthorByBook)

router.post('/create_author',authorController.createAuthor)
router.get('/get_all_authors',authorController.getAllAuthor)
router.get('/get_books_by_price_range',bookController.getBooksByPriceRange)
module.exports = router;
// adding this comment for no reason