const express = require('express');
const {
    getAll,
    getImage,
    getOne
  } = require('../controllers/BookController.js');

const router = express.Router();

router.get('/v1/api/books', getAll);
router.get('/v1/api/books/:id', getOne);
router.get('/v1/api/books/image/:path', getImage);

module.exports = router;