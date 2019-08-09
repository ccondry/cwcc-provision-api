module.exports = {
  get (axl, userId) {
    return axl.getUser({
      userid: userId
    })
  },
  create (axl, userId) {
    return axl.addUser({
      lastName: userId,
      userid: userId,
      password: 'C1sco12345',
      enableMobility: 'true',
      enableMobileVoiceAccess: 'false',
      maxDeskPickupWaitTime: '10000',
      remoteDestinationLimit: '4',
      status: '1',
      enableEmcc: 'false',
      homeCluster: 'true',
      imAndPresenceEnable: 'false',
      selfService: userId,
      calendarPresence: 'false',
      nameDialing: userId,
      enableUserToHostConferenceNow: 'false'
    })
  }
}
