const express = require('express')
const router = express.Router()
const { body } = require('express-validator');
const { signUp } = require('../connectors/auth')

router.route('/').post([
  body('email', 'email is required').isEmail(),
  body('password', 'please enter password').exists()
], signUp)

module.exports = router