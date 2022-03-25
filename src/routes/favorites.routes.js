const express = require('express')
const router = express.Router()

const {
  favoriteSpare,
  getFavoriteSpare,
} = require('../controllers/favorites.controllers')

router.get('/:id', getFavoriteSpare)
router.put('/:id', favoriteSpare)

module.exports = router
