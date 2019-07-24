module.exports = function ({
  name,
  description = ''
}) {
  return {
    "type": "virtual-team",
    "attributes": {
      "primaryPingUrl__s": "",
      "overflowUri__s": "",
      "isDedicated__i": 1,
      "serviceLevelThreshold__i": 120,
      "name__s": name,
      "recordingPauseDuration__i": 10,
      "channelType__i": 1,
      "status__i": 1,
      "longitude__d": 0,
      "pauseResumeEnabled__i": 1,
      "latitude__d": 0,
      "maxTimeInQueue__l": 100,
      "areaCodesToBlock__s": "",
      "permitRecording__i": 1,
      "billingGroup__s": "0",
      "acdDescription__s": "",
      "backupPingUrl__s": "",
      "metricsDataPrecedence__sa": [],
      "mapGroup__s": "0",
      "vendorId__s": "",
      "timezone__s": "",
      "label__s": "",
      "permitMonitoring__i": 1,
      "acdType__s": "seratel",
      "dnTimeout__i": 60,
      "type__i": 1,
      "maximumActiveCalls__i": 10,
      "_type__s": "virtual-team",
      "ivrRequeueUrl__s": "http://localhost:8000/dCloud/",
      "ccOneQueue__i": 1,
      "callFlowScriptUrl__s": "http://localhost:8000/dCloud/",
      "permitParking__i": 1,
      "checkAgentAvailability__i": 1,
      "maximumDnRetries__i": 3,
      "recordAllCalls__i": 0,
      "description__s": description,
      "blockAreaCodes__i": 0
    }
  }
}
