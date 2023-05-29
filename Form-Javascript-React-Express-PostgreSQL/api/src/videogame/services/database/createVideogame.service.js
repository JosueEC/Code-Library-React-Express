const { videogame } = require('../database/createVideogame.service')

const createVideogame = async ({ name, description, image, released, platforms, genres, tags }) => {
  const newVideogame = await videogame.create({
    name,
    description,
    image,
    released
  })

  newVideogame.addPlatforms(platforms)
  newVideogame.addGenres(genres)
  newVideogame.addTags(tags)

  return newVideogame
}

module.exports = {
  createVideogame
}
