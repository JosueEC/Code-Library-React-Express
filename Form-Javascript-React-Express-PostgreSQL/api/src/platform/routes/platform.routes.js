const { Router } = require('express')

const platformController = require('../controllers/platform.controller')
const { validateCreate } = require('../validators/createPlatform.validator')

const router = Router()

router.post('/', validateCreate, platformController.postPlatform)

router.get('/', platformController.getPlatforms)

module.exports = router
