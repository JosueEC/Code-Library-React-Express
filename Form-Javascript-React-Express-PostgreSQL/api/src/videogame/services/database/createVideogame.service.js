const { videogame } = require('../../../../config/database')

const createVideogame = async ({ name, description, image, released, platforms, genres }) => {
  const newVideogame = await videogame.create({
    name,
    description,
    image,
    released
  })

  newVideogame.addPlatforms(platforms)
  newVideogame.addGenres(genres)

  return newVideogame
}

module.exports = {
  createVideogame
}
