module.exports = function ({
  name,
  multimediaProfileId = 'AWX8rlIDVEprkAUKEc2L',
  siteId = 'AWX8rlYT_1uTFjV88ROM'
}) {
  return [
    {
      "type": "team",
      "attributes": {
        "priority__i": 0,
        "multimediaProfileId__s": multimediaProfileId,
        "siteId__s": siteId,
        "capacity__l": 0,
        "name__s": name,
        "teamType__i": 1,
        "teamDn__s": "0",
        "teamStatus__s": "In Service",
        "status__i": 1,
        "skillProfileId__s": null
      }
    }
  ]
}
