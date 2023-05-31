const { Router } = require('express')

const videogameController = require('../controllers/videogame.controller')

const { validateCreate } = require('../validators/createVideogame.validator')

const router = Router()

router.post('/', validateCreate, videogameController.saveVideogame)

module.exports = router
