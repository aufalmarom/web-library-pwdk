const express = require('express');
const {
    Login,
    Register,
    AccountActivation
  } = require('../controllers/AuthController.js');

const router = express.Router();

router.post('/v1/api/login', Login);
router.post('/v1/api/register', Register);
router.put('/v1/api/activationAccount/:param', AccountActivation);

module.exports = router;