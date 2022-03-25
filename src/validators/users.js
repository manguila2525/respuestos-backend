const { check } = require('express-validator')
const validateResults = require('../utils/handleValidators')

const validatorCreateUsers = [
  check('nombre').exists().notEmpty(),
  check('apellido').exists().notEmpty(),
  check('email').exists().notEmpty(),
  check('password').exists().notEmpty(),
  check('role').exists().notEmpty(),
  check('favorites').exists().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  },
]

module.exports = { validatorCreateUsers }
