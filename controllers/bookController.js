const Book = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
  Book.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getBookById = (req, res) => {
  Book.getById(req.params.id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(results[0]);
  });
};

exports.createBook = (req, res) => {
  const book = req.body;
  Book.create(book, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, ...book });
  });
};

exports.updateBook = (req, res) => {
  const book = req.body;
  Book.update(req.params.id, book, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book updated successfully' });
  });
};

exports.deleteBook = (req, res) => {
  Book.delete(req.params.id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  });
};  