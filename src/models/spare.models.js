const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spare = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
    public_id: String,
    price: Number,
    count: Number,
  },
  { timestamps: true }
)

module.exports = mongoose.model('spare', spare)
