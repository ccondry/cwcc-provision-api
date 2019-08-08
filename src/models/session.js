/**
This loads the session.xml file that is created by the dCloud topology
**/

const fs = require('fs')
const parser = require('./parser')
const PhoneNumber = require('awesome-phonenumber')

// list of PSTN country codes for dCloud datacenters
const countryCodes = {
  RTP: '+1',
  SJC: '+1',
  LON: '+44',
  SNG: '+65',
  GC: '+86'
}

// dcloud session file path
const sessionFile = process.env.DCLOUD_SESSION_XML || '/dcloud/session.xml'

// cache
let session = {}

function readSessionFile () {
  // read the dcloud session file and return the contents of the DIDs section
  fs.readFile(sessionFile, 'utf8', function (err, data) {
    if (err) return console.error(err)
    // parse xml to json object
    const json = parser.xml2js(data)

    // determine phone number country code prefix
    const prefix = countryCodes[json.session.datacenter]
    // format session DIDs
    const dids = json.session.dids.did.map(v => {
      // copy number as-is first
      let number = v.number
      // now try to replace it with a nicer phone number
      try {
        number = new PhoneNumber(prefix + v.number).getNumber('international')
      } catch (e) {
        console.log('error while making nice DIDs object:', e.message)
      }

      return {
        name: v.name,
        number
      }
    })

    // update cache - only return session ID, datacenter, and DIDs
    session = {
      id: json.session.id,
      datacenter: json.session.datacenter,
      dids
    }

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
