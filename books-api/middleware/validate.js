const { body, validationResult } = require('express-validator');

const validateBook = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('year').isInt().withMessage('Year must be a number'),
  body('price').isFloat().withMessage('Price must be a number'),
  body('stock').isInt().withMessage('Stock must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateBook };