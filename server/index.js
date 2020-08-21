const express = require('express')
const morgan = require('morgan')
require('dotenv').config({ path: './config.env' })
const app = express()
/** Connect database */
require('./database/db')
require('./database/models/User')

//**  Middlewares */
app.use(morgan('dev'))
app.use(express.json({ extended: false }))

/** routes */
app.use('/api/v1/signup', require('./routes/auth'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`App now listen on ${PORT}`))

