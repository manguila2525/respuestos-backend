const Users = require('../models/users.models')

const createUsers = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body
    const newUser = await Users.create({ nombre, apellido, email, password })
    res.json(newUser)
  } catch (err) {
    res.json({ error: 'Error al crear el usuario' })
  }
}

module.exports = { createUsers }
