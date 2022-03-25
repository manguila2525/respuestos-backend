const Users = require('../models/users.models')
const Spares = require('../models/spare.models')

const favoriteSpare = async (req, res) => {
  try {
    const { id } = req.params
    const { _id } = req.body
    const favorite = await Users.findByIdAndUpdate(id, { favorites: [_id] })
    console.log(favorite)
    res.json(favorite)
  } catch (err) {
    console.log('errro')
    res.send('errror')
  }
}

const getFavoriteSpare = async (req, res) => {
  try {
    const { id } = req.params
    const favorite = await Users.findById(id)
    favorite.favorites.map(async (fav) => {
      const respuesta = await Spares.findById({ _id: fav })
      console.log(respuesta)
      res.json({ data: [respuesta] })
    })
  } catch (err) {
    console.log('errro')
    res.send('errror')
  }
}
module.exports = { favoriteSpare, getFavoriteSpare }
