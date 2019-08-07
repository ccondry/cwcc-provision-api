const Client = require('cwcc-provision-client')
require('dotenv').config()

const client = new Client({
  fromAddress: process.env.FROM_ADDRESS,
  apiKey: process.env.API_KEY,
  tenantId: process.env.TENANT_ID
})

const routingStrategyID = 'AWw-qefATtyapDu1yYoq'

client.routingStrategy.get(routingStrategyID)
.then(r => {
  console.log(JSON.stringify(r, null, 2))
  // replace tid with tid__s
  r.attributes.tid__s = r.attributes.tid
  delete r.attributes.tid
  // replace cstts with cstts__s
  r.attributes.cstts__l = r.attributes.cstts
  delete r.attributes.cstts

  // go modify
  client.routingStrategy.modify(routingStrategyID, [r])
  .then(r => console.log(r))
  .catch(e => console.error(e.message))
})
.catch(e => console.error(e))
