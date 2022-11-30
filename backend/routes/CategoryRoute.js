const express = require('express');
const {
    getAll
  } = require('../controllers/CategoryController.js');

const router = express.Router();

router.get('/v1/api/category', getAll);

module.exports = router;