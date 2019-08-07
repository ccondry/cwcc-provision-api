const MongoClient = require('mongodb').MongoClient
const pkg = require('../../package.json')

const url = process.env.LOGGER_DB_URL
const options = { useNewUrlParser: true }

function log (data) {
  // default to info level
  data.level = data.level || 'info'
  // set the timestamp
  data.datetime = new Date().toJSON()
  // set package name and version
  data.app = pkg.name
  data.version = pkg.version
  // static db and collection name
  insertOne('logs', data)
  .catch(e => {
    console.log('failed to add log message to database', e.message)
  })
}

function insertOne (collection, data) {
  return new Promise((resolve, reject) => {
    try {
      MongoClient.connect(url, options, function(connectError, client) {
        if (connectError) return reject(connectError)
        client.db().collection(collection).insertOne(
          data,
          function(queryError, doc) {
            client.close()
            if (queryError) reject(queryError)
            else resolve(doc)
          }
        )
      })
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  log
}
