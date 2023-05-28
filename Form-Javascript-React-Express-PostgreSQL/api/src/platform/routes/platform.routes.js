const { Router } = require('express')

const router = Router()

router.post('/', (req, res) => {
  res.status(200).send({
    code: 200,
    data: 'platform created'
  })
})

module.exports = router
