const { platform } = require('../../../../config/database')

const createPlatform = async (name) => {
  const newPlatform = await platform.create({ name })

  return newPlatform
}

module.exports = {
  createPlatform
}
