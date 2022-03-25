const mongoose = require('mongoose')
const Schema = mongoose.Schema

const users = new Schema(
  {
    nombre: String,
    apellido: String,
    email: { type: String, required: true, unique: true },
    password: String,
    role: {
      type: ['user', 'admin'],
      default: 'user',
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'spare',
      },
    ],
  },

  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('users', users)
