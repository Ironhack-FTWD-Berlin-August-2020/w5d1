const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/books', (req, res) => {
  // get all the books
  Book.find().then(booksFromDB => {
    // render a view and pass in the books
    // console.log(booksFromDB);
    res.render('books', { booksList: booksFromDB })
  })
});

router.get('/books/:bookId', (req, res) => {
  const id = req.params.bookId;
  Book.findById(id).then(bookFromDB => {
    console.log(bookFromDB);
    res.render('bookDetails', { book: bookFromDB });
  });
});

module.exports = router;