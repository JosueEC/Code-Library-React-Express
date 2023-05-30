const { check } = require('express-validator')

const { validateResult } = require('../../helpers/validateHelper')

const validateCreate = [
  check('name')
    .exists()
    .notEmpty(),
  check('description')
    .exists()
    .not().isEmpty(),
  check('image')
    .exists()
    .notEmpty()
    .isURL(),
  check('released')
    .exists()
    .notEmpty(),
  check('platforms')
    .exists()
    .notEmpty()
    .isArray(),
  check('genres')
    .exists()
    .notEmpty()
    .isArray(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = {
  validateCreate
}
