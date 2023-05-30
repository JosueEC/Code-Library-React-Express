require('dotenv').config()
const { HTTP_FORBIDDEN } = process.env

const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    res.status(HTTP_FORBIDDEN).send({
      code: Number(HTTP_FORBIDDEN),
      error: error.array()
    })
  }
}

module.exports = { validateResult }
