require('dotenv').config()
const { HTTP_CREATED, HTTP_FOUND, HTTP_BAD_REQUEST, HTTP_NOT_FOUND } = process.env

const { httpSuccess } = require('../../helpers/success.helper')
const { httpError } = require('../../helpers/error.helper')

const { createGenre } = require('../services/database/createGenre.service')
const { findGenres } = require('../services/database/findGenres.service')

const postGenre = async (req, res) => {
  try {
    const { name } = req.body

    const newGenre = await createGenre(name)
    httpSuccess(res, newGenre, HTTP_CREATED)
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

const getGenres = async (req, res) => {
  try {
    const genres = await findGenres()
    httpSuccess(res, genres, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

module.exports = {
  postGenre,
  getGenres
}
