require('dotenv').config()

const ldap = require('../src/models/ldap')

// go test
abileneProvision({userId: '2020'})

async function abileneProvision ({
  userId,
  password = 'C1sco12345'
}) {
  try {
    await ldap.createUser({
      firstName: 'Rick',
      lastName: 'Barrows'+ userId,
      username: 'rbarrows' + userId,
      commonName: 'Rick Barrows' + userId,
      domain: 'cc.dc-01.com',
      physicalDeliveryOfficeName: userId,
      telephoneNumber: '1082' + userId,
      userId,
      mail: 'rbarrows' + userId + '@cc.dc-01.com',
      email: 'rbarrows' + userId + '@cc.dc-01.com',
      description: 'Rick Barrows' + userId,
      usersDn: 'OU=Sync2Webex,DC=dcloud,DC=cisco,DC=com',
      password
    })

    console.log(`LDAP provision successful for user Rick ${userId}`)
    
    await ldap.createUser({
      firstName: 'Sandra' ,
      lastName: 'Jefferson'+ userId,
      username: 'sjeffers' + userId,
      commonName: 'Sandra Jefferson' + userId,
      domain: 'cc.dc-01.com',
      physicalDeliveryOfficeName: userId,
      telephoneNumber: '1080' + userId,
      userId,
      mail: 'sjeffers' + userId + '@cc.dc-01.com',
      email: 'sjeffers' + userId + '@cc.dc-01.com',
      description: 'Sandra Jefferson' + userId,
      usersDn: 'OU=Sync2Webex,DC=dcloud,DC=cisco,DC=com',
      password
    })
    
    console.log(`LDAP provision successful for user Sandra ${userId}`)

  } catch (e) {
    console.log('Failed LDAP provision for user', userId, ':', e.message)
  }
}
