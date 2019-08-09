const cucm = require('./cucm/cucm.js')
const extendAndConnectPhone = require('./cucm/extend-and-connect-phone.js')
const user = require('./cucm/user.js')

// create phones for user
async function findOrCreatePhones (userId) {
  console.log('provision - findOrCreatePhones for', userId)
  try {
    // Extend & Connect Phones
    // sandra's phone
    await extendAndConnectPhone.create(cucm, {
      pattern: '1080' + userId,
      username: userId
    })
    // rick's phone
    await extendAndConnectPhone.create(cucm, {
      pattern: '1082' + userId,
      username: userId
    })
  } catch (e) {
    throw e
  }
}

// create a standard CUCM end-user
async function findOrCreateUser(userId) {
  console.log('provision - findOrCreateUser for', userId)
  let newUser
  try {
    newUser = await user.get(cucm, userId)
  } catch (e) {
    await user.create(cucm, userId)
    newUser = await user.get(cucm, userId)
  }
  return newUser
}

module.exports = {
  async get (user) {
    try {
      // get CUCM provision status of user
      const name1 = 'CTIRD1080' + user.id
      console.log(`checking if device ${name1} already exists`)
      const phone1 = await cucm.getPhone({name: name1})

      const name2 = 'CTIRD1082' + user.id
      console.log(`checking if device ${name2} already exists`)
      const phone2 = await cucm.getPhone({name: name2})
      return {
        phone1,
        phone2
      }
    } catch (e) {
      throw e
    }
  },
  async provision (user) {
    // provision user on CUCM
    await findOrCreateUser(user.id)
    // provision extend and connect phones on CUCM
    await findOrCreatePhones(user.id)
  }
}
