const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const multer = require('multer')
const path = require('path')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
require('./db')
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname))
  },
})
app.use(multer({ storage }).single('image'))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/spare', require('./routes/spare.routes'))

app.listen(port, () =>
  console.log(`Example app listening on port ${port}! ${process.env.NODE_ENV}`)
)
