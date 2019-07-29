const Client = require('cwcc-provision-client')
require('dotenv').config()

const client = new Client({
  fromAddress: process.env.FROM_ADDRESS,
  apiKey: process.env.API_KEY,
  tenantId: process.env.TENANT_ID
})

const routingStrategyID = 'AWwvXa6Qyj7yDN9QVdHe'

client.routingStrategy.delete(routingStrategyID)
.then(r => console.log(r))
.catch(e => console.error(e))
