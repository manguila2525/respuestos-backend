const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spare = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
    public_id: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('spare', spare)
