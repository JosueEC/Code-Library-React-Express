require('dotenv').config()
const { HTTP_CREATED, HTTP_FOUND } = process.env

const { httpError } = require('../helpers/helperError')

const { createGenre } = require('../services/database/createGenre.service')

const postGenre = async (req, res) => {
  try {
    const { name } = req.body

    const newGenre = await createGenre(name)

    res.status(HTTP_CREATED).send({
      code: Number(HTTP_CREATED),
      data: newGenre
    })
  } catch (error) {
    httpError(res, error)
  }
}

const getGenres = async (req, res) => {
  try {
    res.status(HTTP_FOUND).send({
      code: Number(HTTP_FOUND),
      data: 'Genres founded in database'
    })
  } catch (error) {
    httpError(res, error)
  }
}

module.exports = {
  postGenre,
  getGenres
}
