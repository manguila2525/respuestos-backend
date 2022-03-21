const Spare = require('../models/spare.models')

const fs = require('fs-extra')

const cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: 'teamsito',
  api_key: '951156282287242',
  api_secret: '5Eraa8GbU6cuxKeSgqGtT2oX4n8',
})

const createSpare = async (req, res) => {
  try {
    const { title, description } = req.body
    const { url, public_id } = await cloudinary.v2.uploader.upload(
      req.file.path
    )
    const newSpare = new Spare({
      title,
      description,
      imageUrl: url,
      public_id,
    })
    await newSpare.save()
    await fs.unlink(req.file.path)
    res.redirect('http://localhost:3000/createSpare')
  } catch (err) {
    res.json({ error: 'Error al crear el respuesto' })
  }
}

const getSpare = async (req, res) => {
  try {
    const spare = await Spare.find()
    res.json({ data: spare })
  } catch (err) {
    res.status(400)
    res.json({ message: 'Error' })
  }
}

const getSpareId = async (req, res) => {
  try {
    const { id } = req.params
    const spare = await Spare.findById(id)
    res.json({ data: spare })
  } catch (err) {
    res.status(400)
    res.json({ message: 'Error' })
  }
}

module.exports = { createSpare, getSpare, getSpareId }
