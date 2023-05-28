const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.status(200).send({
    code: 200,
    data: 'games found in database'
  })
})

module.exports = router
