require('dotenv').config()
const { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_FOUND } = process.env

const { httpError } = require('../../helpers/helperError')

const { createPlatform } = require('../services/database/createPlatform.service')
const { findPlatforms } = require('../services/database/findPlatforms.service')

const postPlatform = async (req, res) => {
  try {
    const { name } = req.body

    const newPlatform = await createPlatform(name)

    res.status(HTTP_CREATED).send({
      code: Number(HTTP_CREATED),
      data: newPlatform
    })
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

const getPlatforms = async (req, res) => {
  try {
    const platforms = await findPlatforms()

    res.status(HTTP_FOUND).send({
      code: Number(HTTP_FOUND),
      data: platforms
    })
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

module.exports = {
  postPlatform,
  getPlatforms
}
