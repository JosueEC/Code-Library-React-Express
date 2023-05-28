const { Router } = require('express')

const platformController = require('../controllers/platform.controller')

const router = Router()

router.post('/', platformController.postPlatform)

module.exports = router
