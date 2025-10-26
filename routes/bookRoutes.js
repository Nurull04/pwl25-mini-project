const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { validateBook } = require('../middleware/validate');

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', validateBook, bookController.createBook);
router.put('/books/:id', validateBook, bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;