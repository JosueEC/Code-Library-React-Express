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

const { videogame, platform, genre } = database.models

videogame.belongsToMany(platform, { through: 'game-platform' })
platform.belongsToMany(videogame, { through: 'game-platform' })

videogame.belongsToMany(genre, { through: 'game-genre' })
genre.belongsToMany(videogame, { through: 'game-genre' })

module.exports = database
