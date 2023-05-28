const { Router } = require('express')

const platformController = require('../controllers/platform.controller')

const router = Router()

router.post('/', platformController.postPlatform)

router.get('/', platformController.getPlatforms)

module.exports = router
