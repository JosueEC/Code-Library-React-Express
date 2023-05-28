const { platform } = require('../../../../config/database')

const findPlatforms = async () => {
  const platforms = await platform.findAll()

  return platforms
}

module.exports = {
  findPlatforms
}
