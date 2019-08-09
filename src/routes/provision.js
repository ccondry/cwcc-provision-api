const express = require('express')
const router = express.Router()
const logger = require('../models/logger')
const model = require('../models/provision')

// get provision status for current logged-in user
router.get('/', async function (req, res, next) {
  const username = req.user.username
  const userId = req.user.id
  const clientIp = req.clientIp
  const method = req.method
  const host = req.get('host')
  const path = req.originalUrl
  const url = req.protocol + '://' + host + path
  const operation = 'get user CWCC phones provision status'

  try {
    console.log('user', username, 'at IP', clientIp, operation, method, path, 'requested')
    // check CUCM for if phones are provisioned
    const data = await model.get(req.user)
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

// provision user for CWCC demo
router.post('/', async function (req, res, next) {
  const username = req.user.username
  const userId = req.user.id
  const clientIp = req.clientIp
  const method = req.method
  const host = req.get('host')
  const path = req.originalUrl
  const url = req.protocol + '://' + host + path
  const operation = 'provision user phones for CWCC demo'
  const body = req.body

  try {
    console.log('user', username, 'at IP', clientIp, operation, method, path, 'requested')
    const results = await model.provision(req.user)
    console.log('user', username, 'at IP', clientIp, operation, method, path, 'successful')
    // return 202 ACCEPTED
    return res.status(202).send()
  } catch (e) {
    // error
    console.log('user', username, 'at IP', clientIp, operation, method, path, 'error', e.message)
    // log it to db
    logger.log({
      clientIp, host, path, url, method, operation, username, userId,
      status: 500,
      details: operation + ' failed: ' + e.message
    })
    // return 500 SERVER ERROR
    res.status(500).send(e.message)
  }
})

module.exports = router
