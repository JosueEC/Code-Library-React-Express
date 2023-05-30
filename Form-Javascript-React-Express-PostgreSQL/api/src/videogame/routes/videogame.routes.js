const { Router } = require('express')

const videogameController = require('../controllers/videogame.controller')

const { validateCreate } = require('../validators/videogame')

const router = Router()

router.post('/', validateCreate, videogameController.saveVideogame)

module.exports = router
