/**
This loads the session.xml file that is created by the dCloud topology
**/

const fs = require('fs')
const parser = require('./parser')

let session = {}

// dcloud session file path
const sessionFile = process.env.DCLOUD_SESSION_XML || '/dcloud/session.xml'

function readSessionFile () {
  // read the dcloud session file and return the contents of the DIDs section
  fs.readFile(sessionFile, 'utf8', function (err, data) {
    if (err) return console.error(err)
    // parse xml to json object
    const json = parser.xml2js(data)
    // extract the DIDs array
    session = json.session
  })
}

// read session file now
readSessionFile()

// re-read the session file every 5 minutes, to make sure we have the latest data
const interval = setInterval(readSessionFile, 1000 * 60 * 5)

module.exports = {
  get () {
    return session
  }
}
