require('dotenv').config()
const { HTTP_CREATED, HTTP_FOUND, HTTP_BAD_REQUEST, HTTP_NOT_FOUND } = process.env

const { httpError } = require('../../helpers/error.helper')

const { createGenre } = require('../services/database/createGenre.service')
const { findGenres } = require('../services/database/findGenres.service')

const postGenre = async (req, res) => {
  try {
    const { name } = req.body

    const newGenre = await createGenre(name)

    res.status(HTTP_CREATED).send({
      code: Number(HTTP_CREATED),
      data: newGenre
    })
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

const getGenres = async (req, res) => {
  try {
    const genres = await findGenres()

    res.status(HTTP_FOUND).send({
      code: Number(HTTP_FOUND),
      data: genres
    })
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

module.exports = {
  postGenre,
  getGenres
}
