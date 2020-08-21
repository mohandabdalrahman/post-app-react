const User = require('../database/models/User')
const { handleGeneralError } = require('../utils/generalError')
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
/** handle signup */
const signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body
    const emailExist = await User.findOne({ email })
    if (emailExist) {
      return res.status(422).json({ error: 'Email is in use' })
    }
    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt)
    const userRes = await User.create({ email, password: encryptedPassword })
    // paylaod
    const payload = {
      user: {
        id: userRes._id
      }
    }
    // json web token
    jwt.sign(payload, process.env.jwtSecretKey, { expiresIn: '6h' }, (err, token) => {
      if (err) throw err
      res.json({ token })
    })
  } catch (error) {
    handleGeneralError(res, error, 500)
  }
}


module.exports = {
  signUp
}