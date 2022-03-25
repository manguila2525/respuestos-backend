const express = require('express')
const router = express.Router()
const { validatorCreateUsers } = require('../validators/users')
const { createUsers } = require('../controllers/users.controllers')

router.post('/', validatorCreateUsers, createUsers)

module.exports = router
