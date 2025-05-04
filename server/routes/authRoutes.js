const express = require('express');
const { register, login } = require('../controllers/authController');
const { check } = require('express-validator');

const router = express.Router();

router.post('/register', [
  check('email').isEmail(),
  check('password').isLength({ min: 6 })
], register);

router.post('/login', login);

module.exports = router;
