module.exports = function ({
  username,
  teamId,
  password = 'C1sco12345',
  firstName = 'Rick',
  lastName = 'Barrows',
  profileId = 'AWwbV8tvhW2lRXH-xsW8',
  agentProfileId = 'AWX8rlYgVEprkAUKEc2o',
  siteId = 'AWX8rlYT_1uTFjV88ROM'
}) {
  return {
    "type": "user",
    "attributes": {
      "lastName__s": lastName,
      "historicalReportsEnabled__i": 1,
      "multimediaProfileId__s": "0",
      "mobile__s": "",
      "externalId__s": "",
      "work__s": "",
      "roleId__s": null,
      "status__i": 1,
      "city__s": "",
      "invalidAttempts__i": 0,
      "login__s": username,
      "profileId__s": profileId,
      "street__s": "",
      "postalCode__s": "",
      "agentProfileId__s": agentProfileId,
      "locked__i": 0,
      "timezone__s": null,
      "country__s": "",
      "siteId__s": siteId,
      "email__s": username,
      "state__s": "",
      "extMultimediaProfileId__s": "0",
      "firstName__s": firstName,
      "password__s": password,
      "defaultDn__s": "",
      "changePassword__i": 0,
      "callCenterEnabled__i": 1,
      "teamIds__sa": [
        teamId
      ],
      "skillProfileId__s": "0"
    },
    "login": username,
    "emailAddress": username,
    "password": password,
    "firstName": firstName,
    "lastName": lastName
  }
}
