const mongoose = require('mongoose')
const Schema = mongoose.Schema

const users = new Schema(
  {
    nombre: String,
    apellido: String,
    email: { type: String, required: true, unique: true },
    password: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', users)
