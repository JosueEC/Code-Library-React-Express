const { videogame } = require('../../../../config/database')

const findAllVideogames = async () => {
  const allVideogames = await videogame.findAll()

  return allVideogames
}

module.exports = { findAllVideogames }
