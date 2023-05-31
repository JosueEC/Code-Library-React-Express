const httpSuccess = (res, data, successCode) => {
  res.status(successCode).send({
    code: Number(successCode),
    data
  })
}

module.exports = { httpSuccess }
