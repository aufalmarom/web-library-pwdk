const express = require('express');
const {
    create,
    getAll,
    update
  } = require('../controllers/LoanController.js');

const router = express.Router();

router.post('/v1/api/loan', create);
router.post('/v1/api/loan/history', getAll);
router.put('/v1/api/loan/return/:id/:userId', update);

module.exports = router;