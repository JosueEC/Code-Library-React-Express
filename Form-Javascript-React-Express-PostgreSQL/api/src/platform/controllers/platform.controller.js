require('dotenv').config()
const { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_FOUND } = process.env

const { httpSuccess } = require('../../helpers/success.helper')
const { httpError } = require('../../helpers/error.helper')

const { createPlatform } = require('../services/database/createPlatform.service')
const { findPlatforms } = require('../services/database/findPlatforms.service')

const postPlatform = async (req, res) => {
  try {
    const { name } = req.body

    const newPlatform = await createPlatform(name)
    httpSuccess(res, newPlatform, HTTP_CREATED)
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

const getPlatforms = async (req, res) => {
  try {
    const platforms = await findPlatforms()
    httpSuccess(res, platforms, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

module.exports = {
  postPlatform,
  getPlatforms
}
