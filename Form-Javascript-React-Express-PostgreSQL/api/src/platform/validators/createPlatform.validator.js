const { check } = require('express-validator')
const { validateResult } = require('../../helpers/validate.helper')

const validateCreate = [
  check('name')
    .exists()
    .notEmpty()
    .isLowercase(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreate }
