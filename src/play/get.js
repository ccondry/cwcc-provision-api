const Client = require('cwcc-provision-client')
require('dotenv').config()

const client = new Client({
  fromAddress: process.env.FROM_ADDRESS,
  apiKey: process.env.API_KEY,
  tenantId: process.env.TENANT_ID
})

// const routingStrategyID = 'AWwmEV2KMYa8Mtuzy-9N'
//
// client.routingStrategy.get(routingStrategyID)
// .then(r => console.log(JSON.stringify(r, null, 2)))
// .catch(e => console.error(e))

// const routingStrategyID = 'AWwmEV2KMYa8Mtuzy-9N'

// client.virtualTeam.list()
// .then(r => console.log(JSON.stringify(r, null, 2)))
// .catch(e => console.error(e))

client.virtualTeam.get('AWwlRZnHQK-DHWzALbtD')
.then(r => console.log(JSON.stringify(r, null, 2)))
.catch(e => console.error(e))
