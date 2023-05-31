require('dotenv').config()
const { HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_CREATED, HTTP_FOUND } = process.env

const { httpSuccess } = require('../../helpers/success.helper')
const { httpError } = require('../../helpers/error.helper')

const { createVideogame } = require('../services/database/createVideogame.service')
const { findAllVideogames } = require('../services/database/findAllVideogames.service')

const saveVideogame = async (req, res) => {
  try {
    const { name, description, image, released, platforms, genres } = req.body

    const newVideogame = await createVideogame({ name, description, image, released, platforms, genres })
    httpSuccess(res, newVideogame, HTTP_CREATED)
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

const findVideogames = async (req, res) => {
  try {
    const allVideogames = await findAllVideogames()
    httpSuccess(res, allVideogames, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

module.exports = {
  saveVideogame,
  findVideogames
}
