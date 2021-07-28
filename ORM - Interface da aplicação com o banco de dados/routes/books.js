const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/books', booksController.getAll);
router.get('/book/:id', booksController.getById);
router.post('/book', booksController.create);
router.put('/book/:id', booksController.updateById);
router.delete('/book/:id', booksController.deleteById);

module.exports = router;