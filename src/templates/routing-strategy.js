

module.exports = function ({
  name,
  virtualTeamDbId,
  virtualTeamName,
  teamId,
  teamName,
  tenantId = '1000148',
  tenantName = 'dCloud',
  siteId = '1000350',
  siteName = 'Site-1'
}) {
  return {
    "type": "routing-strategy",
    "attributes": {
      "mediaFileIds__sa": [
        "AWX8rlE7_1uTFjV88RNr",
        "AWX8rlE7_1uTFjV88RNr"
      ],
      "legacyJscriptId__l": 1004751,
      "jscriptId__s": "AWtmnszFhW2lRXH-xYYF",
      "startTimestamp__l": 1563249600000,
      "saturday__i": 1,
      "legacyVirtualTeamId__l": virtualTeamDbId,
      "name__s": "RS_dCloud_0325",
      "thursday__i": 1,
      "strategyStatus__s": "active",
      "status__i": 1,
      "script__s": `<call-distribution-script name="${name}" scriptid="1563309037656" status="active" start-date="1563235200000" end-date="1752624000000" execution-start-time-of-day="18000000" execution-end-time-of-day="18000000" repetition="daily" xmlns="http://cha.transerainc.com/gen/cds">\n  <day-of-week>sunday</day-of-week>\n  <day-of-week>monday</day-of-week>\n  <day-of-week>tuesday</day-of-week>\n  <day-of-week>wednesday</day-of-week>\n  <day-of-week>thursday</day-of-week>\n  <day-of-week>friday</day-of-week>\n  <day-of-week>saturday</day-of-week>\n  <vdn enterprise-id="${tenantId}" enterprise-name="dCloud" id="${virtualTeamDbId}" vteam-id="${virtualTeamDbId}" vteam-name="${virtualTeamName}" uri="" maximum-time-in-queue="9999" is-monitoring-permitted="true" is-queuing-permitted="true" is-recording-permitted="true" is-retransfer-permitted="false" overflow-uri="" algorithm="longest-waiting-agent-based" num-ring-no-answer-retries="3" num-teams-to-try-for-other-failures="3">\n    <ivr-url park-url="http://localhost/dCloud/defaultmusic_on_hold.wav" requeue-url="http://localhost:8000/dCloud/"/>\n    <load-balance>\n      <cycle number="1">\n        <agent-group id="${teamId}" name="${teamName}" display-name="${teamName}" enterprise-id="${tenantId}" enterprise-name="${tenantName}" site-id="${siteId}" site-name="${siteName}" site-display-name="${siteName}" capacity="0" status="active" uri="0" priority="0"/>\n      </cycle>\n    </load-balance>\n  </vdn>\n  <call-flow-params>\n    <param name="MIQ2" value="defaultmusic_on_hold.wav" valueDataType="string" qualifier="mediaFile" description="(mediaFile, A valid media file.)"/>\n  </call-flow-params>\n</call-distribution-script>`,
      "endDate__l": 1752624000000,
      "daily__i": 1,
      "tuesday__i": 1,
      "virtualTeamId__s": "AWwlRZnHQK-DHWzALbtD",
      "defaultFlag__i": 0,
      "monday__i": 1,
      "grs__i": 0,
      "startDate__l": 1563235200000,
      "currentStatus__i": 0,
      "friday__i": 1,
      "endTimestamp__l": 1752724800000,
      "wednesday__i": 1,
      "sunday__i": 1,
      "startTime__l": 18000000,
      "endTime__l": 18000000
    }
  }
}
