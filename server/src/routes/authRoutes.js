const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', [
  check('email').isEmail().normalizeEmail(),
  check('password').exists()
], authController.login);


module.exports = router;