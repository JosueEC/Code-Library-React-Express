require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

const defineVideogame = require('./videogame/models/Videogame.model')
const definePlatform = require('./platform/models/Platform.model')
const defineGenre = require('./genre/models/Genre.model')

const Sequelize = require('sequelize')

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false
})

defineVideogame(database)
definePlatform(database)
defineGenre(database)

module.exports = database
