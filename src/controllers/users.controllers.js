const Users = require('../models/users.models')
const { matchedData } = require('express-validator')
const handleErrors = require('../utils/handleErrors')

const createUsers = async (req, res) => {
  try {
    const body = matchedData(req)
    const newUser = await Users.create(body)
    res.json(newUser)
  } catch (err) {
    handleErrors(res, 'ERROR AL CREAR EL USUARIO', 500)
  }
}

module.exports = { createUsers }
