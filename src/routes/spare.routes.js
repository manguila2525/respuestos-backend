const express = require('express')
const router = express.Router()

const {
  createSpare,
  getSpare,
  getSpareId,
} = require('../controllers/spare.controllers')

router.get('/', getSpare)
router.get('/:id', getSpareId)
router.post('/', createSpare)

module.exports = router
