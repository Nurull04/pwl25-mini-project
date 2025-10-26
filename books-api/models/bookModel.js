const db = require('../config/database');

const Book = {
  getAll: (callback) => {
    db.query('SELECT * FROM books', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM books WHERE id = ?', [id], callback);
  },
  create: (book, callback) => {
    db.query(
      'INSERT INTO books (title, author, year, price, stock) VALUES (?, ?, ?, ?, ?)',
      [book.title, book.author, book.year, book.price, book.stock],
      callback
    );
  },
  update: (id, book, callback) => {
    db.query(
      'UPDATE books SET title = ?, author = ?, year = ?, price = ?, stock = ? WHERE id = ?',
      [book.title, book.author, book.year, book.price, book.stock, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.query('DELETE FROM books WHERE id = ?', [id], callback);
  },
};

module.exports = Book;