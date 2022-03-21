const express = require('express')
const router = express.Router()

const { authUser } = require('../controllers/auth.controllers')

router.post('/', authUser)

module.exports = router
