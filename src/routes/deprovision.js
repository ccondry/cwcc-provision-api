const express = require('express')
const router = express.Router()
const ldapClient = require('simple-ldap-client')
// set up ldap client
const ldap = new ldapClient(process.env.LDAP_URL, process.env.LDAP_BASE_DN)

const userSearchDn = process.env.LDAP_USER_SEARCH_DN || 'OU=Sync2Webex,DC=dcloud,DC=cisco,DC=com'

async function deleteLdapUser (cn) {
  return ldap.deleteUser({
    adminDn: process.env.LDAP_ADMIN_DN,
    adminPassword: process.env.LDAP_ADMIN_PASSWORD,
    userDn: `CN=${cn},${userSearchDn}`
  })
}

// deprovision (delete) LDAP user
router.post('/', async function (req, res, next) {
  if (!req.user.admin) {
    return res.status(403).send({message: 'You do not have permission to access this resource'})
  }
  try {
    await deleteLdapUser(req.body.cn)
    return res.status(200).send({})
  } catch (e) {
    console.log('failed to deprovision', req.body.cn, ':', e.message)
    // return 500 SERVER ERROR
    res.status(500).send({message: e.message})
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
  const operation = 'provision user phones and AD accounts for Webex v4 demo'
  const body = req.body

  try {
    console.log('user', username, 'at IP', clientIp, operation, method, path, 'requested')
    await model.provision(req.user)
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
