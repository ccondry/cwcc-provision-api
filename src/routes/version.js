const express = require('express')
const router = express.Router()
const pkg = require('../../package.json')

router.get('/', async function (req, res, next) {
  res.status(200).send({
    name: pkg.name,
    version: pkg.version
  })
})

module.exports = router
