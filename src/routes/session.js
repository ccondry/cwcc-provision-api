const express = require('express')
const router = express.Router()
const model = require('../models/dcloud-session')

// get dcloud session information
router.get('/', async function (req, res, next) {
  const username = req.user.username
  const userId = req.user.id
  const clientIp = req.clientIp
  const method = req.method
  const host = req.get('host')
  const path = req.originalUrl
  const url = req.protocol + '://' + host + path
  const operation = 'get dcloud session info'

  try {
    console.log('user', username, 'at IP', clientIp, operation, method, path, 'requested')
    const data = model.get()
    const dataLength = Object.keys(data)
    response = `(JSON object with ${dataLength} properties)`
    // log it to db
    logger.log({
      clientIp, host, path, url, method, operation, username, userId,
      status: 200,
      details: operation + ' successful',
      response
    })
    // return results
    res.status(200).send(data)
  } catch (e) {
    // error
    console.log('user', username, 'at IP', clientIp, operation, method, path, 'error', e.message)
    // log it to db
    logger.log({
      clientIp, host, path, url, method, operation, username, userId,
      status: 500,
      details: e.message
    })
    // return 500 SERVER ERROR
    res.status(500).send(e.message)
  }
})

module.exports = router
