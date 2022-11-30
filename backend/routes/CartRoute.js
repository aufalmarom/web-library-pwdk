const express = require('express');
const {
    create,
    getAll,
    remove
  } = require('../controllers/CartController.js');

const router = express.Router();

router.post('/v1/api/cart', create);
router.post('/v1/api/cart/getAll', getAll);
router.delete('/v1/api/cart/delete/:id', remove);

module.exports = router;