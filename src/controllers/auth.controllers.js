const Users = require('../models/users.models')

const authUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const users = await Users.find({ email, password })
    res.json({ data: users })
  } catch (err) {
    res.status(400)
    res.json({ message: 'Error' })
  }
}

module.exports = { authUser }
